
"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./profile.module.css";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const EMPTY_PROFILE = {
  name: "",
  email: "",
  phone: "",
  location: "",
  headline: "",
  education: "",
  bio: "",
  skills: [],
  resumeUrl: "",
  linkedin: "",
  github: "",
};

function normalizeProfile(data) {
  const user = data?.profile ?? data?.user ?? data;

  return {
    ...EMPTY_PROFILE,
    name: user?.name ?? "",
    email: user?.email ?? "",
    phone: user?.phone ?? "",
    location: user?.location ?? "",
    headline: user?.headline ?? "",
    education: user?.education ?? "",
    bio: user?.bio ?? "",
    skills: Array.isArray(user?.skills)
      ? user.skills
      : typeof user?.skills === "string"
        ? user.skills.split(",").map((skill) => skill.trim()).filter(Boolean)
        : [],
    resumeUrl: user?.resumeUrl ?? user?.resume ?? "",
    linkedin: user?.linkedin ?? "",
    github: user?.github ?? "",
  };
}

function getCompletion(profile) {
  const fields = [
    profile.name,
    profile.phone,
    profile.location,
    profile.headline,
    profile.education,
    profile.bio,
    profile.skills.length > 0 ? "yes" : "",
    profile.resumeUrl,
    profile.linkedin,
    profile.github,
  ];

  return Math.round(
    (fields.filter((value) => String(value || "").trim()).length /
      fields.length) *
      100
  );
}

export default function CandidateProfilePage() {
  const [profile, setProfile] = useState(EMPTY_PROFILE);
  const [form, setForm] = useState(EMPTY_PROFILE);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const loadProfile = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/users/profile`, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(
          response.status === 401
            ? "Your session has expired. Please log in again."
            : "Unable to load your profile."
        );
      }

      const data = await response.json();
      const candidate = normalizeProfile(data);

      setProfile(candidate);
      setForm(candidate);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, []);

useEffect(() => {
  fetch(`${API_URL}/api/users/profile`, {
    credentials: "include",
    cache: "no-store",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load profile");
      return res.json();
    })
    .then((data) => {
      const user = normalizeProfile(data);
      setProfile(user);
      setForm(user);
    })
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
}, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setNotice("");
  }

  async function handleSave(event) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setNotice("");

    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        location: form.location.trim(),
        headline: form.headline.trim(),
        education: form.education.trim(),
        bio: form.bio.trim(),
        skills: form.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
        linkedin: form.linkedin.trim(),
        github: form.github.trim(),
      };

      const response = await fetch(`${API_URL}/api/users/profile`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Unable to save your profile.");
      }

      // Prefer the saved profile returned by the server.
      const saved = data?.profile ?? data?.user;

      const updated = saved
        ? normalizeProfile(saved)
        : { ...form, ...payload };

      setProfile(updated);
      setForm(updated);
      setEditing(false);
      setNotice(data.message || "Profile updated successfully.");
    } catch (err) {
      setError(err.message || "Unable to save your profile.");
    } finally {
      setSaving(false);
    }
  }

  function cancelEditing() {
    setForm(profile);
    setEditing(false);
    setError("");
    setNotice("");
  }

  const completion = getCompletion(profile);

  if (loading) {
    return (
      <main className={styles.page}>
        <div className={styles.state}>
          <span className={styles.loader} />
          <p>Loading your profile...</p>
        </div>
      </main>
    );
  }

  if (error && !profile.email && !profile.name) {
    return (
      <main className={styles.page}>
        <div className={styles.state}>
          <div className={styles.stateIcon}>!</div>
          <h2>Profile unavailable</h2>
          <p role="alert">{error}</p>
          <button className={styles.primaryButton} onClick={loadProfile}>
            Try again
          </button>
        </div>
      </main>
    );
  }

  const initials = profile.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "C";

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Page heading */}
        <header className={styles.pageHeader}>
          <div>
            <span className={styles.eyebrow}>
              CANDIDATE WORKSPACE / PROFILE
            </span>
            <h1>My Profile<span>.</span></h1>
            <p>Manage your professional identity on TrackHire.</p>
          </div>

          {!editing && (
            <button
              className={styles.primaryButton}
              onClick={() => {
                setEditing(true);
                setNotice("");
                setError("");
              }}
            >
              <span aria-hidden="true">✎</span> Edit profile
            </button>
          )}
        </header>

        {error && (
          <div className={styles.errorBanner} role="alert">
            {error}
          </div>
        )}

        {notice && (
          <div className={styles.successBanner} role="status">
            {notice}
          </div>
        )}

        {/* Profile identity card */}
        <section className={styles.heroCard}>
          <div className={styles.heroGlow} />

          <div className={styles.avatar}>
            <span>{initials}</span>
            <i aria-hidden="true" />
          </div>

          <div className={styles.heroInfo}>
            <span className={styles.statusLabel}>
              <i /> CANDIDATE ACCOUNT
            </span>
            <h2>{profile.name || "Your name"}</h2>
            <p>{profile.headline || "Add your professional headline"}</p>
            <div className={styles.identityMeta}>
              <span>✉ {profile.email || "Email not available"}</span>
              {profile.location && (
                <span>⌖ {profile.location}</span>
              )}
            </div>
          </div>

          <div className={styles.completion}>
            <div className={styles.completionTop}>
              <span>PROFILE STRENGTH</span>
              <strong>{completion}%</strong>
            </div>
            <div
              className={styles.progressTrack}
              role="progressbar"
              aria-label="Profile completion"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={completion}
            >
              <div
                className={styles.progressFill}
                style={{ width: `${completion}%` }}
              />
            </div>
            <p>
              {completion === 100
                ? "All profile fields are complete."
                : "Complete your profile to present yourself better."}
            </p>
          </div>
        </section>

        {/* Editable and read-only profile sections */}
        <form onSubmit={handleSave}>
          <div className={styles.sectionGrid}>
            <section className={styles.panel}>
              <div className={styles.panelHeader}>
                <div className={styles.sectionIcon}>01</div>
                <div>
                  <h3>Personal Information</h3>
                  <p>Your basic contact details</p>
                </div>
              </div>

              <div className={styles.formGrid}>
                <label className={styles.field}>
                  <span>Full name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={!editing}
                    required
                    maxLength={100}
                    placeholder="Your full name"
                  />
                </label>

                <label className={styles.field}>
                  <span>Email address</span>
                  <input
                    value={profile.email}
                    type="email"
                    disabled
                    readOnly
                  />
                  <small>Managed by your account</small>
                </label>

                <label className={styles.field}>
                  <span>Phone number</span>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={!editing}
                    maxLength={20}
                    placeholder="Your contact number"
                  />
                </label>

                <label className={styles.field}>
                  <span>Location</span>
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    disabled={!editing}
                    maxLength={120}
                    placeholder="City, country"
                  />
                </label>
              </div>
            </section>

            <section className={styles.panel}>
              <div className={styles.panelHeader}>
                <div className={styles.sectionIcon}>02</div>
                <div>
                  <h3>Professional Details</h3>
                  <p>Education and career introduction</p>
                </div>
              </div>

              <div className={styles.formGrid}>
                <label className={`${styles.field} ${styles.fullWidth}`}>
                  <span>Professional headline</span>
                  <input
                    name="headline"
                    value={form.headline}
                    onChange={handleChange}
                    disabled={!editing}
                    maxLength={160}
                    placeholder="e.g. Computer Science Student"
                  />
                </label>

                <label className={`${styles.field} ${styles.fullWidth}`}>
                  <span>Education</span>
                  <input
                    name="education"
                    value={form.education}
                    onChange={handleChange}
                    disabled={!editing}
                    maxLength={200}
                    placeholder="Degree, university, graduation year"
                  />
                </label>

                <label className={`${styles.field} ${styles.fullWidth}`}>
                  <span>About me</span>
                  <textarea
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    disabled={!editing}
                    rows={4}
                    maxLength={1500}
                    placeholder="Introduce yourself, your interests, and career goals."
                  />
                  <small>{form.bio.length}/1500 characters</small>
                </label>
              </div>
            </section>

            <section className={styles.panel}>
              <div className={styles.panelHeader}>
                <div className={styles.sectionIcon}>03</div>
                <div>
                  <h3>Skills & Expertise</h3>
                  <p>Technologies and strengths</p>
                </div>
              </div>

              {editing ? (
                <label className={styles.field}>
                  <span>Skills (comma-separated)</span>
                  <textarea
                    name="skills"
                    value={form.skills.join(", ")}
                    onChange={(event) =>
                      setForm((previous) => ({
                        ...previous,
                        skills: event.target.value
                          .split(",")
                          .map((skill) => skill.trimStart())
                          .slice(0, 40),
                      }))
                    }
                    rows={3}
                    maxLength={1000}
                    placeholder="Java, React, Node.js, MongoDB"
                  />
                </label>
              ) : profile.skills.length ? (
                <div className={styles.skillsList}>
                  {profile.skills.map((skill, index) => (
                    <span className={styles.skill} key={`${skill}-${index}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <div className={styles.emptyState}>
                  No skills added yet.
                </div>
              )}

              <div className={styles.linksBlock}>
                <label className={styles.field}>
                  <span>LinkedIn URL</span>
                  <input
                    name="linkedin"
                    type="url"
                    value={form.linkedin}
                    onChange={handleChange}
                    disabled={!editing}
                    maxLength={300}
                    placeholder="https://linkedin.com/in/..."
                  />
                </label>

                <label className={styles.field}>
                  <span>GitHub URL</span>
                  <input
                    name="github"
                    type="url"
                    value={form.github}
                    onChange={handleChange}
                    disabled={!editing}
                    maxLength={300}
                    placeholder="https://github.com/..."
                  />
                </label>
              </div>
            </section>

            <section className={styles.panel}>
              <div className={styles.panelHeader}>
                <div className={styles.sectionIcon}>04</div>
                <div>
                  <h3>Resume</h3>
                  <p>Your professional document</p>
                </div>
              </div>

              {profile.resumeUrl ? (
                <div className={styles.resumeCard}>
                  <div className={styles.resumeIcon}>PDF</div>
                  <div className={styles.resumeInfo}>
                    <strong>Saved resume</strong>
                    <span>Resume associated with your profile</span>
                  </div>
                  <a
                    className={styles.secondaryButton}
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View ↗
                  </a>
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <div className={styles.uploadIcon}>↑</div>
                  <strong>No resume available</strong>
                  <p>
                    Your uploaded resume will appear here once
                    resume storage is connected.
                  </p>
                </div>
              )}
            </section>
          </div>

          {editing && (
            <div className={styles.formFooter}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={cancelEditing}
                disabled={saving}
              >
                Cancel
              </button>

              <button
                type="submit"
                className={styles.primaryButton}
                disabled={saving}
              >
                {saving ? "Saving..." : "Save changes →"}
              </button>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}

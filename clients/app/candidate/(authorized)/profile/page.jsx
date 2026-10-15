"use client";

import { useEffect, useState } from "react";
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
  const user = data?.profile || data?.user || data;

  return {
    ...EMPTY_PROFILE,
    ...user,
    skills: Array.isArray(user?.skills) ? user.skills : [],
    resumeUrl: user?.resumeUrl || user?.resume || "",
  };
}

export default function CandidateProfilePage() {
  const [profile, setProfile] = useState(EMPTY_PROFILE);
  const [form, setForm] = useState(EMPTY_PROFILE);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/profile`, {
          credentials: "include",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(
            response.status === 401
              ? "Please log in again."
              : "Unable to load profile."
          );
        }

        const data = await response.json();
        const user = normalizeProfile(data);

        setProfile(user);
        setForm(user);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSave(event) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        location: form.location.trim(),
        headline: form.headline.trim(),
        education: form.education.trim(),
        bio: form.bio.trim(),
        skills: form.skills,
        linkedin: form.linkedin.trim(),
        github: form.github.trim(),
      };

      const response = await fetch(`${API_URL}/api/profile`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to save profile.");
      }

      const updated = normalizeProfile(data);
      setProfile(updated);
      setForm(updated);
      setEditing(false);
      setMessage(data.message || "Profile updated successfully.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  const fields = [
    ["name", "Full name", "Enter your full name"],
    ["phone", "Phone number", "Enter your phone number"],
    ["location", "Location", "City, Country"],
    ["headline", "Professional headline", "e.g. Computer Science Student"],
    ["education", "Education", "Degree and university"],
    ["linkedin", "LinkedIn URL", "https://linkedin.com/in/..."],
    ["github", "GitHub URL", "https://github.com/..."],
  ];

  const completionFields = [
    profile.name,
    profile.phone,
    profile.location,
    profile.headline,
    profile.education,
    profile.bio,
    profile.skills.length ? "yes" : "",
    profile.resumeUrl,
  ];

  const completion = Math.round(
    (completionFields.filter((value) => String(value || "").trim()).length /
      completionFields.length) *
      100
  );

  const initials =
    profile.name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "C";

  if (loading) {
    return (
      <main className={styles.page}>
        <div className={styles.state}>Loading your profile...</div>
      </main>
    );
  }

  if (error && !profile.name && !profile.email) {
    return (
      <main className={styles.page}>
        <div className={styles.state}>
          <h2>Profile unavailable</h2>
          <p>{error}</p>
          <button
            className={styles.primaryButton}
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <div>
            <span className={styles.eyebrow}>
              TRACKHIRE / CANDIDATE
            </span>
            <h1>
              My Profile<span>.</span>
            </h1>
            <p>Manage your professional identity and career details.</p>
          </div>

          {!editing && (
            <button
              className={styles.primaryButton}
              onClick={() => {
                setEditing(true);
                setMessage("");
              }}
            >
              ✎ Edit Profile
            </button>
          )}
        </header>

        {error && <div className={styles.error}>{error}</div>}
        {message && <div className={styles.success}>{message}</div>}

        <section className={styles.hero}>
          <div className={styles.avatar}>{initials}</div>

          <div className={styles.identity}>
            <span className={styles.status}>
              <i /> CANDIDATE ACCOUNT
            </span>
            <h2>{profile.name || "Your name"}</h2>
            <p>{profile.headline || "Add a professional headline"}</p>
            <span className={styles.email}>
              {profile.email || "Email unavailable"}
            </span>
          </div>

          <div className={styles.completion}>
            <div>
              <span>PROFILE COMPLETION</span>
              <strong>{completion}%</strong>
            </div>
            <div className={styles.progress}>
              <span style={{ width: `${completion}%` }} />
            </div>
          </div>
        </section>

        <form onSubmit={handleSave}>
          <div className={styles.grid}>
            <section className={styles.card}>
              <div className={styles.cardHeading}>
                <span>01</span>
                <div>
                  <h3>Personal Information</h3>
                  <p>Your basic contact details</p>
                </div>
              </div>

              <div className={styles.fields}>
                {fields.slice(0, 3).map(([name, label, placeholder]) => (
                  <label className={styles.field} key={name}>
                    <span>{label}</span>
                    <input
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      disabled={!editing}
                    />
                  </label>
                ))}

                <label className={styles.field}>
                  <span>Email address</span>
                  <input value={profile.email} disabled readOnly />
                </label>
              </div>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHeading}>
                <span>02</span>
                <div>
                  <h3>Professional Details</h3>
                  <p>Education and introduction</p>
                </div>
              </div>

              <div className={styles.fields}>
                {fields.slice(3, 5).map(([name, label, placeholder]) => (
                  <label className={styles.field} key={name}>
                    <span>{label}</span>
                    <input
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      disabled={!editing}
                    />
                  </label>
                ))}

                <label className={`${styles.field} ${styles.full}`}>
                  <span>About me</span>
                  <textarea
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    placeholder="Introduce yourself and your career goals..."
                    disabled={!editing}
                    rows={4}
                    maxLength={1500}
                  />
                  <small>{form.bio.length}/1500 characters</small>
                </label>
              </div>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHeading}>
                <span>03</span>
                <div>
                  <h3>Skills & Expertise</h3>
                  <p>Your technical and professional skills</p>
                </div>
              </div>

              {editing ? (
                <label className={styles.field}>
                  <span>Skills (comma-separated)</span>
                  <textarea
                    value={form.skills.join(", ")}
                    onChange={(event) =>
                      setForm((previous) => ({
                        ...previous,
                        skills: event.target.value
                          .split(",")
                          .map((skill) => skill.trim())
                          .filter(Boolean)
                          .slice(0, 40),
                      }))
                    }
                    placeholder="Java, React, Node.js"
                    rows={3}
                  />
                </label>
              ) : (
                <div className={styles.skills}>
                  {profile.skills.length ? (
                    profile.skills.map((skill, index) => (
                      <span key={`${skill}-${index}`}>{skill}</span>
                    ))
                  ) : (
                    <p className={styles.empty}>No skills added yet.</p>
                  )}
                </div>
              )}

              <div className={styles.socialFields}>
                {fields.slice(5).map(([name, label, placeholder]) => (
                  <label className={styles.field} key={name}>
                    <span>{label}</span>
                    <input
                      name={name}
                      type="url"
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      disabled={!editing}
                    />
                  </label>
                ))}
              </div>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHeading}>
                <span>04</span>
                <div>
                  <h3>My Resume</h3>
                  <p>Your saved professional document</p>
                </div>
              </div>

              {profile.resumeUrl ? (
                <div className={styles.resume}>
                  <div className={styles.resumeIcon}>PDF</div>
                  <div className={styles.resumeInfo}>
                    <strong>Saved resume</strong>
                    <p>Resume linked to your account</p>
                  </div>
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryButton}
                  >
                    View ↗
                  </a>
                </div>
              ) : (
                <div className={styles.emptyResume}>
                  <span>↑</span>
                  <strong>No resume uploaded</strong>
                  <p>Your saved resume will appear here.</p>
                </div>
              )}
            </section>
          </div>

          {editing && (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => {
                  setForm(profile);
                  setEditing(false);
                  setError("");
                  setMessage("");
                }}
                disabled={saving}
              >
                Cancel
              </button>

              <button
                type="submit"
                className={styles.primaryButton}
                disabled={saving}
              >
                {saving ? "Saving..." : "Save Changes →"}
              </button>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
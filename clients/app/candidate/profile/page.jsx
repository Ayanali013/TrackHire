"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./profile.module.css";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  location: "",
  headline: "",
  skills: "",
  bio: "",
};

export default function CandidateProfilePage() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/api/candidate/profile`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
          },
          cache: "no-store",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to load your profile."
        );
      }

      // Supports either { user: {...} } or { profile: {...} }.
      const profile = data.profile || data.user || data;

      setForm({
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
        location: profile.location || "",
        headline: profile.headline || "",
        skills: Array.isArray(profile.skills)
          ? profile.skills.join(", ")
          : profile.skills || "",
        bio: profile.bio || "",
      });
    } catch (err) {
      setError(
        err.message ||
          "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
  const loadProfile = async () => {
    await fetchProfile();
  };

  loadProfile();
}, [fetchProfile]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  };

  const handleCancel = () => {
    setEditing(false);
    setMessage("");
    fetchProfile();
  };

  const handleSubmit = async (event) => {
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
        skills: form.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
        bio: form.bio.trim(),
      };

      const response = await fetch(
        `${API_URL}/api/candidate/profile`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to save profile changes."
        );
      }

      const profile = data.profile || data.user || data;

      setForm((previous) => ({
        ...previous,
        name: profile.name ?? payload.name,
        email: profile.email ?? previous.email,
        phone: profile.phone ?? payload.phone,
        location: profile.location ?? payload.location,
        headline: profile.headline ?? payload.headline,
        skills: Array.isArray(profile.skills)
          ? profile.skills.join(", ")
          : profile.skills ?? payload.skills.join(", "),
        bio: profile.bio ?? payload.bio,
      }));

      setEditing(false);
      setMessage("Your profile has been updated successfully.");
    } catch (err) {
      setError(
        err.message || "Something went wrong while saving."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <section className={styles.page}>
        <div className={styles.loading}>
          <span className={styles.spinner} />
          <p>Loading your profile...</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      {/* Page heading */}
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>ACCOUNT SETTINGS</p>
          <h2>My Profile</h2>
          <p className={styles.subtitle}>
            Manage your personal information and professional details.
          </p>
        </div>

        {!editing && (
          <button
            type="button"
            className={styles.primaryButton}
            onClick={() => {
              setEditing(true);
              setError("");
              setMessage("");
            }}
          >
            <span>✎</span> Edit Profile
          </button>
        )}
      </div>

      {error && (
        <div className={styles.errorMessage} role="alert">
          <span>!</span> {error}
          {error.toLowerCase().includes("load") && (
            <button type="button" onClick={fetchProfile}>
              Retry
            </button>
          )}
        </div>
      )}

      {message && (
        <div className={styles.successMessage} role="status">
          <span>✓</span> {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Profile header */}
        <div className={styles.profileCard}>
          <div className={styles.profileBanner} />

          <div className={styles.profileIdentity}>
            <div className={styles.largeAvatar}>
              {form.name
                ? form.name.charAt(0).toUpperCase()
                : "?"}
            </div>

            <div className={styles.identityDetails}>
              <h3>{form.name || "Your name"}</h3>
              <p>{form.headline || "Add your professional headline"}</p>
              <span className={styles.roleBadge}>
                Candidate
              </span>
            </div>
          </div>
        </div>

        {/* Personal information */}
        <div className={styles.card}>
          <div className={styles.cardHeading}>
            <div className={styles.sectionIcon}>♙</div>
            <div>
              <h3>Personal Information</h3>
              <p>Your basic contact details</p>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.field}>
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                maxLength={100}
                disabled={!editing || saving}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                readOnly
                disabled
              />
              <small>Email is managed by your account.</small>
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                maxLength={20}
                disabled={!editing || saving}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="location">Location</label>
              <input
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="City, State, Country"
                maxLength={150}
                disabled={!editing || saving}
              />
            </div>
          </div>
        </div>

        {/* Professional information */}
        <div className={styles.card}>
          <div className={styles.cardHeading}>
            <div className={styles.sectionIcon}>⌘</div>
            <div>
              <h3>Professional Information</h3>
              <p>Help recruiters understand your skills and interests</p>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <label htmlFor="headline">
                Professional Headline
              </label>
              <input
                id="headline"
                name="headline"
                value={form.headline}
                onChange={handleChange}
                placeholder="e.g. Software Developer | React | Node.js"
                maxLength={160}
                disabled={!editing || saving}
              />
            </div>

            <div className={`${styles.field} ${styles.fullWidth}`}>
              <label htmlFor="skills">Skills</label>
              <input
                id="skills"
                name="skills"
                value={form.skills}
                onChange={handleChange}
                placeholder="Java, React, Node.js, MongoDB"
                maxLength={1000}
                disabled={!editing || saving}
              />
              <small>Separate each skill with a comma.</small>

              {form.skills.trim() && (
                <div className={styles.skillList}>
                  {form.skills
                    .split(",")
                    .map((skill) => skill.trim())
                    .filter(Boolean)
                    .map((skill, index) => (
                      <span key={`${skill}-${index}`}>
                        {skill}
                      </span>
                    ))}
                </div>
              )}
            </div>

            <div className={`${styles.field} ${styles.fullWidth}`}>
              <label htmlFor="bio">About Me</label>
              <textarea
                id="bio"
                name="bio"
                value={form.bio}
                onChange={handleChange}
                placeholder="Tell recruiters about your background, interests, and career goals..."
                rows={5}
                maxLength={2000}
                disabled={!editing || saving}
              />
              <small className={styles.characterCount}>
                {form.bio.length}/2000 characters
              </small>
            </div>
          </div>
        </div>

        {/* Form actions */}
        {editing && (
          <div className={styles.formActions}>
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={handleCancel}
              disabled={saving}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={styles.primaryButton}
              disabled={saving}
            >
              {saving ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>
        )}
      </form>
    </section>
  );
}

"use client";

import PageLayout from "../page";
import styles from "./profile.module.css";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Edit3,
  Save,
  FileText,
  Camera,
  ShieldCheck,
} from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Ayan Ali",
    email: "ayan@example.com",
    phone: "+91 9876543210",
    location: "Lucknow, India",
    role: "Candidate",
    education: "B.Tech Computer Science & Engineering",
    university: "Integral University, Lucknow",
    experience: "Fresher",
    bio: "Computer Science student passionate about software development, web technologies and machine learning.",
    skills: [
      "Java",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
    ],
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated Profile:", profile);
  };

  return (
    <PageLayout>

      {/* ================= PROFILE PAGE ================= */}

      <div className={styles.profilePage}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Profile
          </h1>

          <p className={styles.subtitle}>
            Manage your personal information and account details
          </p>
        </div>

        {/* Main Grid */}
        <div className={styles.mainGrid}>

          {/* ================= LEFT PROFILE CARD ================= */}

          <div className={styles.card}>

            <div className={styles.avatarContainer}>

              {/* Avatar */}
              <div className={styles.avatar}>

                <div className={styles.avatarContent}>
                  {profile.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <button
                  type="button"
                  className={styles.cameraButton}
                >
                  <Camera size={16} />
                </button>

              </div>

              {/* Name */}
              <h2 className={styles.profileName}>
                {profile.name}
              </h2>

              {/* Role */}
              <p className={styles.profileRole}>
                {profile.role}
              </p>

              {/* Verified */}
              <div className={styles.verified}>
                <ShieldCheck size={16} />
                Verified Account
              </div>

            </div>

            {/* Contact Information */}
            <div className={styles.contact}>

              <InfoRow
                icon={<Mail size={17} />}
                text={profile.email}
              />

              <InfoRow
                icon={<Phone size={17} />}
                text={profile.phone}
              />

              <InfoRow
                icon={<MapPin size={17} />}
                text={profile.location}
              />

            </div>

          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className={styles.rightContent}>

            {/* ================= PERSONAL INFORMATION ================= */}

            <section className={styles.card}>

              <div className={styles.sectionHeader}>

                <div>
                  <h2 className={styles.sectionTitle}>
                    Personal Information
                  </h2>

                  <p className={styles.sectionDescription}>
                    Your basic account information
                  </p>
                </div>

                {!isEditing ? (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className={styles.editButton}
                  >
                    <Edit3 size={16} />
                    Edit Profile
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSave}
                    className={styles.saveButton}
                  >
                    <Save size={16} />
                    Save Changes
                  </button>
                )}

              </div>

              <div className={styles.inputGrid}>

                <InputField
                  label="Full Name"
                  name="name"
                  value={profile.name}
                  icon={<User size={17} />}
                  editing={isEditing}
                  onChange={handleChange}
                />

                <InputField
                  label="Email Address"
                  name="email"
                  value={profile.email}
                  icon={<Mail size={17} />}
                  editing={isEditing}
                  onChange={handleChange}
                />

                <InputField
                  label="Phone Number"
                  name="phone"
                  value={profile.phone}
                  icon={<Phone size={17} />}
                  editing={isEditing}
                  onChange={handleChange}
                />

                <InputField
                  label="Location"
                  name="location"
                  value={profile.location}
                  icon={<MapPin size={17} />}
                  editing={isEditing}
                  onChange={handleChange}
                />

              </div>

            </section>

            {/* ================= PROFESSIONAL INFORMATION ================= */}

            <section className={styles.card}>

              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  Professional Information
                </h2>

                <p className={styles.sectionDescription}>
                  Your education and professional background
                </p>
              </div>

              <div className={styles.inputGrid}>

                <InputField
                  label="Education"
                  name="education"
                  value={profile.education}
                  icon={<GraduationCap size={17} />}
                  editing={isEditing}
                  onChange={handleChange}
                />

                <InputField
                  label="University"
                  name="university"
                  value={profile.university}
                  icon={<GraduationCap size={17} />}
                  editing={isEditing}
                  onChange={handleChange}
                />

                <InputField
                  label="Experience"
                  name="experience"
                  value={profile.experience}
                  icon={<Briefcase size={17} />}
                  editing={isEditing}
                  onChange={handleChange}
                />

              </div>

            </section>

            {/* ================= ABOUT ME ================= */}

            <section className={styles.card}>

              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  About Me
                </h2>

                <p className={styles.sectionDescription}>
                  Tell recruiters about yourself
                </p>
              </div>

              {isEditing ? (
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  rows={4}
                  className={styles.textarea}
                />
              ) : (
                <p className={styles.bio}>
                  {profile.bio}
                </p>
              )}

            </section>

            {/* ================= SKILLS ================= */}

            <section className={styles.card}>

              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  Skills
                </h2>

                <p className={styles.sectionDescription}>
                  Technologies and skills
                </p>
              </div>

              <div className={styles.skillGrid}>

                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={styles.skillItem}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </section>

            {/* ================= RESUME ================= */}

            <section className={styles.card}>

              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  Resume
                </h2>
              </div>

              <div className={styles.resumeContent}>

                <div className={styles.resumeItem}>

                  <div className={styles.resumeIcon}>
                    <FileText size={23} />
                  </div>

                  <div>
                    <h3 className={styles.resumeTitle}>
                      Resume
                    </h3>

                    <p className={styles.resumeDescription}>
                      Ayan_Ali_Resume.pdf
                    </p>
                  </div>

                </div>

                <div className={styles.resumeButtons}>

                  <button
                    type="button"
                    className={styles.resumeButton}
                  >
                    View
                  </button>

                  <button
                    type="button"
                    className={styles.resumeButton}
                  >
                    Replace
                  </button>

                </div>

              </div>

            </section>

          </div>

        </div>

      </div>

    </PageLayout>
  );
}


/* =====================================================
   INFO ROW COMPONENT
===================================================== */

function InfoRow({ icon, text }) {
  return (
    <div className={styles.infoRow}>

      <div className={styles.infoIcon}>
        {icon}
      </div>

      <span className={styles.infoText}>
        {text}
      </span>

    </div>
  );
}


/* =====================================================
   INPUT FIELD COMPONENT
===================================================== */

function InputField({
  label,
  name,
  value,
  icon,
  editing,
  onChange,
}) {
  return (
    <div>

      <label className={styles.inputLabel}>
        {label}
      </label>

      <div className={styles.inputContainer}>

        <div className={styles.inputIcon}>
          {icon}
        </div>

        <input
          type="text"
          name={name}
          value={value}
          disabled={!editing}
          onChange={onChange}
          className={styles.inputField}
        />

      </div>

    </div>
  );
}


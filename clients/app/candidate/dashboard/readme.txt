"use client";

import Link from "next/link";
import styles from "./dashboard.module.css";

export default function CandidateDashboard() {
  return (
    <main className={styles.dashboardPage}>

      {/* Background */}
      <div className={styles.backgroundGlow}></div>
      <div className={styles.backgroundGrid}></div>

      {/* Navbar */}
      <nav className={styles.navbar}>

        <Link href="/" className={styles.logo}>
          Track<span>Hire</span>
        </Link>

        <div className={styles.navLinks}>
          <Link
            href="/candidate/dashboard"
            className={styles.activeLink}
          >
            Dashboard
          </Link>

          <Link href="/candidate/jobs">
            Jobs
          </Link>

          <Link href="/candidate/applications">
            My Applications
          </Link>

          <Link href="/candidate/profile">
            Profile
          </Link>
        </div>

        <Link
          href="/candidate/login"
          className={styles.logoutButton}
        >
          Logout
        </Link>

      </nav>

      {/* Main Content */}
      <section className={styles.dashboardContainer}>

        {/* Welcome */}
        <div className={styles.welcomeSection}>

          <div>
            <p className={styles.smallLabel}>
              CANDIDATE DASHBOARD
            </p>

            <h1>
              Welcome back, <span>Ayan</span> 👋
            </h1>

            <p>
              Discover new opportunities and keep track of
              your job applications.
            </p>
          </div>

          <Link
            href="/candidate/jobs"
            className={styles.findJobButton}
          >
            Find a Job
            <span>→</span>
          </Link>

        </div>

        {/* Statistics */}
        <div className={styles.statsGrid}>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>📄</div>

            <div>
              <span>Applications</span>
              <strong>12</strong>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>★</div>

            <div>
              <span>Shortlisted</span>
              <strong>3</strong>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>✓</div>

            <div>
              <span>Accepted</span>
              <strong>1</strong>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>◷</div>

            <div>
              <span>Under Review</span>
              <strong>5</strong>
            </div>
          </div>

        </div>

        {/* Dashboard Grid */}
        <div className={styles.contentGrid}>

          {/* Recommended Jobs */}
          <section className={styles.jobsSection}>

            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionLabel}>
                  OPPORTUNITIES
                </p>

                <h2>Recommended Jobs</h2>
              </div>

              <Link href="/candidate/jobs">
                View all →
              </Link>
            </div>

            {/* Job Card */}
            <div className={styles.jobCard}>

              <div className={styles.companyLogo}>
                G
              </div>

              <div className={styles.jobInfo}>
                <h3>Software Engineer</h3>

                <p>
                  Google · Remote
                </p>

                <div className={styles.jobTags}>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>

              <div className={styles.jobRight}>
                <span className={styles.salary}>
                  ₹10–15 LPA
                </span>

                <Link href="/candidate/jobs">
                  Apply →
                </Link>
              </div>

            </div>

            {/* Job Card */}
            <div className={styles.jobCard}>

              <div className={styles.companyLogo}>
                M
              </div>

              <div className={styles.jobInfo}>
                <h3>Frontend Developer</h3>

                <p>
                  Microsoft · Bangalore
                </p>

                <div className={styles.jobTags}>
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>CSS</span>
                </div>
              </div>

              <div className={styles.jobRight}>
                <span className={styles.salary}>
                  ₹8–12 LPA
                </span>

                <Link href="/candidate/jobs">
                  Apply →
                </Link>
              </div>

            </div>

            {/* Job Card */}
            <div className={styles.jobCard}>

              <div className={styles.companyLogo}>
                A
              </div>

              <div className={styles.jobInfo}>
                <h3>Full Stack Developer</h3>

                <p>
                  Amazon · Hyderabad
                </p>

                <div className={styles.jobTags}>
                  <span>JavaScript</span>
                  <span>Express</span>
                  <span>React</span>
                </div>
              </div>

              <div className={styles.jobRight}>
                <span className={styles.salary}>
                  ₹12–18 LPA
                </span>

                <Link href="/candidate/jobs">
                  Apply →
                </Link>
              </div>

            </div>

          </section>

          {/* Recent Applications */}
          <section className={styles.applicationSection}>

            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionLabel}>
                  YOUR ACTIVITY
                </p>

                <h2>Recent Applications</h2>
              </div>

              <Link href="/candidate/applications">
                View all →
              </Link>
            </div>

            {/* Application */}
            <div className={styles.applicationCard}>

              <div className={styles.applicationCompany}>
                G
              </div>

              <div className={styles.applicationInfo}>
                <strong>Software Engineer</strong>
                <span>Google</span>
              </div>

              <span
                className={`${styles.status} ${styles.shortlisted}`}
              >
                Shortlisted
              </span>

            </div>

            {/* Application */}
            <div className={styles.applicationCard}>

              <div className={styles.applicationCompany}>
                M
              </div>

              <div className={styles.applicationInfo}>
                <strong>Frontend Developer</strong>
                <span>Microsoft</span>
              </div>

              <span
                className={`${styles.status} ${styles.review}`}
              >
                Under Review
              </span>

            </div>

            {/* Application */}
            <div className={styles.applicationCard}>

              <div className={styles.applicationCompany}>
                A
              </div>

              <div className={styles.applicationInfo}>
                <strong>Backend Developer</strong>
                <span>Amazon</span>
              </div>

              <span
                className={`${styles.status} ${styles.applied}`}
              >
                Applied
              </span>

            </div>

            {/* Profile Completion */}
            <div className={styles.profileCard}>

              <div className={styles.profileHeader}>
                <div>
                  <span>PROFILE COMPLETION</span>
                  <strong>75%</strong>
                </div>
              </div>

              <div className={styles.progressBar}>
                <div></div>
              </div>

              <p>
                Complete your profile to improve your chances
                of getting noticed by recruiters.
              </p>

              <Link href="/candidate/profile">
                Complete Profile →
              </Link>

            </div>

          </section>

        </div>

      </section>

    </main>
  );
}






































.dashboardPage {
  min-height: 100svh;
  position: relative;
  overflow-x: hidden;

  background:
    radial-gradient(
      circle at 80% 10%,
      rgba(100, 80, 255, 0.12),
      transparent 30%
    ),
    radial-gradient(
      circle at 10% 80%,
      rgba(0, 200, 255, 0.07),
      transparent 30%
    ),
    #07070d;

  color: white;
}

/* =========================
   BACKGROUND
========================= */

.backgroundGlow {
  position: fixed;

  width: 500px;
  height: 500px;

  right: -150px;
  top: 100px;

  border-radius: 50%;

  background: rgba(100, 80, 255, 0.08);

  filter: blur(120px);

  pointer-events: none;
}

.backgroundGrid {
  position: fixed;

  inset: 0;

  opacity: 0.07;

  background-image:
    linear-gradient(
      rgba(255, 255, 255, 0.04) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.04) 1px,
      transparent 1px
    );

  background-size: 70px 70px;

  pointer-events: none;
}

/* =========================
   NAVBAR
========================= */

.navbar {
  width: min(1280px, 92%);

  height: 78px;

  margin: auto;

  display: flex;

  align-items: center;

  justify-content: space-between;

  position: relative;

  z-index: 10;

  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.logo {
  color: white;

  text-decoration: none;

  font-size: 26px;

  font-weight: 800;

  letter-spacing: -1px;
}

.logo span {
  background: linear-gradient(
    90deg,
    #7c5cff,
    #00d9ff
  );

  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
}

.navLinks {
  display: flex;

  align-items: center;

  gap: 30px;
}

.navLinks a {
  color: rgba(255, 255, 255, 0.45);

  text-decoration: none;

  font-size: 12px;

  transition: 0.3s ease;
}

.navLinks a:hover,
.navLinks .activeLink {
  color: white;
}

.logoutButton {
  padding: 9px 16px;

  border-radius: 9px;

  border: 1px solid rgba(255, 255, 255, 0.1);

  background: rgba(255, 255, 255, 0.04);

  color: rgba(255, 255, 255, 0.7);

  text-decoration: none;

  font-size: 11px;

  transition: 0.3s ease;
}

.logoutButton:hover {
  color: white;

  background: rgba(255, 255, 255, 0.08);
}

/* =========================
   CONTAINER
========================= */

.dashboardContainer {
  width: min(1280px, 92%);

  margin: auto;

  padding: 55px 0 80px;

  position: relative;

  z-index: 2;
}

/* =========================
   WELCOME
========================= */

.welcomeSection {
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 30px;

  margin-bottom: 35px;
}

.smallLabel {
  margin: 0 0 10px;

  color: #8d7cff;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: 3px;
}

.welcomeSection h1 {
  margin: 0;

  font-size: clamp(34px, 4vw, 52px);

  letter-spacing: -2px;
}

.welcomeSection h1 span {
  background: linear-gradient(
    90deg,
    #8b6cff,
    #00d9ff
  );

  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
}

.welcomeSection p:last-child {
  margin: 12px 0 0;

  color: rgba(255, 255, 255, 0.42);

  font-size: 13px;
}

.findJobButton {
  height: 46px;

  padding: 0 18px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  border-radius: 10px;

  background: linear-gradient(
    100deg,
    #7658ff,
    #5c75ff
  );

  color: white;

  text-decoration: none;

  font-size: 12px;

  font-weight: 600;

  white-space: nowrap;

  transition: 0.3s ease;
}

.findJobButton:hover {
  transform: translateY(-2px);

  box-shadow:
    0 10px 30px rgba(100, 80, 255, 0.25);
}

.findJobButton span {
  transition: 0.3s ease;
}

.findJobButton:hover span {
  transform: translateX(4px);
}

/* =========================
   STATS
========================= */

.statsGrid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 15px;

  margin-bottom: 45px;
}

.statCard {
  min-height: 105px;

  padding: 20px;

  display: flex;

  align-items: center;

  gap: 15px;

  background: rgba(18, 18, 30, 0.65);

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 16px;

  backdrop-filter: blur(15px);

  transition: 0.3s ease;
}

.statCard:hover {
  transform: translateY(-3px);

  border-color: rgba(130, 110, 255, 0.25);
}

.statIcon {
  width: 42px;
  height: 42px;

  display: grid;

  place-items: center;

  border-radius: 12px;

  background: rgba(120, 100, 255, 0.1);

  color: #9b8cff;

  font-size: 15px;
}

.statCard span,
.statCard strong {
  display: block;
}

.statCard span {
  color: rgba(255, 255, 255, 0.4);

  font-size: 10px;

  margin-bottom: 5px;
}

.statCard strong {
  font-size: 24px;
}

/* =========================
   CONTENT GRID
========================= */

.contentGrid {
  display: grid;

  grid-template-columns: 1.45fr 1fr;

  gap: 25px;
}

/* =========================
   SECTION
========================= */

.jobsSection,
.applicationSection {
  min-width: 0;
}

.sectionHeader {
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  margin-bottom: 18px;
}

.sectionLabel {
  margin: 0 0 5px;

  color: #8173e8;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 2px;
}

.sectionHeader h2 {
  margin: 0;

  font-size: 21px;

  letter-spacing: -0.5px;
}

.sectionHeader > a {
  color: #8e82ff;

  text-decoration: none;

  font-size: 11px;
}

.sectionHeader > a:hover {
  color: white;
}

/* =========================
   JOB CARD
========================= */

.jobCard {
  min-height: 130px;

  padding: 20px;

  margin-bottom: 12px;

  display: flex;

  align-items: center;

  gap: 16px;

  background: rgba(18, 18, 30, 0.65);

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 15px;

  backdrop-filter: blur(15px);

  transition: 0.3s ease;
}

.jobCard:hover {
  transform: translateY(-3px);

  border-color: rgba(130, 110, 255, 0.25);
}

.companyLogo {
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  display: grid;

  place-items: center;

  border-radius: 13px;

  background:
    linear-gradient(
      135deg,
      rgba(120, 100, 255, 0.2),
      rgba(0, 210, 255, 0.1)
    );

  border: 1px solid rgba(140, 120, 255, 0.18);

  color: #a99bff;

  font-size: 18px;

  font-weight: 700;
}

.jobInfo {
  flex: 1;

  min-width: 0;
}

.jobInfo h3 {
  margin: 0;

  font-size: 14px;
}

.jobInfo p {
  margin: 5px 0 10px;

  color: rgba(255, 255, 255, 0.4);

  font-size: 10px;
}

.jobTags {
  display: flex;

  flex-wrap: wrap;

  gap: 5px;
}

.jobTags span {
  padding: 4px 7px;

  border-radius: 5px;

  background: rgba(255, 255, 255, 0.04);

  color: rgba(255, 255, 255, 0.4);

  font-size: 8px;
}

.jobRight {
  display: flex;

  flex-direction: column;

  align-items: flex-end;

  gap: 12px;
}

.salary {
  color: rgba(255, 255, 255, 0.55);

  font-size: 10px;

  white-space: nowrap;
}

.jobRight a {
  color: #9b8cff;

  text-decoration: none;

  font-size: 10px;

  font-weight: 600;
}

.jobRight a:hover {
  color: white;
}

/* =========================
   APPLICATION CARD
========================= */

.applicationCard {
  padding: 15px;

  margin-bottom: 10px;

  display: flex;

  align-items: center;

  gap: 12px;

  background: rgba(18, 18, 30, 0.65);

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 13px;

  backdrop-filter: blur(15px);
}

.applicationCompany {
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border-radius: 10px;

  background: rgba(120, 100, 255, 0.1);

  color: #a99bff;

  font-size: 13px;

  font-weight: 700;
}

.applicationInfo {
  flex: 1;

  min-width: 0;
}

.applicationInfo strong,
.applicationInfo span {
  display: block;
}

.applicationInfo strong {
  font-size: 11px;

  margin-bottom: 4px;
}

.applicationInfo span {
  color: rgba(255, 255, 255, 0.35);

  font-size: 9px;
}

.status {
  padding: 6px 8px;

  border-radius: 6px;

  font-size: 8px;

  white-space: nowrap;
}

.shortlisted {
  background: rgba(100, 255, 190, 0.08);

  color: #6dffcb;
}

.review {
  background: rgba(255, 200, 80, 0.08);

  color: #ffd875;
}

.applied {
  background: rgba(120, 150, 255, 0.08);

  color: #9aaaff;
}

/* =========================
   PROFILE CARD
========================= */

.profileCard {
  margin-top: 18px;

  padding: 20px;

  background:
    linear-gradient(
      135deg,
      rgba(100, 80, 255, 0.1),
      rgba(0, 200, 255, 0.04)
    );

  border: 1px solid rgba(120, 100, 255, 0.15);

  border-radius: 15px;
}

.profileHeader {
  display: flex;

  justify-content: space-between;
}

.profileHeader div {
  width: 100%;

  display: flex;

  justify-content: space-between;

  align-items: center;
}

.profileHeader span {
  color: rgba(255, 255, 255, 0.4);

  font-size: 9px;

  letter-spacing: 1px;
}

.profileHeader strong {
  color: #9d91ff;

  font-size: 14px;
}

.progressBar {
  height: 5px;

  margin: 13px 0;

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.07);

  overflow: hidden;
}

.progressBar div {
  width: 75%;

  height: 100%;

  border-radius: inherit;

  background: linear-gradient(
    90deg,
    #7658ff,
    #00cfff
  );
}

.profileCard p {
  margin: 0 0 12px;

  color: rgba(255, 255, 255, 0.38);

  font-size: 10px;

  line-height: 1.5;
}

.profileCard a {
  color: #978aff;

  text-decoration: none;

  font-size: 10px;

  font-weight: 600;
}

/* =========================
   TABLET
========================= */

@media (max-width: 1000px) {
  .navLinks {
    gap: 18px;
  }

  .contentGrid {
    grid-template-columns: 1fr;
  }

  .statsGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 700px) {
  .navbar {
    width: 92%;
  }

  .navLinks {
    display: none;
  }

  .dashboardContainer {
    padding-top: 35px;
  }

  .welcomeSection {
    align-items: flex-start;

    flex-direction: column;
  }

  .welcomeSection h1 {
    font-size: 34px;
  }

  .findJobButton {
    width: 100%;
  }

  .statsGrid {
    grid-template-columns: repeat(2, 1fr);

    gap: 10px;
  }

  .statCard {
    min-height: 90px;

    padding: 14px;

    gap: 10px;
  }

  .statIcon {
    width: 35px;
    height: 35px;

    font-size: 12px;
  }

  .statCard strong {
    font-size: 20px;
  }

  .jobCard {
    align-items: flex-start;

    padding: 15px;
  }

  .jobRight {
    display: none;
  }

  .applicationCard {
    padding: 12px;
  }

  .status {
    font-size: 7px;
  }
}

@media (max-width: 400px) {
  .logo {
    font-size: 22px;
  }

  .logoutButton {
    padding: 8px 11px;

    font-size: 9px;
  }

  .welcomeSection h1 {
    font-size: 29px;
  }

  .statsGrid {
    grid-template-columns: 1fr 1fr;
  }

  .statCard {
    flex-direction: column;

    align-items: flex-start;
  }

  .jobInfo h3 {
    font-size: 12px;
  }

  .jobTags span {
    font-size: 7px;
  }
}
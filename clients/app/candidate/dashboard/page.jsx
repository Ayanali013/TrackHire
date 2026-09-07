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
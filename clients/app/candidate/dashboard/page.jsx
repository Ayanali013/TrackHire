"use client";

import Link from "next/link";
import styles from "./dashboard.module.css";

export default function CandidateDashboard() {
  return (
    <div className={styles.dashboard}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>T</span>
          <span>TrackHire</span>
        </div>

        <div className={styles.navLinks}>
          <Link href="/candidate/dashboard" className={styles.active}>
            Dashboard
          </Link>

          <Link href="/candidate/jobs">Jobs</Link>

          <Link href="/candidate/applications">
            My Applications
          </Link>

          <Link href="/candidate/profile">Profile</Link>
        </div>

        <Link href="/candidate/login" className={styles.logout}>
          Logout
        </Link>
      </nav>

      {/* Main Dashboard */}
      <main className={styles.main}>
        {/* Welcome */}
        <section className={styles.welcome}>
          <div>
            <p className={styles.label}>CANDIDATE DASHBOARD</p>

            <h1>
              Welcome back, <span>Candidate</span>
            </h1>

            <p className={styles.description}>
              Manage your job applications and discover new career
              opportunities.
            </p>
          </div>

          <div className={styles.orb}>
            <div className={styles.orbInner}></div>
          </div>
        </section>

        {/* Statistics */}
        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📄</div>

            <div>
              <p>Applications</p>
              <h2>—</h2>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>⭐</div>

            <div>
              <p>Shortlisted</p>
              <h2>—</h2>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>✓</div>

            <div>
              <p>Accepted</p>
              <h2>—</h2>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>⏳</div>

            <div>
              <p>Under Review</p>
              <h2>—</h2>
            </div>
          </div>
        </section>

        {/* Main Cards */}
        <section className={styles.contentGrid}>
          {/* Recommended Jobs */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.label}>OPPORTUNITIES</p>
                <h2>Recommended Jobs</h2>
              </div>

              <Link href="/candidate/jobs">
                View All →
              </Link>
            </div>

            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>💼</div>

              <h3>No jobs to display</h3>

              <p>
                Recommended jobs will appear here.
              </p>
            </div>
          </div>

          {/* Profile Completion */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.label}>YOUR PROFILE</p>
                <h2>Profile Completion</h2>
              </div>

              <span className={styles.percentage}>—</span>
            </div>

            <div className={styles.progressBar}>
              <div className={styles.progress}></div>
            </div>

            <div className={styles.emptyStateSmall}>
              <p>
                Profile completion information will appear here.
              </p>

              <Link href="/candidate/profile">
                Complete Profile →
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Applications */}
        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.label}>APPLICATION TRACKER</p>
              <h2>Recent Applications</h2>
            </div>

            <Link href="/candidate/applications">
              View All →
            </Link>
          </div>

          <div className={styles.applicationArea}>
            <div className={styles.applicationHeader}>
              <span>Job</span>
              <span>Company</span>
              <span>Applied On</span>
              <span>Status</span>
            </div>

            <div className={styles.emptyApplications}>
              <div className={styles.emptyIcon}>📋</div>

              <h3>No applications yet</h3>

              <p>
                Your job applications will appear here.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
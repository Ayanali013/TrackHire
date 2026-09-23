
"use client";

import Link from "next/link";
import styles from "./dashboard.module.css";

export default function RecruiterDashboard() {
  return (
    <main className={styles.dashboard}>
      {/* Background Effects */}
      <div className={styles.backgroundGlowOne}></div>
      <div className={styles.backgroundGlowTwo}></div>

      {/* =========================
          SIDEBAR
      ========================= */}

      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            Track<span>Hire</span>
          </Link>

          {/* Account */}
          <div className={styles.accountType}>
            <div className={styles.accountIcon}>R</div>

            <div>
              <strong>Recruiter</strong>
              <span>Hiring workspace</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className={styles.navigation}>
            <p className={styles.navTitle}>WORKSPACE</p>

            <Link
              href="/recruiter/dashboard"
              className={`${styles.navItem} ${styles.navItemActive}`}
            >
              <span className={styles.navIcon}>⌂</span>
              <span>Dashboard</span>
            </Link>

            <Link
              href="/recruiter/jobs"
              className={styles.navItem}
            >
              <span className={styles.navIcon}>▣</span>
              <span>My Jobs</span>
            </Link>

            <Link
              href="/recruiter/applications"
              className={styles.navItem}
            >
              <span className={styles.navIcon}>◉</span>
              <span>Applications</span>
            </Link>

            <Link
              href="/recruiter/candidates"
              className={styles.navItem}
            >
              <span className={styles.navIcon}>♙</span>
              <span>Candidates</span>
            </Link>

            <p className={styles.navTitle}>MANAGE</p>

            <Link
              href="/recruiter/jobs/create"
              className={styles.navItem}
            >
              <span className={styles.navIcon}>＋</span>
              <span>Post a Job</span>
            </Link>

            <Link
              href="/recruiter/profile"
              className={styles.navItem}
            >
              <span className={styles.navIcon}>◯</span>
              <span>Profile</span>
            </Link>
          </nav>
        </div>

        {/* Sidebar Bottom */}
        <div className={styles.sidebarBottom}>
          <div className={styles.helpBox}>
            <div className={styles.helpIcon}>?</div>

            <div>
              <strong>Need help?</strong>
              <span>Check our hiring guide</span>
            </div>
          </div>

          <button className={styles.logoutButton}>
            <span>↪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <section className={styles.mainContent}>
        {/* Topbar */}
        <header className={styles.topbar}>
          <div className={styles.searchBox}>
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search jobs, candidates..."
            />

            <kbd>⌘ K</kbd>
          </div>

          <div className={styles.topbarRight}>
            <button className={styles.notificationButton}>
              ♢
            </button>

            <div className={styles.divider}></div>

            <Link
              href="/recruiter/profile"
              className={styles.profileMini}
            >
              <div className={styles.profileAvatar}>
                R
              </div>

              <div className={styles.profileInfo}>
                <strong>Recruiter</strong>
                <span>Account</span>
              </div>

              <span className={styles.profileArrow}>
                ⌄
              </span>
            </Link>
          </div>
        </header>

        {/* =========================
            CONTENT
        ========================= */}

        <div className={styles.contentWrapper}>
          {/* Welcome */}
          <section className={styles.welcomeSection}>
            <div>
              <p className={styles.eyebrow}>
                RECRUITER DASHBOARD
              </p>

              <h1>
                Welcome to <span>TrackHire.</span>
              </h1>

              <p>
                Manage your hiring process, jobs and
                candidates from one place.
              </p>
            </div>

            <Link
              href="/recruiter/jobs/create"
              className={styles.postJobButton}
            >
              <span>＋</span>
              Post a New Job
            </Link>
          </section>

          {/* =========================
              STATS
          ========================= */}

          <section className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div
                className={`${styles.statIcon} ${styles.iconPurple}`}
              >
                ▣
              </div>

              <div>
                <p>Active Jobs</p>
                <h2>—</h2>
              </div>

              <span className={styles.statDescription}>
                No job data available
              </span>
            </div>

            <div className={styles.statCard}>
              <div
                className={`${styles.statIcon} ${styles.iconBlue}`}
              >
                ◉
              </div>

              <div>
                <p>Total Applications</p>
                <h2>—</h2>
              </div>

              <span className={styles.statDescription}>
                No application data available
              </span>
            </div>

            <div className={styles.statCard}>
              <div
                className={`${styles.statIcon} ${styles.iconGreen}`}
              >
                ✓
              </div>

              <div>
                <p>Shortlisted</p>
                <h2>—</h2>
              </div>

              <span className={styles.statDescription}>
                No candidate data available
              </span>
            </div>

            <div className={styles.statCard}>
              <div
                className={`${styles.statIcon} ${styles.iconOrange}`}
              >
                ◷
              </div>

              <div>
                <p>Interviews</p>
                <h2>—</h2>
              </div>

              <span className={styles.statDescription}>
                No interview data available
              </span>
            </div>
          </section>

          {/* =========================
              MAIN DASHBOARD GRID
          ========================= */}

          <div className={styles.dashboardGrid}>
            {/* My Jobs */}
            <section className={styles.dashboardCard}>
              <div className={styles.sectionHeader}>
                <div>
                  <p className={styles.sectionEyebrow}>
                    JOB MANAGEMENT
                  </p>

                  <h2>My Jobs</h2>
                </div>

                <Link href="/recruiter/jobs">
                  View all →
                </Link>
              </div>

              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  ▣
                </div>

                <h3>No jobs posted yet</h3>

                <p>
                  Create your first job posting and start
                  finding talented candidates.
                </p>

                <Link
                  href="/recruiter/jobs/create"
                  className={styles.emptyButton}
                >
                  Post Your First Job
                  <span>→</span>
                </Link>
              </div>
            </section>

            {/* Applications */}
            <section className={styles.dashboardCard}>
              <div className={styles.sectionHeader}>
                <div>
                  <p className={styles.sectionEyebrow}>
                    RECENT ACTIVITY
                  </p>

                  <h2>Applications</h2>
                </div>

                <Link href="/recruiter/applications">
                  View all →
                </Link>
              </div>

              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  ◉
                </div>

                <h3>No applications yet</h3>

                <p>
                  Applications from candidates will appear
                  here once your jobs receive applicants.
                </p>

                <Link
                  href="/recruiter/jobs/create"
                  className={styles.textButton}
                >
                  Create a job →
                </Link>
              </div>
            </section>
          </div>

          {/* =========================
              HIRING PIPELINE
          ========================= */}

          <section className={styles.overviewSection}>
            <div className={styles.overviewHeader}>
              <div>
                <p className={styles.sectionEyebrow}>
                  HIRING OVERVIEW
                </p>

                <h2>Application Pipeline</h2>
              </div>

              <span className={styles.emptyLabel}>
                Waiting for data
              </span>
            </div>

            <div className={styles.pipelineEmpty}>
              <div className={styles.pipelineLine}>
                <div className={styles.pipelineStep}>
                  <span>—</span>
                  <strong>Applications</strong>
                </div>

                <div className={styles.pipelineConnector}></div>

                <div className={styles.pipelineStep}>
                  <span>—</span>
                  <strong>Review</strong>
                </div>

                <div className={styles.pipelineConnector}></div>

                <div className={styles.pipelineStep}>
                  <span>—</span>
                  <strong>Shortlisted</strong>
                </div>

                <div className={styles.pipelineConnector}></div>

                <div className={styles.pipelineStep}>
                  <span>—</span>
                  <strong>Interview</strong>
                </div>

                <div className={styles.pipelineConnector}></div>

                <div className={styles.pipelineStep}>
                  <span>—</span>
                  <strong>Hired</strong>
                </div>
              </div>

              <p>
                Your hiring pipeline will appear here once
                candidates start applying.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}


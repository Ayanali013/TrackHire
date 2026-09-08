"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./layout.module.css";

export default function PageLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/candidate/login");
  };

  return (
    <div className={styles.layout}>

      {/* Sidebar */}
      <aside className={styles.sidebar}>

        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoMark}>T</div>
          <span>
            Track<span>Hire</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className={styles.navigation}>

          <p className={styles.navLabel}>
            MENU
          </p>

          <Link
            href="/candidate/dashboard"
            className={
              pathname === "/candidate/dashboard"
                ? `${styles.navItem} ${styles.active}`
                : styles.navItem
            }
          >
            <span>⌂</span>
            Dashboard
          </Link>

          <Link
            href="/candidate/jobs"
            className={
              pathname.startsWith("/candidate/jobs")
                ? `${styles.navItem} ${styles.active}`
                : styles.navItem
            }
          >
            <span>💼</span>
            Jobs
          </Link>

          <Link
            href="/candidate/applications"
            className={
              pathname.startsWith("/candidate/applications")
                ? `${styles.navItem} ${styles.active}`
                : styles.navItem
            }
          >
            <span>📄</span>
            My Applications
          </Link>

          <Link
            href="/candidate/profile"
            className={
              pathname.startsWith("/candidate/profile")
                ? `${styles.navItem} ${styles.active}`
                : styles.navItem
            }
          >
            <span>👤</span>
            Profile
          </Link>

        </nav>

        {/* Bottom */}
        <div className={styles.sidebarBottom}>

          <button
            onClick={handleLogout}
            className={styles.logout}
          >
            <span>↪</span>
            Logout
          </button>

        </div>

      </aside>


      {/* Main Area */}
      <div className={styles.mainArea}>

        {/* Top Bar */}
        <header className={styles.topbar}>

          <div className={styles.pageInfo}>
            <h1>Candidate Portal</h1>
            <p>
              Manage your career and applications
            </p>
          </div>

          <div className={styles.userArea}>

            <div className={styles.notification}>
              🔔
            </div>

            <div className={styles.userInfo}>
              <div className={styles.avatar}>
                C
              </div>

              <div>
                <strong>Candidate</strong>
                <small>Job Seeker</small>
              </div>
            </div>

          </div>

        </header>


        {/* Page Content */}
        <main className={styles.content}>
          {children}
        </main>

      </div>

    </div>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout_rec.module.css";

export default function RecruiterLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      href: "/recruiter/dashboard",
      icon: "⌂",
    },
    {
      name: "Post Job",
      href: "/recruiter/post-job",
      icon: "+",
    },
    {
      name: "My Jobs",
      href: "/recruiter/jobs",
      icon: "▣",
    },
    {
      name: "Applications",
      href: "/recruiter/applications",
      icon: "♧",
    },
    {
      name: "Profile",
      href: "/recruiter/profile",
      icon: "◯",
    },
  ];

  return (
    <div className={styles.layout}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        {/* Logo */}
        <Link href="/recruiter/dashboard" className={styles.logo}>
          <span className={styles.logoIcon}>T</span>
          <span className={styles.logoText}>TrackHire</span>
        </Link>

        {/* Navigation */}
        <nav className={styles.navigation}>
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/recruiter/dashboard" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${
                  active ? styles.active : ""
                }`}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.label}>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className={styles.bottomSection}>
          <Link
            href="/recruiter/settings"
            className={`${styles.navItem} ${
              pathname.startsWith("/recruiter/settings")
                ? styles.active
                : ""
            }`}
          >
            <span className={styles.icon}>⚙</span>
            <span className={styles.label}>Settings</span>
          </Link>

          <button className={styles.logout}>
            <span className={styles.icon}>↪</span>
            <span className={styles.label}>Logout</span>
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
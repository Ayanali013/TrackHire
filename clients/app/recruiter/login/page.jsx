"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./login.module.css";

export default function RecruiterLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
      role: "recruiter",
    });

    // We will connect your Express API here next.
  };

  return (
    <main className={styles.loginPage}>
      {/* Background Effects */}
      <div
        className={`${styles.loginGlow} ${styles.loginGlowOne}`}
      ></div>

      <div
        className={`${styles.loginGlow} ${styles.loginGlowTwo}`}
      ></div>

      <div
        className={`${styles.loginShape} ${styles.loginShapeOne}`}
      ></div>

      <div
        className={`${styles.loginShape} ${styles.loginShapeTwo}`}
      ></div>

      <div
        className={`${styles.loginShape} ${styles.loginShapeThree}`}
      ></div>

      {/* Navbar */}
      <nav className={styles.loginNavbar}>
        <Link href="/" className={styles.loginLogo}>
          Track<span>Hire</span>
        </Link>

        <Link href="/candidate/login" className={styles.switchRole}>
          Candidate Login →
        </Link>
      </nav>

      {/* Main */}
      <section className={styles.loginContainer}>
        {/* Left Visual */}
        <div className={styles.loginVisual}>
          <div className={styles.visualContent}>
            <p className={styles.loginTagline}>
              WELCOME BACK
            </p>

            <h1>
              Find great
              <br />
              <span>talent.</span>
              <br />
              Build your team.
            </h1>

            <p>
              Manage your job postings, discover talented candidates,
              and find the right people for your team.
            </p>
          </div>

          {/* 3D Scene */}
          <div className={styles.loginScene}>
            <div className={styles.loginOrb}></div>

            <div
              className={`${styles.loginRing} ${styles.ringA}`}
            ></div>

            <div
              className={`${styles.loginRing} ${styles.ringB}`}
            ></div>

            <div
              className={`${styles.loginRing} ${styles.ringC}`}
            ></div>

            {/* Mini Card 1 */}
            <div
              className={`${styles.miniCard} ${styles.miniCardOne}`}
            >
              <span>✓</span>

              <div>
                <strong>New Applicant</strong>
                <small>Frontend Developer</small>
              </div>
            </div>

            {/* Mini Card 2 */}
            <div
              className={`${styles.miniCard} ${styles.miniCardTwo}`}
            >
              <span>★</span>

              <div>
                <strong>Job Applications</strong>
                <small>12 new candidates</small>
              </div>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className={styles.loginCard}>
          <div className={styles.loginCardHeader}>
            <div className={styles.recruiterIcon}>
              R
            </div>

            <div>
              <p>Recruiter</p>
              <h2>Welcome back</h2>
            </div>
          </div>

          <p className={styles.loginDescription}>
            Login to manage your jobs and candidates.
          </p>

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className={styles.inputGroup}>
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className={styles.inputGroup}>
              <div className={styles.passwordLabel}>
                <label htmlFor="password">
                  Password
                </label>

                <Link href="/forgot-password">
                  Forgot password?
                </Link>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className={styles.loginSubmit}
            >
              Login
              <span>→</span>
            </button>
          </form>

          {/* Register Link */}
          <div className={styles.registerLink}>
            <span>Dont have an account?</span>

            <Link href="/recruiter/register">
              Create Recruiter Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
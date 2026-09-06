"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./register.module.css";

export default function CandidateRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({
      name,
      email,
      password,
    });

    // We will connect your Express API here next.
  };

  return (
    <main className={styles.registerPage}>
      {/* Background Effects */}
      <div className={styles.registerGlow + " " + styles.registerGlowOne}></div>
      <div className={styles.registerGlow + " " + styles.registerGlowTwo}></div>

      <div className={styles.registerShape + " " + styles.registerShapeOne}></div>
      <div className={styles.registerShape + " " + styles.registerShapeTwo}></div>
      <div className={styles.registerShape + " " + styles.registerShapeThree}></div>

      {/* Navbar */}
      <nav className={styles.registerNavbar}>
        <Link href="/" className={styles.registerLogo}>
          Track<span>Hire</span>
        </Link>

        <Link href="/candidate/login" className={styles.switchRole}>
          Candidate Login →
        </Link>
      </nav>

      {/* Main Content */}
      <section className={styles.registerContainer}>

        {/* Left Visual Section */}
        <div className={styles.registerVisual}>
          <div className={styles.registerVisualContent}>
            <p className={styles.registerTagline}>
              START YOUR JOURNEY
            </p>

            <h1>
              Build your
              <br />
              <span>future.</span>
              <br />
              Find your path.
            </h1>

            <p>
              Create your Candidate account and discover
              opportunities that match your skills and goals.
            </p>
          </div>

          {/* 3D Scene */}
          <div className={styles.registerScene}>
            <div className={styles.registerOrb}></div>

            <div className={styles.registerRing + " " + styles.registerRingA}></div>
            <div className={styles.registerRing + " " + styles.registerRingB}></div>
            <div className={styles.registerRing + " " + styles.registerRingC}></div>

            <div className={styles.registerMiniCard + " " + styles.registerMiniCardOne}>
              <span>✓</span>

              <div>
                <strong>Profile Created</strong>
                <small>Ready to apply</small>
              </div>
            </div>

            <div className={styles.registerMiniCard + " " + styles.registerMiniCardTwo}>
              <span>★</span>

              <div>
                <strong>Career Opportunity</strong>
                <small>Find your next role</small>
              </div>
            </div>
          </div>
        </div>

        {/* Register Card */}
        <div className={styles.registerCard}>

          <div className={styles.registerCardHeader}>
            <div className={styles.candidateIcon}>
              C
            </div>

            <div>
              <p>Candidate</p>
              <h2>Create account</h2>
            </div>
          </div>

          <p className={styles.registerDescription}>
            Create your account and start exploring opportunities.
          </p>

          <form onSubmit={handleRegister}>

            {/* Name */}
            <div className={styles.inputGroup}>
              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className={styles.inputGroup}>
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className={styles.inputGroup}>
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirm Password */}
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className={styles.registerSubmit}
            >
              Create Account
              <span>→</span>
            </button>

          </form>

          {/* Login Link */}
          <div className={styles.loginLink}>
            <span>Already have an account?</span>

            <Link href="/candidate/login">
              Login as Candidate
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
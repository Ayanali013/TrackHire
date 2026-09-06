"use client";

import { useState } from "react";
import Link from "next/link";

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
    <main className="register-page">
      {/* Background Effects */}
      <div className="register-glow register-glow-one"></div>
      <div className="register-glow register-glow-two"></div>

      <div className="register-shape register-shape-one"></div>
      <div className="register-shape register-shape-two"></div>
      <div className="register-shape register-shape-three"></div>

      {/* Navbar */}
      <nav className="register-navbar">
        <Link href="/" className="register-logo">
          Track<span>Hire</span>
        </Link>

        <Link href="/candidate/login" className="switch-role">
          Candidate Login →
        </Link>
      </nav>

      {/* Main Content */}
      <section className="register-container">

        {/* Left Visual Section */}
        <div className="register-visual">
          <div className="register-visual-content">
            <p className="register-tagline">
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
          <div className="register-scene">
            <div className="register-orb"></div>

            <div className="register-ring register-ring-a"></div>
            <div className="register-ring register-ring-b"></div>
            <div className="register-ring register-ring-c"></div>

            <div className="register-mini-card register-mini-card-one">
              <span>✓</span>

              <div>
                <strong>Profile Created</strong>
                <small>Ready to apply</small>
              </div>
            </div>

            <div className="register-mini-card register-mini-card-two">
              <span>★</span>

              <div>
                <strong>Career Opportunity</strong>
                <small>Find your next role</small>
              </div>
            </div>
          </div>
        </div>

        {/* Register Card */}
        <div className="register-card">

          <div className="register-card-header">
            <div className="candidate-icon">
              C
            </div>

            <div>
              <p>Candidate</p>
              <h2>Create account</h2>
            </div>
          </div>

          <p className="register-description">
            Create your account and start exploring opportunities.
          </p>

          <form onSubmit={handleRegister}>

            {/* Name */}
            <div className="input-group">
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
            <div className="input-group">
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
            <div className="input-group">
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
            <div className="input-group">
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
              className="register-submit"
            >
              Create Account
              <span>→</span>
            </button>

          </form>

          {/* Login Link */}
          <div className="login-link">
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
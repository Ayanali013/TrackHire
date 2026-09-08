"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";


export default function CandidateLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const router = useRouter();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Login failed");
      return;
    }

    localStorage.setItem("token", data.token);
   

router.push("/candidate/dashboard");

   
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    <main className="login-page">

      {/* Background */}
      <div className={styles["login-glow"] + " " + styles["login-glow-one"]}></div>
      <div className={styles["login-glow"] + " " + styles["login-glow-two"]}></div>

      {/* Floating 3D Objects */}
      <div className={styles["login-shape"] + " " + styles["shape-one"]}></div>
      <div className={styles["login-shape"] + " " + styles["shape-two"]}></div>
      <div className={styles["login-shape"] + " " + styles["shape-three"]}></div>

      {/* Navbar */}
      <nav className={styles["login-navbar"]}>

        <Link href="/" className={styles["login-logo"]}>
          Track<span>Hire</span>
        </Link>

        <Link href="/recruiter/login" className={styles["switch-role"]}>
          Recruiter Login →
        </Link>

      </nav>

      {/* Main */}
      <section className={styles["login-container"]}>

        {/* Left Visual */}
        <div className={styles["login-visual"]}>

          <div className={styles["visual-content"]}>

            <p className={styles["login-tagline"]}>
              WELCOME BACK
            </p>

            <h1>
              Your next
              <br />
              <span>opportunity</span>
              <br />
              is waiting.
            </h1>

            <p>
              Discover opportunities, manage your applications,
              and take the next step in your career.
            </p>

          </div>

          {/* 3D Object */}
          <div className="login-scene">

            <div className="login-orb"></div>

            <div className="login-ring ring-a"></div>
            <div className="login-ring ring-b"></div>

            <div className="mini-card mini-card-one">
              <span>✓</span>
              <div>
                <strong>Application</strong>
                <small>Shortlisted</small>
              </div>
            </div>

            <div className="mini-card mini-card-two">
              <span>★</span>
              <div>
                <strong>New Opportunity</strong>
                <small>Software Engineer</small>
              </div>
            </div>

          </div>

        </div>

        {/* Login Form */}
        <div className="login-card">

          <div className="login-card-header">

            <div className="candidate-icon">
              C
            </div>

            <div>
              <p>Candidate</p>
              <h2>Welcome back</h2>
            </div>

          </div>

          <p className="login-description">
            Login to continue your job search.
          </p>

          <form onSubmit={handleLogin}>

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

              <div className="password-label">
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

            {/* Login */}
            <button
              type="submit"
              className="login-submit"
            >
              Login
              <span>→</span>
            </button>

          </form>

          {/* Register */}
          <div className="register-link">

<span>Don&apos;t have an account?</span>

            <Link href="/candidate/register">
              Create Candidate Account
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
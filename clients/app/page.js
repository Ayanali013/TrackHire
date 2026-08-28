"use client";



export default function Home() {
  return (
    <main className="app">
      {/* Background */}
      <div className="background-orb orb-one"></div>
      <div className="background-orb orb-two"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Track<span>Hire</span>
        </div>

        <div className="nav-links">
          <a href="/candidate/login">Home</a>
          <a href="#about">About</a>
          <a href="#jobs">Jobs</a>
        </div>

        <div className="nav-actions">
          <a href="/candidate/login" className="candidate-btn">
            Candidate
          </a>

          <a href="/recruiter/login" className="recruiter-btn">
            Recruiter
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">THE SMART WAY TO CONNECT</p>

          <h1>
            Find your next
            <br />
            <span>opportunity.</span>
          </h1>

          <p className="description">
            TrackHire connects talented candidates with companies
            looking for their next great hire.
          </p>

          <div className="hero-buttons">
            <a
              href="/candidate/register"
              className="primary-btn"
            >
              Find a Job
            </a>

            <a
              href="/recruiter/register"
              className="secondary-btn"
            >
              Hire Talent
            </a>
          </div>
        </div>

        {/* 3D Scene */}
        <div className="hero-visual">
          <div className="scene">

            {/* Main 3D Orb */}
            <div className="main-orb">
              <div className="orb-shine"></div>
            </div>

            {/* Rings */}
            <div className="ring ring-one"></div>
            <div className="ring ring-two"></div>

            {/* Application Card */}
            <div className="floating-card card-one">
              <div className="card-icon">✓</div>

              <div>
                <strong>Application</strong>
                <small>Shortlisted</small>
              </div>
            </div>

            {/* Candidate Card */}
            <div className="floating-card card-two">
              <div className="avatar">AS</div>

              <div>
                <strong>New Candidate</strong>
                <small>Software Engineer</small>
              </div>
            </div>

            {/* Floating particles */}
            <div className="particle particle-one"></div>
            <div className="particle particle-two"></div>
            <div className="particle particle-three"></div>

          </div>
        </div>
      </section>
    </main>
  );
}

// OneClickDeploy.jsx
import React from "react";
import "../../styles/Features.css";

const OneClickDeploy = () => {
  return (
    <div className="feature-page-container">
      <header className="feature-hero deploy">
        <h1>One-Click Website Deployment</h1>
        <p>
          Deploy your school website seamlessly to the web — no coding, no
          manual steps, just a single click.
        </p>
      </header>

      <section className="feature-section">
        <h2>Lightning-Fast Hosting with Vercel</h2>
        <p>
          Your school site is deployed on Vercel's high-performance CDN,
          ensuring global accessibility, blazing-fast speeds, and industry-grade
          security.
        </p>
        <ul className="ai-benefits-list">
          <li>⚡ Instant live preview</li>
          <li>🔒 HTTPS-enabled out of the box</li>
          <li>🌍 Global CDN for fast access anywhere</li>
          <li>📈 Scalable infrastructure</li>
        </ul>
      </section>

      <section className="feature-section">
        <h2>Deploy in Three Simple Steps</h2>
        <div className="step-list">
          <div className="step">
            <span>1️⃣</span>
            <p>Finish customizing your website with our AI builder.</p>
          </div>
          <div className="step">
            <span>2️⃣</span>
            <p>
              Click on the <strong>Deploy Now</strong> button.
            </p>
          </div>
          <div className="step">
            <span>3️⃣</span>
            <p>
              Your website is live — share it with parents, staff, and the
              world!
            </p>
          </div>
        </div>
      </section>

      <section className="feature-highlight">
        <h2>Manage, Update & Grow</h2>
        <p>
          After deployment, you can manage content updates through our
          dashboard. From event announcements to staff updates — it's simple and
          quick.
        </p>
        <button className="primary-btn">Deploy Your Website</button>
      </section>
    </div>
  );
};

export default OneClickDeploy;

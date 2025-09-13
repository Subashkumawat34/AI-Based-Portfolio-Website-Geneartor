// OneClickDeploy.jsx
import "../../styles/Features.css";

const OneClickDeploy = () => {
  return (
    <div className="feature-page-container">

      <header className="feature-hero deploy">
        <h1>One-Click Portfolio Deployment</h1>
        <p>
          Launch your AI-generated portfolio online instantly with our automated
          deployment pipeline — GitHub + Vercel integration built-in.
        </p>
      </header>

      <section className="feature-section">
        <h2>Seamless Hosting Experience</h2>
        <p>
          Forget about manual coding, servers, or FTP uploads. Your portfolio is
          automatically hosted on Vercel’s global CDN with GitHub version
          control.
        </p>
        <ul className="ai-benefits-list">
          <li>⚡ Instant live preview before publishing</li>
          <li>🔒 HTTPS and SSL security by default</li>
          <li>🌍 Global CDN ensures blazing-fast performance</li>
          <li>📈 Scales automatically to handle recruiter traffic</li>
          <li>💾 GitHub backup for safe storage & collaboration</li>
          <li>📊 Built-in analytics to track visitors</li>
        </ul>
      </section>

      <section className="feature-section">
        <h2>Deploy in Three Steps</h2>
        <div className="step-list">
          <div className="step">
            <span>1️⃣</span>
            <p>Finalize your portfolio with AI-enhanced content.</p>
          </div>
          <div className="step">
            <span>2️⃣</span>
            <p>
              Click <strong>Deploy Now</strong> — our system pushes your code to
              GitHub and connects to Vercel.
            </p>
          </div>
          <div className="step">
            <span>3️⃣</span>
            <p>
              Get a live link instantly — share it with recruiters, clients, or
              peers.
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>Manage & Update Easily</h2>
        <p>
          Updating your portfolio is simple: re-upload your resume or add new
          inputs, and redeploy with one click. Stay current without technical
          hassle.
        </p>
        <ul className="ai-benefits-list">
          <li>📝 Edit content anytime with AI suggestions</li>
          <li>🚀 Re-deploy updated versions instantly</li>
          <li>👩‍💻 Maintain multiple portfolio versions</li>
          <li>📂 Auto-save to GitHub for safe versioning</li>
        </ul>
      </section>

      <section className="feature-highlight">
        <h2>Go Live in Seconds</h2>
        <p>
          From resume to live professional portfolio in just a few minutes —
          that’s the power of AI + automation.
        </p>
        <button className="primary-btn">Deploy My Portfolio</button>
      </section>
    </div>
  );
};

export default OneClickDeploy;

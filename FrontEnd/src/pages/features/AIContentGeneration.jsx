// AIContentGeneration.jsx
import "../../styles/Features.css";

const AIContentGeneration = () => {
  return (
    <div className="feature-page-container">
      <header className="feature-hero">
        <h1>AI-Powered Content Generation</h1>
        <p>
          Revolutionize your school website creation process with smart, fast,
          and flexible AI-generated content.
        </p>
      </header>

      <section className="feature-section">
        <h2>Why Use AI for School Websites?</h2>
        <p>
          Building a school website involves gathering a large amount of
          structured content. With AI Content Generation, you can automate the
          creation of various sections like About Us, Academics, Facilities,
          Admissions, Events, and more — all tailored to your school’s identity.
        </p>
        <ul className="ai-benefits-list">
          <li>✨ Personalized school descriptions</li>
          <li>📚 Auto-fill standard academic curriculum & policies</li>
          <li>🎯 SEO-optimized and user-friendly language</li>
          <li>🕒 Saves time and ensures consistency</li>
        </ul>
      </section>

      <section className="feature-section">
        <h2>How It Works</h2>
        <div className="step-list">
          <div className="step">
            <span>1️⃣</span>
            <p>Choose a template and fill out the basic school info form.</p>
          </div>
          <div className="step">
            <span>2️⃣</span>
            <p>
              Our AI processes your inputs to generate full-length content for
              multiple sections.
            </p>
          </div>
          <div className="step">
            <span>3️⃣</span>
            <p>Preview and edit content easily before deploying your site.</p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>Sections You Can Auto-Generate</h2>
        <div className="section-grid">
          <div className="section-card">About Us</div>
          <div className="section-card">Principal’s Message</div>
          <div className="section-card">Academic Programs</div>
          <div className="section-card">Facilities Overview</div>
          <div className="section-card">Admission Details</div>
          <div className="section-card">Events & News</div>
        </div>
      </section>

      <section className="feature-highlight">
        <h2>Smart. Fast. Flexible.</h2>
        <p>
          With AI Content Generation, even non-technical users can build a
          professional, informative school website in minutes.
        </p>
        <button className="primary-btn">Start Generating Content</button>
      </section>
    </div>
  );
};

export default AIContentGeneration;

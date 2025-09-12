// AIContentGeneration.jsx
import "../../styles/Features.css";

const AIContentGeneration = () => {
  return (
    <div className="feature-page-container">
      {/* HERO */}
      <header className="feature-hero">
        <h1>AI-Powered Content Generation</h1>
        <p>
          Transform resumes into professional portfolio websites with the power
          of NLP and Generative AI — no coding, no design skills required.
        </p>
      </header>

      {/* WHY AI */}
      <section className="feature-section">
        <h2>Why Use AI for Portfolios?</h2>
        <p>
          Building a professional portfolio is essential in today’s competitive
          job market, but creating one manually is time-consuming and requires
          technical expertise. Our AI engine simplifies this by automatically
          extracting and refining your resume data into polished website
          sections.
        </p>
        <ul className="ai-benefits-list">
          <li>
            ✨ Smart extraction of personal details, skills, and experiences
          </li>
          <li>📝 AI-enhanced summaries of achievements and projects</li>
          <li>🎯 SEO-optimized descriptions to improve online visibility</li>
          <li>📂 Auto-structured portfolio content by categories</li>
          <li>🌐 Multi-template compatibility with modern designs</li>
          <li>🕒 Save hours compared to manual editing</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="feature-section">
        <h2>How It Works</h2>
        <div className="step-list">
          <div className="step">
            <span>1️⃣</span>
            <p>Upload your resume (PDF or DOCX) or enter details manually.</p>
          </div>
          <div className="step">
            <span>2️⃣</span>
            <p>
              Our AI engine parses the data using NLP and generates clean,
              professional text for each portfolio section.
            </p>
          </div>
          <div className="step">
            <span>3️⃣</span>
            <p>
              Content is automatically organized into categories like About,
              Skills, Experience, and Projects.
            </p>
          </div>
          <div className="step">
            <span>4️⃣</span>
            <p>
              Preview and fine-tune your portfolio content before deployment.
            </p>
          </div>
        </div>
      </section>

      {/* AUTO-GENERATED SECTIONS */}
      <section className="feature-section">
        <h2>Sections You Can Auto-Generate</h2>
        <div className="section-grid">
          <div className="section-card">About Me</div>
          <div className="section-card">Education</div>
          <div className="section-card">Work Experience</div>
          <div className="section-card">Projects & Case Studies</div>
          <div className="section-card">Skills & Tools</div>
          <div className="section-card">Certifications</div>
          <div className="section-card">Achievements</div>
          <div className="section-card">Contact & Social Links</div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="feature-highlight">
        <h2>Professional Portfolios in Minutes</h2>
        <p>
          With AI Content Generation, anyone — from students to professionals —
          can build a modern, recruiter-ready portfolio that stands out.
        </p>
        <button className="primary-btn">Generate My Portfolio</button>
      </section>
    </div>
  );
};

export default AIContentGeneration;

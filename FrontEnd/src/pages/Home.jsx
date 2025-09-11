import "../styles/Home.css";
import { Button } from "react-bootstrap";
import SchoolImage from "../assets/school-image.jpg";
import { useNavigate } from "react-router-dom";
import Section1 from "../assets/section1.png";

function Home({ isAuthenticated, userName }) {
  const navigate = useNavigate();

  const handleHowItWorksClick = () => {
    navigate("/how-it-works");
  };

  const handlePrimaryActionClick = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };

  return (
    <>
      <div className="page-container">
        <div className="hero-section">
          <div className="content-wrapper">
            {/* LEFT */}
            <div className="left-col">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span aria-hidden="true">›</span>
                <span>Create Portfolios</span>
              </nav>

              <h1>
                Free Portfolio
                <br />
                Website Builder
              </h1>

              <p className="subheading">
                Build and deploy a professional portfolio in minutes —
                templates, drag-and-drop editor and one-click deployment.
              </p>

              <div className="button-group">
                <Button
                  className="cta-btn"
                  onClick={handlePrimaryActionClick}
                  aria-label="Create portfolio"
                >
                  {isAuthenticated
                    ? "Go to Dashboard"
                    : "Create a portfolio website"}
                </Button>

                <Button
                  variant="link"
                  className="link-btn"
                  onClick={handleHowItWorksClick}
                  aria-label="See how it works"
                >
                  See How it Works
                </Button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="right-col" aria-hidden="true">
              <div className="image-card">
                <img
                  src={SchoolImage}
                  alt="Portfolio preview on a laptop"
                  className="responsive-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="features-row" aria-hidden="true">
          <div className="feature">
            <div className="icon">🧩</div>
            <p>Easy drag-and-drop editor</p>
          </div>
          <div className="feature">
            <div className="icon">🖼️</div>
            <p>3M+ free stock photos and graphics</p>
          </div>
          <div className="feature">
            <div className="icon">✨</div>
            <p>Generate content and media with AI</p>
          </div>
          <div className="feature">
            <div className="icon">🔗</div>
            <p>Download or share designs easily</p>
          </div>
        </div>
      </div>

      {/* NEW SECTION LIKE THE IMAGE */}
      <div className="extra-section">
        <div className="extra-content">
          <h2>Smart online portfolio website maker</h2>
          <p>
            Create a portfolio website that’s as unique and creative as you are.
            Impress potential clients and employers from the get-go with a
            stunning portfolio design made using ProFolio.AI free online
            portfolio website builder. Easily create professional-looking
            portfolios that showcase your skills, qualifications, and best work
            sans the hassle of complicated online website builders or learning
            advanced graphic design features that takes time.
          </p>
        </div>
        {/* Image Section */}
        <div className="extra-image">
          <img
            src={Section1}
            alt="Example portfolio template"
            className="extra-responsive-img"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="extra-content">
          <p>
            Powered by our smart drag-and-drop editing tools and features, you
            can create a creative portfolio website in minutes. ProFolio.AI
            website builder lets you get down to business right away. Start
            inspired with professionally designed and fully editable portfolio
            website templates, create a new one on your own, or create a website
            mockup to visualize your design. Showcase your past projects, work
            experiences, and best skills through beautiful graphs, timelines,
            and images. Get any free stock video footage or stock photos into
            your chosen portfolio layout with a simple drag and drop. Import
            your own fonts or use our free font library and present text into
            eye-catching headers and font combinations. Then, publish on the web
            easily with a free Canva domain or purchase a custom one for you.
          </p>
          <Button className="cta-btn">Start Building</Button>
        </div>
      </div>

      <div className="three-divs-section">
        <div className="three-div">
          <h2>Showcase your best work in one site</h2>
          <p>
            A good portfolio website design is made out of well-chosen pieces
            that tell the story of what you are good at. Whether you are a
            writer, artist, graphic designer, model, software developer, or
            business owner, make sure that you select the best projects you’ve
            worked on or the pieces you are most proud of.
          </p>
          <p>
            Start inspired with the hundreds of free portfolio website templates
            on Canva.You can choose between simple mobile-ready, one-page
            website templates to artful,showcases of your work. Edit each
            template page to emphasize the type of work you do best and the kind
            of client you want to work with.
          </p>
        </div>
        <div className="three-div">
          <h2>Get your digital portfolio in minutes</h2>
          <p>
            With our online portfolio builder, you can publish and share your
            new portfolio website online in a few clicks. Create a one-page
            portfolio website and publish on the web with your own Canva site
            domain for free. Or, with Canva Pro, use a domain name search tool
            and purchase your own custom domain.
          </p>
          <p>
            Be found on Google and other search engines with our SEO-friendly
            website templates. All one-page site templates are
            mobile-responsive, so your portfolio looks as beautiful on mobile
            web, tablet, or other devices, as it is on desktop.
          </p>
        </div>
        <div className="three-div">
          <h2>Spotlight your printed portfolio</h2>
          <p>
            When it makes more sense to design and create a physical copy of
            your portfolio than publish on the web, Canva Print is ready for
            you. Choose a photo book template or other printable portfolio
            templates and customize them according to your unique brand theme. A
            creative portfolio printed on high-quality paper helps create a more
            lasting impression during face-to-face networking events, business
            meetings, and interviews—allowing you to show off the details of
            your artwork and your best self. Get noticed and land that job with
            Canva’s free custom portfolio maker today.
          </p>
        </div>
      </div>

      <div className="foot-button">
        <Button
          className="cta-btn"
          onClick={handlePrimaryActionClick}
          aria-label="Create portfolio"
        >
          {isAuthenticated ? "Go to Dashboard" : "Create a portfolio website"}
        </Button>

        <Button
          variant="link"
          className="link-btn"
          onClick={handleHowItWorksClick}
          aria-label="See how it works"
        >
          See How it Works
        </Button>
      </div>
    </>
  );
}

export default Home;

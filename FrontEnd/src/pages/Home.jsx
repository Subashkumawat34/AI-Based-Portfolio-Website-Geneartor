import "../styles/Home.css";
import { Button } from "react-bootstrap";
import SchoolImage from "../assets/school-image.jpg";
import { useNavigate } from "react-router-dom";

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
    <div className="page-container">
      <div className="hero-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>
              Effortlessly build and manage your school website with
              EduForge—smart, customizable, and instantly deployed.
            </h1>
            <div className="button-parent">
              <Button variant="primary" onClick={handlePrimaryActionClick}>
                {isAuthenticated ? "Go to Dashboard" : "Sign Up Free"}
              </Button>
              <Button
                variant="link"
                className="works-text"
                onClick={handleHowItWorksClick}
                aria-label="Learn how EduForge works"
              >
                See How EduForge Works
              </Button>
            </div>
          </div>
          <div className="image-container">
            <img
              src={SchoolImage}
              alt="Students learning in a modern classroom environment"
              className="responsive-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* {isAuthenticated && (
        <div className="content-section">
          <TodoApp userName={userName} />
        </div>
      )} */}
      {!isAuthenticated && (
        <div className="content-section">
          <h2>Welcome to EduForge!</h2>
          <p className="content-paragraph">
            The vision of the AI-Based School Website Generator is to
            revolutionize how educational institutions establish their online
            presence by providing an intelligent, accessible, and fully
            automated platform for website creation. By combining AI
            capabilities with customizable templates and seamless cloud
            deployment, the app aims to empower schools—regardless of technical
            expertise—to build professional, informative, and visually appealing
            websites in minutes. It envisions becoming the go-to digital
            solution for schools to communicate their identity, showcase
            achievements, manage updates, and engage with students, parents, and
            the wider community through a dynamic and scalable web
            infrastructure
          </p>
        </div>
      )}
      {!isAuthenticated && <div className="content-section"></div>}
    </div>
  );
}

export default Home;

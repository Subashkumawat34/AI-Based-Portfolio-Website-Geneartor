import Step1 from "../assets/Login.jpg";
import Step2 from "../assets/SelectTemplate.avif";
import Step3 from "../assets/Customised.jpg";
import Step4 from "../assets/BuiltAndDeploy.png";
import Step5 from "../assets/DirectHosting.jpeg";
import "../styles/HowItWorks.css"
const steps = [
  {
    id: "step1", 
    title: "Step 1: Secure Login",
    description:
      "Users start by signing up or logging into the platform using secure authentication methods. Role-based access ensures only authorized users can create and manage school websites.",
    image: Step1,
  },
  {
    id: "step2",
    title: "Step 2: Select a Website Template",
    description:
      "Choose from a collection of professionally designed, mobile-friendly templates tailored for schools and educational institutions.",
    image: Step2,
  },
  {
    id: "step3",
    title: "Step 3: Customize Your Content",
    description:
      "Fill in your school's information like name, description, faculty, gallery, and contact details using a simple form-based UI. You can rearrange sections, update images, and personalize every detail.",
    image: Step3,
  },
  {
    id: "step4",
    title: "Step 4: Generate and Deploy",
    description:
      "Once customization is complete, the platform automatically generates your website and deploys it to Vercel. You'll receive a live link to share and view your website instantly.",
    image: Step4,
  },
  {
    id: "step5",
    title: "Future: Direct AWS Cloud Hosting",
    description:
      "In future releases, websites will be hosted directly on AWS for improved scalability, performance, and custom domain integration.",
    image: Step5,
  },
];

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h1 className="how-it-works-main-title">How It Works</h1>

      <div className="steps-list">
        {steps.map((step, index) => (
          <div
            key={step.id || index}
            className={`step-item ${
              index % 2 !== 0 ? "step-item-reversed" : ""
            }`}
          >
            <div className="step-image-wrapper">
              <img src={step.image} alt={step.title} className="step-image" />
            </div>
            <div className="step-content-wrapper">
              <h2 className="step-title">{step.title}</h2>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

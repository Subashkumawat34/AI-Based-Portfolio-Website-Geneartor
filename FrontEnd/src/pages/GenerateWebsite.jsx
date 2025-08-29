import { useState } from "react";
import axios from "axios";
import "../styles/GenerateWebsite.css";
import Template1 from "../assets/Template1.png";
import Template2 from "../assets/Template2.png";
import Template3 from "../assets/Template3.png";
import Template4 from "../assets/Template4.png";
import Template5 from "../assets/Template5.png";
import Template6 from "../assets/Template6.png";

// --- Data (Keep your existing data structures) ---
const templates = [
  {
    id: 1,
    name: "Kindergarten Template",
    type: "free",
    previewImage: Template1,
    tagline: "Perfect for Play Schools",
  },
  {
    id: 2,
    name: "Modern School",
    type: "paid",
    previewImage: Template2,
    tagline: "Responsive Design with CMS",
  },
  {
    id: 3,
    name: "Classic Academy",
    type: "free",
    previewImage: Template3,
    tagline: "Simple & Professional Layout",
  },
  {
    id: 4,
    name: "Elite High School",
    type: "paid",
    previewImage: Template4,
    tagline: "Includes Admissions Portal",
  },
  {
    id: 5,
    name: "Primary School Fun",
    type: "free",
    previewImage: Template5,
    tagline: "Vibrant & Colorful Design",
  },
  {
    id: 6,
    name: "Technical Institute",
    type: "paid",
    previewImage: Template6,
    tagline: "Advanced UI & Features",
  },
  // Add other templates if you have them
];

const initialSchoolFormFields = {
  basicInfo: {
    schoolName: "",
    motto: "",
    establishedYear: "",
    principalName: "",
    address: "",
    contactEmail: "",
    phoneNumber: "",
  },
  aboutUs: { history: "", mission: "", vision: "" },
  academics: {
    curriculum: "",
    gradingSystem: "",
    subjects: [],
    academicCalendar: "",
  },
  admissions: { process: "", eligibility: "", feeStructure: "" },
  facilities: { library: "", labs: "", sports: "" },
  // Simplified for brevity, you can add all your fields back
};

// Helper to format section keys into readable titles
const formatSectionTitle = (key) => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

const GenerateWebsite = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState(initialSchoolFormFields);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handles changes for regular input fields
  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  // Handles changes for fields that should be arrays (e.g., subjects)
  const handleArrayInputChange = (e, section, field) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean), // filter(Boolean) removes empty strings
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Submitting Data:", {
      templateId: selectedTemplate.id,
      formData,
    });

    try {
      // Uncomment this for actual API call
      // const response = await axios.post("/api/school-websites", {
      //     templateId: selectedTemplate.id,
      //     formData,
      // });

      // Mock API call for demonstration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // if (response.data.success) {
      //   setSubmitSuccess(true);
      // }

      setSubmitSuccess(true); // Assuming success for demo
    } catch (error) {
      console.error("Error saving school website:", error);
      alert("There was an error submitting your website. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetState = () => {
    setSelectedTemplate(null);
    setSubmitSuccess(false);
    setFormData(initialSchoolFormFields);
  };

  const renderFormField = (sectionKey, fieldKey, fieldValue) => {
    const label = formatSectionTitle(fieldKey);

    if (Array.isArray(fieldValue)) {
      return (
        <div className="form-group" key={fieldKey}>
          <label htmlFor={`${sectionKey}-${fieldKey}`}>{label}</label>
          <input
            type="text"
            id={`${sectionKey}-${fieldKey}`}
            name={fieldKey}
            value={formData[sectionKey][fieldKey].join(", ")}
            onChange={(e) => handleArrayInputChange(e, sectionKey, fieldKey)}
            placeholder="Enter values, separated by commas"
          />
          <small>
            Separate items with a comma (e.g., Math, Science, History).
          </small>
        </div>
      );
    }

    const isTextArea = [
      "history",
      "mission",
      "vision",
      "process",
      "eligibility",
    ].includes(fieldKey);

    return (
      <div className="form-group" key={fieldKey}>
        <label htmlFor={`${sectionKey}-${fieldKey}`}>{label}</label>
        {isTextArea ? (
          <textarea
            id={`${sectionKey}-${fieldKey}`}
            name={fieldKey}
            value={fieldValue}
            onChange={(e) => handleInputChange(e, sectionKey)}
            rows="4"
          />
        ) : (
          <input
            type="text"
            id={`${sectionKey}-${fieldKey}`}
            name={fieldKey}
            value={fieldValue}
            onChange={(e) => handleInputChange(e, sectionKey)}
          />
        )}
      </div>
    );
  };

  return (
    <div className="generate-website-container">
      {!selectedTemplate ? (
        <>
          <h1 className="main-title">Select a Website Template</h1>
          <p className="main-subtitle">
            Choose a design to start building your school's new website.
          </p>
          <div className="template-grid">
            {templates.map((template) => (
              <div
                key={template.id}
                className="template-card"
                onClick={() => setSelectedTemplate(template)}
              >
                <div className="template-image-wrapper">
                  <img
                    src={template.previewImage}
                    alt={template.name}
                    className="template-image"
                  />
                  <div className="template-overlay">
                    <button className="btn-select-template">
                      Select Template
                    </button>
                  </div>
                  <span className={`template-badge ${template.type}`}>
                    {template.type.toUpperCase()}
                  </span>
                </div>
                <div className="template-info">
                  <h3>{template.name}</h3>
                  <p>{template.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : submitSuccess ? (
        <div className="success-message-container">
          <div className="success-icon">✓</div>
          <h2>Website Created Successfully!</h2>
          <p>
            Your school website based on the{" "}
            <strong>{selectedTemplate.name}</strong> template has been
            generated.
          </p>
          <button className="btn btn-primary" onClick={resetState}>
            Create Another Website
          </button>
        </div>
      ) : (
        <div className="website-form-container">
          <form onSubmit={handleSubmit} className="website-form">
            <div className="form-header">
              <h1 className="main-title">Configure Your Website</h1>
              <p className="main-subtitle">
                You are using the <strong>{selectedTemplate.name}</strong>{" "}
                template. Fill out the details below.
              </p>
            </div>

            {Object.entries(formData).map(([sectionKey, sectionFields]) => (
              <fieldset className="form-section" key={sectionKey}>
                <legend>{formatSectionTitle(sectionKey)}</legend>
                {Object.entries(sectionFields).map(([fieldKey, fieldValue]) =>
                  renderFormField(sectionKey, fieldKey, fieldValue)
                )}
              </fieldset>
            ))}

            <div className="form-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedTemplate(null)}
              >
                Back to Templates
              </button>
              <button
                type="submit"
                className={`btn ${
                  selectedTemplate.type === "free"
                    ? "btn-primary"
                    : "btn-premium"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Generating..." : "Generate Website"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default GenerateWebsite;

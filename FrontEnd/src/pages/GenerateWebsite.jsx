import { useState } from "react";
import axios from "axios";
import "../styles/GenerateWebsite.css";
import Template1 from "../assets/Template1.png";
import Template2 from "../assets/Template2.png";
import Template3 from "../assets/Template3.png";
import Template4 from "../assets/Template4.png";
import Template5 from "../assets/Template5.png";
import Template6 from "../assets/Template6.png";

// --- Templates Data ---
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
];

// --- Initial Form Data ---
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
};

// --- Helper Function ---
const formatSectionTitle = (key) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

const GenerateWebsite = () => {
  const [step, setStep] = useState(1); // 1: Upload, 2: Template, 3: Form, 4: Success
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState(initialSchoolFormFields);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // --- Step 1: Upload Resume ---
  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleResumeUpload = async () => {
    if (!resumeFile) {
      alert("Please select a resume file first!");
      return;
    }
    setIsUploading(true);
    try {
      // Real API example:
      // const formData = new FormData();
      // formData.append("resume", resumeFile);
      // await axios.post("/api/upload-resume", formData);
      await new Promise((res) => setTimeout(res, 1500)); // Simulate delay
      setStep(2); // Move to template selection
    } catch (error) {
      console.error("Error uploading resume:", error);
      alert("There was an issue uploading your resume. Try again.");
    } finally {
      setIsUploading(false);
    }
  };

  // --- Step 3: Form Handling ---
  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [name]: value },
    }));
  };

  const handleArrayInputChange = (e, section, field) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
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
      // const response = await axios.post("/api/school-websites", { templateId: selectedTemplate.id, formData });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setStep(4);
    } catch (error) {
      console.error("Error saving school website:", error);
      alert("There was an error submitting your website.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetState = () => {
    setStep(1);
    setSelectedTemplate(null);
    setSubmitSuccess(false);
    setFormData(initialSchoolFormFields);
    setResumeFile(null);
  };

  const renderFormField = (sectionKey, fieldKey, fieldValue) => {
    const label = formatSectionTitle(fieldKey);
    if (Array.isArray(fieldValue)) {
      return (
        <div className="form-group" key={fieldKey}>
          <label>{label}</label>
          <input
            type="text"
            value={formData[sectionKey][fieldKey].join(", ")}
            onChange={(e) => handleArrayInputChange(e, sectionKey, fieldKey)}
            placeholder="Enter values, separated by commas"
          />
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
        <label>{label}</label>
        {isTextArea ? (
          <textarea
            name={fieldKey}
            value={fieldValue}
            onChange={(e) => handleInputChange(e, sectionKey)}
            rows="4"
          />
        ) : (
          <input
            type="text"
            name={fieldKey}
            value={fieldValue}
            onChange={(e) => handleInputChange(e, sectionKey)}
          />
        )}
      </div>
    );
  };

  // --- Render by Step ---
  return (
    <div className="generate-website-container">
      {/* Step 1: Upload Resume */}
      {step === 1 && (
        <div className="upload-resume-container">
          <h1 className="main-title">Upload Your Resume</h1>
          <p className="main-subtitle">
            Upload your resume (PDF/DOCX) to auto-fill school information.
          </p>
          <div className="upload-box">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
            {resumeFile && (
              <p className="file-name">Selected: {resumeFile.name}</p>
            )}
          </div>
          <button
            className="btn btn-primary"
            onClick={handleResumeUpload}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload & Continue"}
          </button>
        </div>
      )}

      {/* Step 2: Template Selection */}
      {step === 2 && !selectedTemplate && (
        <>
          <h1 className="main-title">Select a Website Template</h1>
          <p className="main-subtitle">
            Choose a design to start building your school's website.
          </p>
          <div className="template-grid">
            {templates.map((template) => (
              <div
                key={template.id}
                className="template-card"
                onClick={() => {
                  setSelectedTemplate(template);
                  setStep(3);
                }}
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
      )}

      {/* Step 3: Website Configuration Form */}
      {step === 3 && selectedTemplate && !submitSuccess && (
        <div className="website-form-container">
          <form onSubmit={handleSubmit} className="website-form">
            <div className="form-header">
              <h1 className="main-title">Configure Your Website</h1>
              <p className="main-subtitle">
                You are using the <strong>{selectedTemplate.name}</strong>{" "}
                template.
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
                onClick={() => {
                  setSelectedTemplate(null);
                  setStep(2);
                }}
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

      {/* Step 4: Success Message */}
      {step === 4 && submitSuccess && (
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
      )}
    </div>
  );
};

export default GenerateWebsite;

import { Link } from "react-router-dom";
import SampleSiteImage from "../assets/DemoSitePreview.jpeg";
import CreateIcon from "../assets/CreateIcon.png";
import EditIcon from "../assets/EditIcon.png";
import DeleteIcon from "../assets/DeleteIcon.png";
import DeployIcon from "../assets/DeployIcon.png";
import ViewIcon from "../assets/ViewIcon.jpeg";
import "../styles/MyDashboard.css";


const MyDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Guest" };
  const userName = user.name;

  const sites = [
    {
      id: 1,
      name: "Six Man Secondary School",
      createdAt: "2025-06-01",
      status: "Deployed",
      link: "https://abc-school.vercel.app",
    },
    {
      id: 2,
      name: "Subhash Verified Academy",
      createdAt: "2025-06-04",
      status: "Draft",
      link: "",
    },
    {
      id: 3,
      name: "Global Secondary School",
      createdAt: "2025-06-01",
      status: "Deployed",
      link: "https://abc-school.vercel.app",
    },
    {
      id: 4,
      name: "Sasural Verified Academy",
      createdAt: "2025-06-04",
      status: "Draft",
      link: "",
    },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Welcome, {userName}</h2>

      <div className="create-btn-container">
        <Link to="/create-site" className="create-btn">
          <img src={CreateIcon} alt="Create" className="icon-sm" />
          Create New Site
        </Link>
      </div>

      <div className="site-grid">
        {sites.map((site) => (
          <div key={site.id} className="site-card">
            <img src={SampleSiteImage} alt={site.name} className="site-image" />

            <div className="site-details">
              <div>
                <h3 className="site-title">{site.name}</h3>
                <p className="site-meta">Created on: {site.createdAt}</p>
                <p className="site-meta">
                  Status: <span className="site-status">{site.status}</span>
                </p>
              </div>

              <div className="action-buttons">
                {site.status === "Deployed" && (
                  <a
                    href={site.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-view"
                  >
                    <img src={ViewIcon} alt="View" className="icon-sm" />
                    View
                  </a>
                )}
                <Link to={`/edit-site/${site.id}`} className="btn btn-edit">
                  <img src={EditIcon} alt="Edit" className="icon-sm" />
                  Edit
                </Link>
                {site.status === "Draft" && (
                  <button className="btn btn-deploy">
                    <img src={DeployIcon} alt="Deploy" className="icon-sm" />
                    Deploy
                  </button>
                )}
                <button className="btn btn-delete">
                  <img src={DeleteIcon} alt="Delete" className="icon-sm" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="features-card">
        <h4 className="features-heading">Upcoming Features:</h4>
        <ul className="features-list">
          <li>Real-time analytics for each site</li>
          <li>Custom domain management</li>
          <li>Downloadable backups and restore options</li>
          <li>Email and contact form integrations</li>
        </ul>
      </div>
    </div>
  );
};

export default MyDashboard;

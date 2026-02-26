import { Link } from "react-router-dom";
import "./AdminPanel.css";

export function AdminPanel(): React.JSX.Element {
  return (
    <div className="admin-panel-page">
      <div className="admin-panel-container">
        <div className="admin-panel-content">
          {/* Header */}
          <div className="admin-panel-header">
            <h1 className="admin-panel-title">Admin Panel</h1>
            <p className="admin-panel-subtitle">
              Welcome to the admin panel. Manage your portfolio content.
            </p>
          </div>

          {/* Actions Grid */}
          <div className="admin-panel-grid">
            <Link to="/add-project" className="admin-panel-card">
              <span className="admin-panel-card-icon">📁</span>
              <h2 className="admin-panel-card-title">Add New Project</h2>
              <p className="admin-panel-card-description">
                Create and publish a new project to your portfolio
              </p>
            </Link>

            <Link to="/add-recommendation" className="admin-panel-card">
              <span className="admin-panel-card-icon">📝</span>
              <h2 className="admin-panel-card-title">Add New Recommendation</h2>
              <p className="admin-panel-card-description">
                Upload a recommendation from a colleague or client
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

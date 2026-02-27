import { Irecommend } from '../../Types/Interfaces';
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Config";
import "./Recommendations.css";

export function Recommendations(): React.JSX.Element {
  const [recommendations, setRecommendations] = useState<Irecommend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/recommendations`)
      .then((response) => {
        setRecommendations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recommendations:", error);
        setError("Failed to load recommendations");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="recommendations-loading">
        <div className="recommendations-loading-content">
          <div className="loading-spinner"></div>
          <p className="recommendations-loading-text">Loading recommendations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="recommendations-error">
        <div className="error-container">
          <div className="recommendations-error-icon">⚠️</div>
          <h2 className="recommendations-error-title">Oops!</h2>
          <p className="recommendations-error-text">{error}</p>
          <button onClick={() => window.location.reload()} className="btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="recommendations-page">
      <div className="section-container">
        {/* Header */}
        <div className="recommendations-header">
          <h1 className="recommendations-title">
            <span className="gradient-text">Recommendations</span>
          </h1>
          <p className="recommendations-subtitle">
            What colleagues and clients say about working with me.
          </p>
        </div>

        {/* Recommendations Grid */}
        {recommendations.length === 0 ? (
          <div className="recommendations-empty">
            <div className="recommendations-empty-icon">📝</div>
            <h3 className="recommendations-empty-title">No Recommendations Yet</h3>
            <p className="recommendations-empty-text">
              Check back later for recommendations from colleagues and clients.
            </p>
          </div>
        ) : (
          <div className="recommendations-grid" style={{ animationDelay: '200ms' }}>
            {recommendations.map((rec) => (
              <div key={rec.id} className="recommendation-card">
                {/* Content */}
                <div className="recommendation-card-content">
                  {/* Name */}
                  <h3 className="recommendation-name">{rec.name}</h3>

                  {/* Role */}
                  <p className="recommendation-role">
                    <span className="recommendation-label">Role: </span>
                    <span className="recommendation-role-text">{rec.role}</span>
                  </p>

                  {/* Company */}
                  <p className="recommendation-company">
                    <span className="recommendation-label">Company: </span>
                    <span className="recommendation-company-text">{rec.company}</span>
                  </p>

                  {/* Date */}
                  <p className="recommendation-date">
                    {rec.recommendation_date && new Date(rec.recommendation_date as string).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>

                {/* Action Button */}
                <a
                  href={`${BASE_URL}/${rec.recommendation_file_path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="recommendation-button"
                >
                  <FileIcon />
                  View Document
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Recommendation Count */}
        {recommendations.length > 0 && (
          <div className="recommendations-count">
            {recommendations.length} {recommendations.length === 1 ? 'recommendation' : 'recommendations'}
          </div>
        )}
      </div>
    </div>
  );
}

// File Icon Component
const FileIcon = () => (
  <svg className="recommendation-file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

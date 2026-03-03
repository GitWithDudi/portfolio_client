import { useEffect, useState } from "react";
import axios from "axios";
import { Irecommend } from "../../Types/Interfaces";
import { BASE_URL } from "../../Config";
import "./DeleteRecommendation.css";

export function DeleteRecommendation(): React.JSX.Element {
  const [recommendations, setRecommendations] = useState<Irecommend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [confirmId, setConfirmId] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/recommendations`)
      .then((response) => {
        setRecommendations(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load recommendations");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    setDeletingId(id);
    try {
      await axios.delete(`${BASE_URL}/recommendation/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setRecommendations((prev) => prev.filter((r) => r.id !== id));
      setConfirmId(null);
    } catch {
      setError("Failed to delete recommendation");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="delete-reco-page">
        <div className="delete-reco-loading">
          <div className="loading-spinner"></div>
          <p className="delete-reco-loading-text">Loading recommendations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="delete-reco-page">
        <div className="delete-reco-error">
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="delete-reco-page">
      <div className="delete-reco-container">
        <div className="delete-reco-content">
          <div className="delete-reco-header">
            <h1 className="delete-reco-title">Delete Recommendation</h1>
            <p className="delete-reco-subtitle">
              Select a recommendation to remove it from your portfolio.
            </p>
          </div>

          {recommendations.length === 0 ? (
            <div className="delete-reco-empty">
              <p>No recommendations found.</p>
            </div>
          ) : (
            <ul className="delete-reco-list">
              {recommendations.map((rec) => (
                <li key={rec.id} className="delete-reco-item">
                  <div className="delete-reco-item-info">
                    <span className="delete-reco-item-name">{rec.name}</span>
                    <span className="delete-reco-item-meta">
                      {rec.role} · {rec.company}
                    </span>
                  </div>

                  {confirmId === rec.id ? (
                    <div className="delete-reco-confirm">
                      <span className="delete-reco-confirm-text">Are you sure?</span>
                      <button
                        className="delete-reco-confirm-yes"
                        onClick={() => handleDelete(rec.id!)}
                        disabled={deletingId === rec.id}
                      >
                        {deletingId === rec.id ? "Deleting..." : "Yes, Delete"}
                      </button>
                      <button
                        className="delete-reco-confirm-no"
                        onClick={() => setConfirmId(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      className="delete-reco-btn"
                      onClick={() => setConfirmId(rec.id!)}
                    >
                      Delete
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

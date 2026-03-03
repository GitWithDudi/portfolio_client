import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Config";
import "./AddRecommendation.css";

export function AddRecommendation(): React.JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    recommendation_date: "",
    file: null as File | null,
  });

  const [fileName, setFileName] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "file" && files) {
      setFormData((prev) => ({ ...prev, file: files[0] }));
      setFileName(files[0].name);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("role", formData.role);
    data.append("company", formData.company);
    data.append("recommendation_date", formData.recommendation_date);
    if (formData.file) {
      data.append("file", formData.file);
    }

    try {
      await axios.post(`${BASE_URL}/recommendations`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Recommendation uploaded successfully!");

      setFormData({
        name: "",
        role: "",
        company: "",
        recommendation_date: "",
        file: null,
      });
      setFileName("");
      navigate("/recommendations");
    } catch (error: any) {
      alert("Error: " + (error.response?.data?.error || "Upload failed"));
      console.error(error);
    }
  };

  return (
    <div className="add-recommendation-page">
      <div className="add-recommendation-container">
        <div className="add-recommendation-content">
          {/* Header */}
          <div className="add-recommendation-header">
            <h1 className="add-recommendation-title">Add Recommendation</h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="add-recommendation-form">
            <div className="add-recommendation-field">
              <label className="add-recommendation-label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Recommender's name"
                value={formData.name}
                onChange={handleChange}
                className="add-recommendation-input"
                required
              />
            </div>

            <div className="add-recommendation-field">
              <label className="add-recommendation-label">Role</label>
              <input
                type="text"
                name="role"
                placeholder="Their role/position"
                value={formData.role}
                onChange={handleChange}
                className="add-recommendation-input"
                required
              />
            </div>

            <div className="add-recommendation-field">
              <label className="add-recommendation-label">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
                className="add-recommendation-input"
                required
              />
            </div>

            <div className="add-recommendation-field">
              <label className="add-recommendation-label">Date</label>
              <input
                type="date"
                name="recommendation_date"
                value={formData.recommendation_date}
                onChange={handleChange}
                className="add-recommendation-input"
              />
            </div>

            <div className="add-recommendation-upload">
              <label className="add-recommendation-label">Recommendation PDF</label>
              <input
                type="file"
                name="file"
                accept="application/pdf"
                onChange={handleChange}
                className="add-recommendation-upload-input"
                required
              />
              {fileName && (
                <p className="add-recommendation-file-info">Selected: {fileName}</p>
              )}
            </div>

            <button type="submit" className="add-recommendation-submit">
              Submit Recommendation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

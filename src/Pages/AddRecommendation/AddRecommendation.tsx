import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Config";


export function AddRecommendation() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    recommendation_date: "",
    file: null as File | null,
  });

  const [fileName, setFileName] = useState<string>(""); // ⬅️ לצורך הצגת שם הקובץ
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "file" && files) {
      setFormData((prev) => ({ ...prev, file: files[0] }));
      setFileName(files[0].name); // ⬅️ שמירת שם הקובץ
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
      await axios.post(`${BASE_URL}/recommendations`, data);
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
    <div>
      <h2>Add Recommendation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="recommendation_date"
          value={formData.recommendation_date}
          onChange={handleChange}
        />
        <input
          type="file"
          name="file"
          accept="application/pdf"
          onChange={handleChange}
          required
        />

        {/* מציג את שם הקובץ שנבחר */}
        {fileName && <p>Selected file: {fileName}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

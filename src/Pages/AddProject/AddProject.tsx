import { Iproject, Itechnology } from "../../Types/Interfaces";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Config";
import "./AddProject.css";


export function AddProject(): React.JSX.Element {
  const [project, setProject] = useState<Iproject>({
    project_name: "",
    purpose: "",
    technologies: [],
    tech_ids: [],
    description: "",
    image_filename: "",
    github_link: "",
    docker_link: "",
    link: "",
  });

  const [techList, setTechList] = useState<Itechnology[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTechnologies = async () => {
      const res = await axios.get(`${BASE_URL}/technologies`);
      setTechList(res.data);
    };
    fetchTechnologies();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleTechToggle = (techName: string) => {
    const currentTechnologies = project.technologies || [];
    const isSelected = currentTechnologies.includes(techName);

    const updatedTechnologies = isSelected
      ? currentTechnologies.filter((t) => t !== techName)
      : [...currentTechnologies, techName];

    const updatedTechIds = techList
      .filter((t) => updatedTechnologies.includes(t.name))
      .map((t) => t.id)
      .filter((id): id is number => id !== undefined);

    setProject({
      ...project,
      technologies: updatedTechnologies,
      tech_ids: updatedTechIds,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${BASE_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProject((prev) => ({ ...prev, image_filename: res.data.url }));
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(`${BASE_URL}/projects`, project, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      navigate("/projects");
    } catch (err) {
      console.error("Error adding project:", err);
    }
  };

  return (
    <div className="add-project-page">
      <div className="add-project-container">
        <div className="add-project-content">
          {/* Header */}
          <div className="add-project-header">
            <h1 className="add-project-title">Add Project</h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="add-project-form">
            <div className="add-project-field">
              <label className="add-project-label">Project Name</label>
              <input
                type="text"
                name="project_name"
                placeholder="Enter project name"
                value={project.project_name}
                onChange={handleChange}
                className="add-project-input"
                required
              />
            </div>

            <div className="add-project-field">
              <label className="add-project-label">Purpose</label>
              <input
                type="text"
                name="purpose"
                placeholder="What is the purpose of this project?"
                value={project.purpose}
                onChange={handleChange}
                className="add-project-input"
                required
              />
            </div>

            <div className="add-project-field">
              <label className="add-project-label">Description</label>
              <textarea
                name="description"
                placeholder="Describe your project..."
                value={project.description}
                onChange={handleChange}
                className="add-project-textarea"
                required
              />
            </div>

            {/* Technologies */}
            <div className="add-project-tech-section">
              <label className="add-project-label">Technologies</label>
              <div className="add-project-tech-grid">
                {techList.map((tech) => (
                  <label
                    key={tech.id}
                    className={`add-project-tech-label ${
                      project.technologies?.includes(tech.name)
                        ? "add-project-tech-label-selected"
                        : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="add-project-tech-checkbox"
                      checked={project.technologies?.includes(tech.name) ?? false}
                      onChange={() => handleTechToggle(tech.name)}
                    />
                    {tech.name}
                  </label>
                ))}
              </div>
            </div>

            {/* Image Upload */}
            <div className="add-project-upload">
              <label className="add-project-label">Project Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="add-project-upload-input"
              />
              <button
                type="button"
                onClick={handleFileUpload}
                className="add-project-upload-button"
              >
                Upload Image
              </button>
              {project.image_filename && (
                <div className="add-project-upload-preview">
                  <p className="add-project-upload-preview-label">Uploaded Image:</p>
                  <img
                    src={project.image_filename}
                    alt="Project"
                    className="add-project-upload-preview-image"
                  />
                </div>
              )}
            </div>

            <div className="add-project-field">
              <label className="add-project-label">GitHub Link</label>
              <input
                type="text"
                name="github_link"
                placeholder="https://github.com/..."
                value={project.github_link || ""}
                onChange={handleChange}
                className="add-project-input"
              />
            </div>

            <div className="add-project-field">
              <label className="add-project-label">Docker Link</label>
              <input
                type="text"
                name="docker_link"
                placeholder="https://hub.docker.com/..."
                value={project.docker_link || ""}
                onChange={handleChange}
                className="add-project-input"
              />
            </div>

            <div className="add-project-field">
              <label className="add-project-label">Live Project Link</label>
              <input
                type="text"
                name="link"
                placeholder="https://..."
                value={project.link || ""}
                onChange={handleChange}
                className="add-project-input"
              />
            </div>

            <button type="submit" className="add-project-submit">
              Add Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

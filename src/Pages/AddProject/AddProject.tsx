import { Iproject, Itechnology } from "../../Types/Interfaces";
import { useState, JSX, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function AddProject(): JSX.Element {
    const [project, setProject] = useState<Iproject>({
        name: "",
        purpose: "",
        technologies: [],
        description: "",
        image: "",
        link_git: "",
        link_docker: "",
        link: ""
    });

    const [techList, setTechList] = useState<Itechnology[]>([]);

    useEffect(() => {
        const fetchTechnologies = async () => {

            const res = await axios.get("/technologies");
            setTechList(res.data);
        };

        fetchTechnologies();
    }, []);




    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProject((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post("/projects", project)
            .then((response) => {
                console.log("Project added successfully:", response.data);
                navigate("/projects");

            })
            .catch((error) => {
                console.error("There was an error adding the project:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Project</h1>
            <input type="text" name="name" placeholder="Project Name" value={project.name} onChange={handleChange} required />
            <input type="text" name="purpose" placeholder="Purpose" value={project.purpose} onChange={handleChange} required />
            <label>Technologies:</label>
            <div>
                {techList.map((tech) => (
                    <label key={tech.id}>
                        <input
                            type="checkbox"
                            value={tech.name}
                            checked={project.technologies.includes(tech.name)}
                            onChange={() => {
                                const isSelected = project.technologies.includes(tech.name);
                                const updated = isSelected
                                    ? project.technologies.filter((t) => t !== tech.name)
                                    : [...project.technologies, tech.name];

                                setProject({ ...project, technologies: updated });
                            }}
                        />
                        {tech.name}
                    </label>
                ))}
            </div>

            <textarea name="description" placeholder="Description" value={project.description} onChange={handleChange} required></textarea>
            <input type="text" name="link_git" placeholder="GitHub Link" value={project.link_git || ""} onChange={handleChange} />
            <input type="text" name="lnk_docker" placeholder="Docker Link" value={project.link_docker || ""} onChange={handleChange} />
            <input type="text" name="image" placeholder="Image URL" value={project.image} onChange={handleChange} />
            <input type="text" name="link" placeholder="Project Link" value={project.link || ""} onChange={handleChange} />
            <button type="submit">Add Project</button>
        </form>
    );
}
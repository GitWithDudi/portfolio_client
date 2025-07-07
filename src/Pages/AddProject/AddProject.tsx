// import { Iproject, Itechnology } from "../../Types/Interfaces";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// export function AddProject(): React.JSX.Element {
//     const [project, setProject] = useState<Iproject>({
//         project_name: "",
//         purpose: "",
//         technologies: [],
//         tech_ids: [],
//         description: "",
//         image_filename: "",
//         github_link: "",
//         docker_link: "",
//         link: ""
//     });

//     const [techList, setTechList] = useState<Itechnology[]>([]);

//     useEffect(() => {
//         const fetchTechnologies = async () => {

//             const res = await axios.get("http://localhost:5000/technologies");
//             setTechList(res.data);
//         };

//         fetchTechnologies();
//     }, []);




//     const navigate = useNavigate();

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setProject((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         axios.post("http://localhost:5000/projects", project)
//             .then((response) => {
//                 console.log("Project added successfully:", response.data);
//                 navigate("http://localhost:5000/projects");

//             })
//             .catch((error) => {
//                 console.error("There was an error adding the project:", error);
//             });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h1>Add Project</h1>
//             <input type="text" name="project_name" placeholder="Project Name" value={project.project_name} onChange={handleChange} required />
//             <input type="text" name="purpose" placeholder="Purpose" value={project.purpose} onChange={handleChange} required />
//             <label>Technologies:</label>
//             <div>
//                 {techList.map((tech) => (
//                     <label key={tech.id}>
//                         <input
//                             type="checkbox"
//                             value={tech.name}
//                             checked={project.technologies?.includes(tech.name) ?? false}
//                             onChange={() => {
//                                 const isSelected = project.technologies?.includes(tech.name);
//                                 const updated = isSelected
//                                     ? project.technologies?.filter((t) => t !== tech.name)
//                                     : [...project.technologies?, tech.name];

//                                 setProject({ ...project, technologies: updated });
//                             }}
//                         />
//                         {tech.name}
//                     </label>
//                 ))}
//             </div>

//             <textarea name="description" placeholder="Description" value={project.description} onChange={handleChange} required></textarea>
//             <input type="text" name="github_link" placeholder="GitHub Link" value={project.github_link || ""} onChange={handleChange} />
//             <input type="text" name="docker_link" placeholder="Docker Link" value={project.docker_link || ""} onChange={handleChange} />
//             <input type="text" name="image_filename" placeholder="Image URL" value={project.image_filename} onChange={handleChange} />
//             <input type="text" name="link" placeholder="Project Link" value={project.link || ""} onChange={handleChange} />
//             <button type="submit">Add Project</button>
//         </form>
//     );
// }

import { Iproject, Itechnology } from "../../Types/Interfaces";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        link: ""
    });

    const [techList, setTechList] = useState<Itechnology[]>([]);

    useEffect(() => {
        const fetchTechnologies = async () => {
            const res = await axios.get("http://localhost:5000/technologies");
            setTechList(res.data);
        };
        fetchTechnologies();
    }, []);

    const navigate = useNavigate();

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
            tech_ids: updatedTechIds
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const payload: Iproject = {
            ...project,
            // שלח רק את מה שצריך לפי צד השרת
            technologies: undefined // אופציונלי – אם צד השרת לא צריך את זה
        };

        axios.post("http://localhost:5000/projects", payload)
            .then((response) => {
                console.log("Project added successfully:", response.data);
                navigate("/projects");  // נתיב נכון בתוך האפליקציה
            })
            .catch((error) => {
                console.error("There was an error adding the project:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Project</h1>

            <input
                type="text"
                name="project_name"
                placeholder="Project Name"
                value={project.project_name}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="purpose"
                placeholder="Purpose"
                value={project.purpose}
                onChange={handleChange}
                required
            />

            <label>Technologies:</label>
            <div>
                {techList.map((tech) => (
                    <label key={tech.id}>
                        <input
                            type="checkbox"
                            checked={project.technologies?.includes(tech.name) ?? false}
                            onChange={() => handleTechToggle(tech.name)}
                        />
                        {tech.name}
                    </label>
                ))}
            </div>
            <input
                type="text"
                name="image_filename"
                placeholder="Image URL"
                value={project.image_filename}
                onChange={handleChange}
            />

            

            <input
                type="text"
                name="github_link"
                placeholder="GitHub Link"
                value={project.github_link || ""}
                onChange={handleChange}
            />
            <input
                type="text"
                name="docker_link"
                placeholder="Docker Link"
                value={project.docker_link || ""}
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Description"
                value={project.description}
                onChange={handleChange}
                required
            ></textarea>
           
            <input
                type="text"
                name="link"
                placeholder="Project Link"
                value={project.link || ""}
                onChange={handleChange}
            />

            <button type="submit">Add Project</button>
        </form>
    );
}

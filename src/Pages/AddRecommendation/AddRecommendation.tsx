import { useState } from "react";
import { Irecommend } from "../../Types/Interfaces";

export function RecommendationForm() {
    const [recommendations, setRecommendations] = useState<Irecommend[]>([]);
    const [formData, setFormData] = useState<Irecommend>({
        name: "",
        role: "",
        company: "",
        date: "",
        recommendation: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setRecommendations([...recommendations, formData]);

        setFormData({
            name: "",
            role: "",
            company: "",
            date: "",
            recommendation: "",
        });

        
    };

    

    return (
        <div>
            <h2>Add Recommendation</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
                <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                <textarea name="recommendation" placeholder="Recommendation" value={formData.recommendation} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export function getRecommendations(recommendations: Irecommend[]) {
    return recommendations;
}

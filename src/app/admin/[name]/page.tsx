'use client';

import { useState } from "react";

// interface AdminProps {
//     params: {
//         name: string;
//     };
// }

const Admin = () => {
    const [form, setForm] = useState({
        title: "",
        description: [""], // Array of strings for description
        github: "",
        deploy: "",
        image: "",
        category: "software", // Default value for the dropdown
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleDescriptionChange = (index: number, value: string) => {
        if (value.split(" ").length > 7) {
            alert("Each description item can only contain a maximum of 5 words.");
            return;
        }

        setForm((prev) => {
            const updatedDescription = [...prev.description];
            updatedDescription[index] = value;
            return { ...prev, description: updatedDescription };
        });
    };

    const addDescriptionItem = () => {
        if (form.description.length >= 5) {
            alert("You can only add up to 5 description items.");
            return;
        }

        setForm((prev) => ({
            ...prev,
            description: [...prev.description, ""]
        }));
    };

    const removeDescriptionItem = (index: number) => {
        setForm((prev) => {
            const updatedDescription = prev.description.filter((_, i) => i !== index);
            return { ...prev, description: updatedDescription };
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");
        console.log(form);
        try {
            const response = await fetch("/api/project", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setSuccessMessage("Project submitted successfully!");
                setForm({
                    title: "",
                    description: [""],
                    github: "",
                    deploy: "",
                    image: "",
                    category: "software",
                });
            } else {
                const errorData = await response.json();
                console.error("Error submitting project:", errorData);
                setSuccessMessage("Failed to submit project.");
            }
        } catch (error) {
            console.error("Error submitting project:", error);
            setSuccessMessage("An error occurred while submitting the project.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-10 bg-dev min-h-screen flex items-center justify-center px-5 font-sans text-amber-50">
            <div className="bg-dev shadow-lg rounded-lg p-8 w-full max-w-lg border">
                <h1 className="text-2xl font-bold mb-6 text-center font-sans">Submit a Project</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-base font-medium">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={form.title}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm sm:text-sm"
                            placeholder="Enter project title"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">
                            Description
                        </label>
                        {form.description.map((desc, index) => (
                            <div key={index} className="flex items-center space-x-2 mt-2 border p-2 rounded-md">
                                <input
                                    type="text"
                                    value={desc}
                                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                    className="block w-full  border-gray-300 shadow-sm sm:text-sm focus:outline-none"
                                    placeholder={`Description item ${index + 1}`}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => removeDescriptionItem(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        {form.description.length < 5 && (
                            <button
                                type="button"
                                onClick={addDescriptionItem}
                                className="mt-2 text-indigo-600 hover:text-indigo-800"
                            >
                                + Add Description Item
                            </button>
                        )}
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium">
                            Category
                        </label>
                        <select
                            id="category"
                            value={form.category}
                            onChange={handleChange}
                            className="bg-dev mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm sm:text-sm"
                        >
                            <option value="software">Software</option>
                            <option value="hardware">Hardware</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="github" className="block text-sm font-medium">
                            GitHub URL
                        </label>
                        <input
                            type="url"
                            id="github"
                            value={form.github}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm sm:text-sm"
                            placeholder="Enter GitHub repository URL"
                            
                        />
                    </div>
                    <div>
                        <label htmlFor="deploy" className="block text-sm font-medium">
                            Deployment URL
                        </label>
                        <input
                            type="url"
                            id="deploy"
                            value={form.deploy}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md p-2 border border-gray-300 shadow-sm sm:text-sm"
                            placeholder="Enter deployment URL"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                            loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
                {successMessage && (
                    <p className="mt-4 text-center text-sm font-medium text-green-600">{successMessage}</p>
                )}
            </div>
        </div>
    );
};

export default Admin;

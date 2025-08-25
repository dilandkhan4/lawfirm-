'use client';

import React, { useEffect, useState } from 'react';

function Todo({ todoActive, setTodoActive, id }) {
    console.log("id ", id)
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token')

    const [formData, setFormData] = useState({
        message: '',
        dueDate: '',
        priority: 'low',
        assignedTo: 1
    });
    const [lawyers, setLawyers] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (!token) {
            console.error("No token found, redirecting to login");
            window.location.href = '/login';
            return;
        }
        // fetch all lawyers
        let res = fetch("/api/lawyers", {
            headers: {
                'Authenticate': `Bearer ${token}`,
            }
        })
        res = res.then((res) => res.json())
        res.then((data) => {
            console.log("Lawyers: ", data);
            if (data.error) {
                console.error("Failed to fetch lawyers: ", data.error);
                return;
            }
            setLawyers(data);
        }).catch((err) => {
            console.error("Failed to fetch lawyers: ", err);
        })
    }, [token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            console.log("formdata: ", formData)
            let response = await fetch(`/api/lawyer/cases/caseUpdate/${id}`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(formData)
            })

            response = await response.json()

            setTimeout(() => {
                if (!response.error) {
                    console.log("todo done okay: ", response);
                    setLoading(false);
                    setTodoActive(false);
                } else {
                    console.error("Failed to create todo: ", response.error);
                    setLoading(false);
                    return;
                }
            }, 1000);

        } catch (err) {
            console.error('Failed to update case:', err);
        } finally {
            setLoading(false);
            // setTodoActive(false);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">

            {loading && <div className="">Loading...</div>}


            <form
                onSubmit={handleSubmit}
                className="max-w-md w-96 px-6 py-6 bg-white rounded shadow h-fit"
            >
                <div className="mb-4 flex flex-col">
                    <label htmlFor="message">Todo message</label>
                    <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="h-8 px-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="dueDate">Due date</label>
                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        className="h-8 px-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="priority">Priority</label>
                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="assignedTo">Assigned to</label>
                    <select
                        name="assignedTo"
                        value={formData.assignedTo}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        {
                            lawyers.map((lawyer) => (
                                <option key={lawyer.id} value={lawyer.id}>
                                    {lawyer.user.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="flex gap-4 items-center justify-center">
                    <button
                        type="button"
                        className="bg-red-600 rounded text-white px-4 py-2"
                        onClick={() => setTodoActive(!todoActive)}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="bg-green-600 rounded text-white px-4 py-2"
                    >
                        Add To-Do
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Todo;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditKiezForm = () => {
    const [formDetails, setFormDetails] = useState({
        kiezName: '',
        description: '',
        image: ''
    });

    const navigate = useNavigate();
    const { kiezId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5005/api/kiez/${kiezId}`)
            .then(response => {
                setFormDetails(response.data);
            })
            .catch(error => {
                console.error("Error while fetching kiez information.", error);
            });
    }, [kiezId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({ ...formDetails, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:5005/api/kiez/${kiezId}`, formDetails);

            if (response.status === 200) {
                alert('Kiez updated successfully');
                navigate('/kiezs'); // Adjust the path as needed
            } else {
                alert('Failed to update kiez');
            }
        } catch (error) {
            console.error('Error updating kiez:', error);
        }
    };

    return (
        <div className="edit-kiez-container">
            <h1>Edit Kiez</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="kiezName">Kiez Name</label>
                    <input
                        type="text"
                        id="kiezName"
                        name="kiezName"
                        value={formDetails.kiezName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formDetails.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formDetails.image}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Kiez</button>
            </form>
        </div>
    );
};

export default EditKiezForm;

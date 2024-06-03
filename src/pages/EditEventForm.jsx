import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditEventForm = () => {
    const [formDetails, setFormDetails] = useState({
        name: '',
        date: '',
        address: '',
        description: '',
        image: '',
        category: '',
        kiezId: ''
    });

    const navigate = useNavigate();
    const { eventId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5005/api/events/${eventId}`)
            .then(response => {
                setFormDetails(response.data);
            })
            .catch(error => {
                console.error("Error while fetching event information.", error);
            });
    }, [eventId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({ ...formDetails, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:5005/api/events/${eventId}`, formDetails);

            if (response.status === 200) {
                alert('Event updated successfully');
                navigate('/'); 
            } else {
                alert('Failed to update event');
            }
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };

    return (
        <div className="edit-event-container">
            <h1>Edit Event</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Event Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formDetails.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formDetails.date.split('T')[0]} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formDetails.address}
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
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={formDetails.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="Music">Music</option>
                        <option value="Art">Art</option>
                        <option value="Local markets">Local markets</option>
                        <option value="Sport">Sport</option>
                        <option value="Food&drinks">Food & Drinks</option>
                        <option value="Events for kids">Events for Kids</option>
                        <option value="Tours">Tours</option>
                        <option value="Social gatherings">Social Gatherings</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button type="submit">Update Event</button>
            </form>
        </div>
    );
};

export default EditEventForm;
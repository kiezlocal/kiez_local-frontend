// src/pages/EventDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.css';

const EventDetail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:5005/api/events/${eventId}`);
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-detail-container">
      <img src={event.image} alt={event.name} className="event-image" />
      <div className="event-details">
        <h1 className="event-name">{event.name}</h1>
        <p className="event-category">{event.category}</p>
        <p className="event-datetime">{new Date(event.date).toLocaleString()}</p>
        <p className="event-location">{event.address}</p>
        <p className="event-description">{event.description}</p>
      </div>
    </div>
  );
};

export default EventDetail;

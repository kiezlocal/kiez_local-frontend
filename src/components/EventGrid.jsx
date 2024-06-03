import {useEffect, useState} from 'react';
import axios from 'axios';
import "../App.css";
import { useNavigate } from 'react-router-dom';



const EventGrid = ({ events, onDelete }) => {
    console.log(typeof onDelete);
    const navigate = useNavigate(); 

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('de-DE', options);
    };

   
    return(
        <div>
            {events.map(event => (
                <div key={event._id} className='card'>
                    {event.image && event.image !== '' && <img src={event.image} alt={event.name} className='event-list-photo' />}
                   <h2>{event.name}</h2>
                   <p>{formatDate(event.date)}</p>
                   <p>{event.startTime}</p>
                   <p>{event.address}</p>
                   <p>{event.kiez}</p>
                    {/* <p>how to get kiez?</p> */}
                    <div>
                    <button onClick={() => navigate(`/events/${event._id}/edit`)}>Edit</button>
                    <button onClick={() => onDelete(event._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EventGrid;
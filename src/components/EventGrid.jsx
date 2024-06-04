import {useEffect, useState} from 'react';
import axios from 'axios';
import "../App.css";
import { useNavigate } from 'react-router-dom';



const EventGrid = ({ events, onDelete, loggedIn }) => {
    const navigate = useNavigate(); 
   
    return(
        <div>
            {events.map(event => (
                <div key={event._id} className='card'>
                    {event.image && event.image !== '' && <img src={event.image} alt={event.name} className='event-list-photo' />}
                   <h2>{event.name}</h2>
                   <p>{event.date}</p>
                   <p>{event.address}</p>
                   <p>{event.kiez.kiezName}</p>
                    <div>
                    <button onClick={() => navigate(`/events/${event._id}/edit`)}>Edit</button>
                    {loggedIn && <button onClick={() => onDelete(event._id)}>Delete</button>}                    </div>
                </div>
            ))}
        </div>
    )
}

export default EventGrid;
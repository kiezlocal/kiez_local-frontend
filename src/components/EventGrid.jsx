import {useEffect, useState} from 'react';
import axios from 'axios';
import "../App.css";



const EventGrid = ({events}) => {
   
    return(
        <div>
            {events.map(event => (
                <div key={event._id} className='card'>
                    {event.image && event.image !== '' && <img src={event.image} alt={event.name} className='event-list-photo' />}
                   <h2>{event.name}</h2>
                   <p>{event.date}</p>
                   <p>{event.address}</p>
                   <p>{event.kiez}</p>
                    {/* <p>how to get kiez?</p> */}
                </div>
            ))}
        </div>
    )
}

export default EventGrid;
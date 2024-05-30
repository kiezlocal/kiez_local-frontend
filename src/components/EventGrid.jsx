import {useEffect, useState} from 'react';
import axios from 'axios';
import "../App.css";



const EventGrid = () => {
    const [eventPhoto, setEvent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5005/api/events')
        .then(response => {
            console.log(response.data); 
            setEvent(response.data);
        })
        .catch(error => {
            console.error("Error while fetching events information.", error);
        });
    }, []);



    return(
        <div>
            {eventPhoto.map(event => (
                <div key={event._id}>
                   <img src={event.image} alt={event.name} className='event-list-photo'/>
                   <h2>{event.name}</h2>
                   <p>{event.date}</p>
                   <p>{event.address}</p>
                   <p>{event.kiezId}</p>
                    {/* <p>how to get kiez?</p> */}
                </div>
            ))}
        </div>
    )
}

export default EventGrid;
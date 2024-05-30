import {useEffect, useState} from 'react';
import axios from 'axios';


const EventGrid = () => {
    const [eventPhoto, setPhoto] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5005/api/events')
        .rhen(response => {
            setPhoto(response.data);
        })
        .catch(error => {
            console.error("Error while fetching events information.", error);
        });
    }, []);



    return(
        <div>
            {eventPhoto.map(photo => (
                <div key={photo.id}>
                   <img src={photo.url} alt={name} />
                    {/* <p>informacje o evencie</p> */}
                </div>
            ))}
        </div>
    )
}

export default EventGrid;
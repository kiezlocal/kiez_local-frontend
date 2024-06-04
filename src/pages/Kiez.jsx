import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import "../App.css";



const KiezGrid = () => {
    const [kiezPhoto, setKiez] = useState([]);


useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/kiez`)
    .then(response => {
        console.log(response.data); 
        setKiez(response.data);
    })
    .catch(error => {
        console.error("Error while fetching kiez information.", error);
    });
}, []);

return(
    <div>
    {kiezPhoto.map(kiez => (
        <div key={kiez._id} className='card'>
            <img src={kiez.image} alt={kiez.kiezName || kiez.name} className='kiez-list-photo' />
            <h2>{kiez.kiezName || kiez.name}</h2>
            <p>{kiez.description}</p>
            <div>
                {kiez.events.length > 0 ? (
                    <ul>
                        {kiez.events.map(event => (
                            <li key={event._id}>
                                        <Link to={`/events/${event._id}`}>{event.name}</Link>
                                    </li>                        ))}
                    </ul>
                ) : (
                    <p>No events available.</p>
                )}
            </div>
        </div>
    ))}
</div>
)
}

export default KiezGrid;
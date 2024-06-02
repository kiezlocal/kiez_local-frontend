import {useEffect, useState} from 'react';
import axios from 'axios';
import "../App.css";



const KiezGrid = () => {
    const [kiezPhoto, setKiez] = useState([]);


useEffect(() => {
    axios.get('http://localhost:5005/api/kiez')
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
            <div key={kiez._id}>
               <img src={kiez.image} alt={kiez.kiezName} className='kiez-list-photo'/>
               <h2>{kiez.kiezName}</h2>
            </div>
        ))}
    </div>
)
}

export default KiezGrid;
import { useEffect, useState } from "react";
import axios from "axios";



const AddEventForm = ({onEventAdded, kiezOptions = [] }) => {
    const [eventData, setEventData] = useState({
        name: "",
        date: "",
        address: "",
        description: "",
        image: "",
        category: "",
        kiez: kiezOptions.length > 0 ? kiezOptions[0]._id : '',
    });


// useEffect(() => {
//     axios.get('http://localhost:5005/api/events')
//     .then(response => {
//         setKiezOptions(response.data);
//         if (response.data.length > 0){
//             setEventData(prevData => ({...prevData, kiez:kiezOptions[0]._id}));
//         }
//     }, [kiezOptions])
//     .catch(error => {
//         console.error("Error fetching kiez options", error);
//     })
// }, []);

useEffect(() => {
    if (kiezOptions.length > 0) {
        setEventData(prevData => ({ ...prevData, kiez: kiezOptions[0]._id }));
    }
}, [kiezOptions]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
};



// const handleChange = (e) => {
//     const {name, value} = e.target;
//     setEventData({...eventData, [name]:value});
// };

// function handleImageUpload(){
//     console.log("logic to upload the image");
// }

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitting event data", eventData);
//     axios
//     .post('http://localhost:5005/api/events', eventData)
//     .then(response => {
//         alert("New event added!");
//         console.log("Event created", response.data);
//         onEventAdded(response.data)
//     })
//     .catch(error => {
//         console.error("Error while creating an event", error);
//         if (error.response) {
//             console.error("Response data:", error.response.data);
//             console.error("Response status:", error.response.status);
//             console.error("Response headers:", error.response.headers);
//         } else if (error.request) {
//             console.error("Request data:", error.request);
//         } else {
//             console.error('Error message:', error.message);
//         }
//     });
// };

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting event data:', eventData);
    axios.post('http://localhost:5005/api/events', eventData)
        .then(response => {
            console.log('Event created:', response.data);
            onEventAdded(response.data);
        })
        .catch(error => {
            console.error("Error while creating an event", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            } else if (error.request) {
                console.error("Request data:", error.request);
            } else {
                console.error('Error message:', error.message);
            }
        });
};

return(
<form onSubmit={handleSubmit}>
    <legend>Add Event's Information</legend>

    <div>
        <label htmlFor="name">Event's name</label>
        <input 
        type="text"
        name="name"
        value={eventData.name}
        onChange={handleChange}
        placeholder="Enter event's name"
        required />
    </div>
    <div>
        <label htmlFor="date">Date</label>
        <input 
        type="date"
        name="date"
        value={eventData.date}
        onChange={handleChange}
        placeholder="Enter event's date and time"
        required
         />
    </div>
    <div>
        <label htmlFor="address">Full address</label>
        <input 
        type="text"
        name="address"
        value={eventData.address}
        onChange={handleChange}
        placeholder="Enter event's address"
        required
         />
    </div>
    <div>
        <label htmlFor="description">Description</label>
        <textarea 
        name="description" 
        id="description"
        value={eventData.description}
        onChange={handleChange}
        placeholder="Enter event's description"
        required
        ></textarea>
    </div>
    <div>
        <label htmlFor="image">Image URL</label>
        <input 
        type="text"
        name="image"
        value={eventData.image}
        onChange={handleChange} />
    </div>
    <div>
        <label htmlFor="category">Category</label>
        <select 
        name="category" 
        id="category"
        value={eventData.category}
        onChange={handleChange}
        required>
        <option value="All">All</option>
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
    <div>
        <label htmlFor="kiez">Kiez</label>
        <select 
        type="text"
        name="kiez"
        value={eventData.kiez}
        onChange={handleChange}
        required>
            {kiezOptions.map(kiez => (
                    <option key={kiez._id} value={kiez._id}>{kiez.kiezName}</option>
                ))}
        <option value="All">All</option>
        <option value="Pankow">Pankow</option>
        <option value="Mitte">Mitte</option>
        <option value="Reinickendorf">Reinickendorf</option>
        <option value="Spandau">Spandau</option>
        <option value="Charlottenburg-Wilmersdorf">Charlottenburg-Wilmersdorf</option>
        <option value="Steglitz-Zehlendorf">Steglitz-Zehlendorf</option>
        <option value="Tempelhof-Schöneberg">Tempelhof-Schöneberg</option>
        <option value="Neukölln">Neukölln</option>
        <option value="Friedrichshain-Kreuzberg">Friedrichshain-Kreuzberg</option>
        <option value="Lichtenberg">Lichtenberg</option>
        <option value="Marzahn-Hellersdorf">Marzahn-Hellersdorf</option>
        <option value="Treptow-Köpenick">Treptow-Köpenick</option>
        <option value="Other">Other</option>  
            {kiezOptions.map(kiez => (
            <option key={kiez._id} value={kiez._id}>{kiez.name}</option> ))}
            </select>
    </div>
    <button type="submit">Add Event</button>

</form>
);

}

export default AddEventForm;
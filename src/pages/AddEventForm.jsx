import { useEffect, useState } from "react";
import axios from "axios";

const AddEventForm = ({onEventAdded, kiezOptions = [] }) => {
    const [eventData, setEventData] = useState({
        name: "",
        date: "",
        startTime: '',
        address: "",
        description: "",
        image: "",
        category: "",
        kiez: kiezOptions.length > 0 ? kiezOptions[0]._id : '',
    });

useEffect(() => {
    console.log("Kiez options:", kiezOptions); 

    if (kiezOptions.length > 0) {
        setEventData(prevData => ({ ...prevData, kiez: kiezOptions[0]._id }));
    }
}, [kiezOptions]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting event data:', eventData);
    console.log('Selected Kiez ID:', eventData.kiez);
    axios.post(`${import.meta.env.VITE_API_URL}/api/events`, eventData)
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
        id="name"
        value={eventData.name}
        onChange={handleChange}
        placeholder="Event name"
        required />
    </div>
    <div>
        <label htmlFor="date">Date</label>
        <input 
        type="date"
        name="date"
        id="date"
        value={eventData.date}
        onChange={handleChange}
        placeholder="Enter event's date and time"
        required
         />
    </div>
    <div>
        <label htmlFor="startTime">startTime</label>
        <input 
        type="text"
        name="startTime"
        value={eventData.startTime}
        onChange={handleChange}
        placeholder="Enter startTime"
        required
         />
    </div>
    <div>
        <label htmlFor="address">Full address</label>
        <input 
        type="text"
        name="address"
        id="address"
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
        id="image"
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
    name="kiez"
    id="kiez"
    value={eventData.kiez}
    onChange={handleChange}
    required
>
    <option value="">Select a Kiez</option>
    {kiezOptions.map((kiez) => (
        <option key={kiez._id} value={kiez._id}>
            {kiez.kiezName}
        </option>
    ))}
</select>


                
        {/* <option value="All">All</option>
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
            </select> */}
    </div>
    <button type="submit">Add Event</button>

</form>
);

}

export default AddEventForm;
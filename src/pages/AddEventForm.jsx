import { useState } from "react";
import axios from "axios";



const AddEventForm = ({onEventAdded}) => {
    const [eventData, setEventData] = useState({
        name: "",
        date: "",
        address: "",
        description: "",
        image: "",
        category: "",
        kiezId: ""
    });


function handleChange(e) {
    const {name, value} = e.target;
    setEventData({...eventData, [name]:value});
};

function handleImageUpload(){
    console.log("logic to upload the image");
}

const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:5005/api/events', eventData)
    .then(response => {
        alert("New event added!")
        onEventAdded(response.data)
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
        <label htmlFor="kiezId">Kiez</label>
        <input type="text"
        name="kiezId"
        value={eventData.kiezId}
        onChange={handleChange}
        required />
    </div>
    <button type="submit">Add Event</button>

</form>
);

}

export default AddEventForm;
import EventGrid from "../components/EventGrid";
import SearchBar from "../components/Searchbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Functions:



//Return:
const Homepage = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5005/api/events')
            .then(response => {
                setEvents(response.data);
                setFilteredEvents(response.data);
            })
            .catch(error => {
                console.error("Error while fetching events information.", error);
            });
    }, []);

    const activateSearch = (searchInfo) => {
        if (searchInfo.category) {
            setFilteredEvents(events.filter(event => event.category === searchInfo.category));
        } else {
            setFilteredEvents(events);
        }
    };

    
return(
    <div>
        <header>

        </header>
<SearchBar activateSearch={activateSearch} />
<EventGrid events={filteredEvents}/>

    </div>
)

}

export default Homepage;
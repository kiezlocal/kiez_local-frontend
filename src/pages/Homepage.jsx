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
        let filtered = events;

        if (searchInfo.category) {
            filtered = filtered.filter(event => event.category === searchInfo.category);
        }

        if (searchInfo.kiez) {
            filtered = filtered.filter(event => event.kiez === searchInfo.kiez);
        }

        if (searchInfo.time) {
            const currentDate = new Date();
            if (searchInfo.time === "Next 3 days") {
                const next3Days = new Date();
                next3Days.setDate(currentDate.getDate() + 3);
                filtered = filtered.filter(event => new Date(event.date) <= next3Days);
            } else if (searchInfo.time === "Next 7 days") {
                const next7Days = new Date();
                next7Days.setDate(currentDate.getDate() + 7);
                filtered = filtered.filter(event => new Date(event.date) <= next7Days);
            } else if (searchInfo.time === "Next month") {
                const nextMonth = new Date();
                nextMonth.setMonth(currentDate.getMonth() + 1);
                filtered = filtered.filter(event => new Date(event.date) <= nextMonth);
            }
        }
        setFilteredEvents(filtered);
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
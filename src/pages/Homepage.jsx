import EventGrid from "../components/EventGrid";
import SearchBar from "../components/Searchbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddEventForm from "./AddEventForm";
//Functions:



const Homepage = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [kiezOptions, setKiezOptions] = useState([]);

    const [displayNewEvent, setDisplayNewEvent] = useState(false);
    const [displayAllEvents, setDisplayAllEvents] = useState(false);

    useEffect(() => {
        Promise.all([
            axios.get('http://localhost:5005/api/events'),
            axios.get('http://localhost:5005/api/kiez')
        ])
        .then(([eventsResponse, kiezResponse]) => {
            setEvents(eventsResponse.data);
            setFilteredEvents(eventsResponse.data);
            setKiezOptions(kiezResponse.data);
        })
        .catch(error => {
            console.error("Error while fetching events or kiez information.", error);
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

    const handleEventAdded = (newEvent) => {
        console.log("event added", newEvent);
        setEvents(prevEvents => [...prevEvents, newEvent]);
        setFilteredEvents(prevEvents => [...prevEvents, newEvent]);
    }

    const handleDelete = (eventId) => {
        axios.delete(`http://localhost:5005/api/events/${eventId}`)
            .then(() => {
                handleEventDeleted(eventId);
            })
            .catch(error => {
                console.error("Error while deleting event.", error);
            });
    }


return(
    <div>
        <header>

        </header>
<SearchBar activateSearch={activateSearch} />
<EventGrid events={filteredEvents}/>
<AddEventForm onEventAdded={handleEventAdded} />
<EventGrid events={filteredEvents} onDelete={handleDelete} />


{displayNewEvent &&
<AddEventForm setDisplayNewEvent={setDisplayNewEvent} setDisplayAllEvents={setDisplayAllEvents} />
}

{/* here to add displayeditform */}

    </div>
)

}

export default Homepage;
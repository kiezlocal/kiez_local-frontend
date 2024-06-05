import EventGrid from "../components/EventGrid";
import SearchBar from "../components/Searchbar";
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AddEventForm from "./AddEventForm";
import "/src/pages/Homepage.css";
import { AuthContext } from "../../context/auth.context";

import { ChakraProvider } from '@chakra-ui/react';

// import { useNavigate } from 'react-router-dom';
// import { loggedIn } from "../auth";

import { Link } from 'react-router-dom';


//Functions:



const Homepage = () => {
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [kiezOptions, setKiezOptions] = useState([]);
    const {loggedIn, isLoading} = useContext(AuthContext);

    // const navigate = useNavigate();


    
    //     axios.get([
    //         axios.get(`${import.meta.env.VITE_API_URL}/api/events`),
    //         axios.get(`${import.meta.env.VITE_API_URL}/api/kiez`)
    //     ])
    //     .then(([eventsResponse, kiezResponse]) => {
    //         setEvents(eventsResponse.data);
    //         setFilteredEvents(eventsResponse.data);
    //         setKiezOptions(kiezResponse.data);
    //     })
    //     .catch(error => {
    //         console.error("Error while fetching events or kiez information.", error);
    //     });
    // }, []);
    
    

    
    const handleEventAdded = (newEvent) => {
        setFilteredEvents(prevEvents => [...prevEvents, newEvent]);
    }
    
    const handleDelete = (eventId) => {
        axios.delete(`${import.meta.env.VITE_API_URL}/api/events/${eventId}`)
        .then(response => {
            setFilteredEvents(prevEvents => prevEvents.filter(event => event._id !== eventId));
            alert("Event deleted successfully");
          })
            .catch(error => {
                console.error("Error while deleting event.", error);
            });
    };

// const loggedIn = isLoggedIn();
console.log("Is user logged in? ", loggedIn);

    
return(
  <ChakraProvider>

    <div>
        <header>
       
       

        </header>
<SearchBar setFilteredEvents={setFilteredEvents} setKiezOptions={setKiezOptions} />
<EventGrid events={filteredEvents} onDelete={handleDelete} loggedIn={loggedIn} />
<button>
  <Link to="/events/addevent">Add events</Link>
</button>
{/* <AddEventForm onEventAdded={handleEventAdded} kiezOptions={kiezOptions} /> */}
{/*{loggedIn && <AddEventForm onEventAdded={handleEventAdded} kiezOptions={kiezOptions} />} */}
{/* {displayNewEvent &&
<AddEventForm setDisplayNewEvent={setDisplayNewEvent} setDisplayAllEvents={setDisplayAllEvents} />
} */}

{/* here to add displayeditform */}

    </div>
    </ChakraProvider>
)

}

export default Homepage;
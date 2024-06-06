import EventGrid from "../components/EventGrid";
import SearchBar from "../components/Searchbar";
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AddEventForm from "./AddEventForm";
import "/src/pages/Homepage.css";
import { AuthContext } from "../../context/auth.context";


import { ChakraProvider, Alert, AlertIcon, AlertTitle, AlertDescription, useDisclosure, CloseButton } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

//Functions:



const Homepage = () => {
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [kiezOptions, setKiezOptions] = useState([]);
    const [alertStatus, setAlertStatus] = useState(null);
    const {loggedIn, isLoading} = useContext(AuthContext);

    const { isOpen, onClose, onOpen } = useDisclosure();

    const styles = {
        main: {
            backgroundColor: "white"
        }
    }


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
            setAlertStatus('success');
            onOpen();
                setTimeout(() => {
                navigate('/');
                }, 2500); 
          })
            .catch(error => {
                console.error("Error while deleting event.", error);
                setAlertStatus('error');
                onOpen();
                setTimeout(() => {
                }, 2500);
            });
    };

// const loggedIn = isLoggedIn();
console.log("Is user logged in? ", loggedIn);

function CompExample() {
    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: true })
}

    
return(
  <ChakraProvider>

    <div className="main" style={styles.main}>
        <header>
        </header>

        {alertStatus === 'success' && isOpen && (
                    <Alert
                        status='success'
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='200px'
                        mb={4}
                        position="fixed"
                        bottom="10px"
                        left="50%"
                        transform="translateX(-50%)"
                        width="90%"
                        maxWidth="md"
                        zIndex={9999}
                    >
                        <AlertIcon boxSize='40px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Event deleted successfully!
                        </AlertTitle>
                        <CloseButton
         position='absolute'
         right='8px'
         top='8px'
         onClick={onClose}
      />
        </Alert>
                )}
                {alertStatus === 'error' && isOpen && (
                    <Alert
                        status='error'
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='200px'
                        mb={4}
                        position="fixed"
                        bottom="10px"
                        left="50%"
                        transform="translateX(-50%)"
                        width="90%"
                        maxWidth="md"
                        zIndex={9999}
                    >
                        <AlertIcon boxSize='40px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Failed to delete event!
                        </AlertTitle>
                        <AlertDescription maxWidth='sm'>
                            There was an error deleting the event. Please try again.
                        </AlertDescription>
                        <CloseButton
        alignSelf='flex-end'
        position='relative'
        right={-1}
        top={-1}
        onClick={onClose}
      />
                    </Alert>
                )}

<SearchBar setFilteredEvents={setFilteredEvents} setKiezOptions={setKiezOptions} />
<EventGrid events={filteredEvents} onDelete={handleDelete} loggedIn={loggedIn} />
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
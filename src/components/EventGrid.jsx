import {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import "/src/App.css"
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react'
// import {EventDetail} from "src/pages/EventDetails.jsx"
import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Heading, Text, Image, Stack, Divider, Tooltip, Link } from '@chakra-ui/react';
import { AuthContext } from '../context/auth.context';


const EventGrid = ({ events, onDelete, loggedIn }) => {
    const navigate = useNavigate(); 
    const { isLoggedIn } = useContext(AuthContext);
    const [detailedEvents, setDetailedEvents] = useState([]);

    useEffect(() => {
        const fetchDetailedEvents = async () => { 
          const detailedEventsData = await Promise.all(
            events.map(async (event) => {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events/${event._id}`);
                console.log(response.data); 
                return response.data;
            })
        );
        setDetailedEvents(detailedEventsData);
    };

        fetchDetailedEvents();
    }, [events]);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('de-DE', options);
    };

    const navigateToDetails = (eventId) => {
      navigate(`/events/${eventId}`);

    };

    const handleDelete = (eventId, e) => {
        e.stopPropagation();
        if (isLoggedIn) {
          onDelete(eventId);
        } else {
          navigate('/login');
        }
      };
    


      return (
        <SimpleGrid columns={{ sm: 1, md: 4, lg: 4 }} spacing="6" padding="6">
          {events.map(event => (
            <Card key={event._id} maxW="300px" borderWidth="1px" borderRadius="lg" borderColor="gray.300" overflow="hidden" onClick={() => navigateToDetails(event._id)} className='cardToHover'>
              {event.image && (
                <Box p="20px" pb="0"> 
                  <Image 
                    src={event.image} 
                    alt={event.name} 
                    borderRadius="lg" 
                    objectFit="cover" 
                    h="150px"
                    w="100%"
                  />
                </Box>
              )}
              <CardBody>
                <Stack mt="3" spacing="1"> 
                  <Heading size="md" mt="0" mb="10px">{event.name}</Heading> 
                  <Text><b>Date:</b> {formatDate(event.date)}</Text>
                  <Text><b>Time:</b> {event.startTime}</Text>
                  {event.kiez && (
                  <Text><b>Kiez:</b><Link as={RouterLink} to={`/kiezs/${event.kiez._id}`}>{event.kiez.kiezName}</Link></Text>
                  )}
                  {!event.kiez && (
                        <Text><b>Kiez: </b> Unknown Kiez</Text>

                  )}
                  <Text><b>Category:</b> {event.category}</Text>
                  {/* <Text><b>Address:</b> {event.address}</Text> */}
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme='teal' onClick={(e) => { e.stopPropagation(); navigate(`/events/${event._id}/edit`); }}>Edit</Button>
                  <Button variant="ghost" colorScheme="teal" onClick={(e) => handleDelete(event._id, e)}>Delete</Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      );
}
export default EventGrid;
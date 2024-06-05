import {useEffect, useState} from 'react';
import axios from 'axios';
import "/src/App.css"
import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react'
// import {EventDetail} from "src/pages/EventDetails.jsx"
import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Heading, Text, Image, Stack, Divider, Tooltip } from '@chakra-ui/react';





const EventGrid = ({ events, onDelete, loggedIn }) => {
    const navigate = useNavigate(); 

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('de-DE', options);
    };

    const navigateToDetails = (eventId) => {
      navigate(`/events/${eventId}`);

    };


    return (
      <SimpleGrid columns={[1, 2, 3]} spacing="6" padding="6"> 
          {events.map(event => (
              <Card key={event._id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={() => navigateToDetails(event._id)} className='cardToHover'>
                  {event.image && (
                      <Image src={event.image} alt={event.name} borderRadius="lg" />
                  )}
                  <CardBody>
                      <Stack mt="6" spacing="3">
                          <Heading size="md">{event.name}</Heading>
                          <Text><b>Date:</b> {formatDate(event.date)}</Text>
                          <Text><b>Time:</b> {event.startTime}</Text>
                          <Text><b>Kiez:</b>{event.kiez ? event.kiez.kiezName : 'Unknown Kiez'}</Text>
                          <Text><b>Category:</b> {event.category}</Text>
                            <Text><b>Address:</b>{event.address}</Text>
                          <Text><b>Description:</b>{event.description}</Text>
                      </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                      <ButtonGroup spacing="2">
                          <Button variant="solid" colorScheme="blue" onClick={(e) => { e.stopPropagation(); navigate(`/events/${event._id}/edit`); }}>Edit</Button>
                          <Button variant="ghost" colorScheme="blue" onClick={(e) => { e.stopPropagation(); onDelete(event._id); }}>Delete</Button>
                                                   
                      </ButtonGroup>
                  </CardFooter>
              </Card>
          ))}
      </SimpleGrid>
  );
}
export default EventGrid;
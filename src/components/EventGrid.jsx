import {useEffect, useState} from 'react';
import axios from 'axios';
import "../App.css";
import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react'
import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Heading, Text, Image, Stack, Divider } from '@chakra-ui/react';





const EventGrid = ({ events, onDelete, loggedIn }) => {
    const navigate = useNavigate(); 

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('de-DE', options);
    };

   
    return (
        <SimpleGrid columns={[1, 2, 3]} spacing="6" padding="6">
          {events.map(event => (
            <Card key={event._id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              {event.image && (
                <Image src={event.image} alt={event.name} borderRadius="lg" />
              )}
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Heading size="md">{event.name}</Heading>
                  <Text>{formatDate(event.date)}</Text>
                  <Text>{event.startTime}</Text>
                  <Text>{event.address}</Text>
                  <Text>{event.description}</Text>
                  <Text>{event.kiez ? event.kiez.kiezName : 'Unknown Kiez'}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue" onClick={() => navigate(`/events/${event._id}/edit`)}>Edit</Button>
                  {loggedIn && (
                    <Button variant="ghost" colorScheme="blue" onClick={() => onDelete(event._id)}>Delete</Button>
                  )}
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      );

}

export default EventGrid;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Center,
  Container,
  VStack,
  Box,
  Button
} from "@chakra-ui/react";

const EventDetail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  const handleGoBack = () => {
    window.history.back();
  };


  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/events/${eventId}`
        );
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxW="8xl">
      <Button onClick={handleGoBack} ml="10px" mt="20px">Go Back</Button>
      <Center bg="white" h="600px" color="gray">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          maxW="6xl"
        >
          <Image
            src={event.image}
            alt={event.name}
            objectFit="cover"
            maxW={{ base: "100%", sm: "400px" }}
          />
          <Stack>
            <CardBody>
              <Heading size="lg">{event.name}</Heading>

              <Text py="2">
                <Box as="span" fontWeight="bold">
                  Category:
                </Box>{" "}
                {event.category}
              </Text>

              <Text py="2">
                <Box as="span" fontWeight="bold">
                  Time:
                </Box>{" "}
                {new Date(event.date).toLocaleString()}
              </Text>
             {/* kiez: eventKiez ? eventKiez.kiez : "Unknown Kiez" */}
             <Text py="2">
                <Box as="span" fontWeight="bold">
                  Kiez:
                </Box>{" "}
                {event.kiez ? event.kiez.kiezName : "Unknown Kiez"}
              </Text> 

              <Text py="2">
                <Box as="span" fontWeight="bold">
                Address:
                </Box>{" "}
                {event.address}
              </Text>
              <Text py="2">
                <Box as="span" fontWeight="bold">
                Description:
                </Box>{" "}
                {event.description}
              </Text>
              <Text py="2" mb="10px">
  <Box as="span" fontWeight="bold">
    Website:
  </Box>{" "}
  <a href={event.website} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>{event.website}</a>
</Text>
              <Button variant="solid" colorScheme="blue" onClick={(e) => { e.stopPropagation(); navigate(`/events/${event._id}/edit`); }} mr="4" > Edit </Button>
                  <Button variant="ghost" colorScheme="blue" onClick={(e) => { e.stopPropagation(); onDelete(event._id); }} mr="4" > Delete </Button>              <p> </p>
                  <Box mt="4">
          
        </Box>
            </CardBody>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
};

export default EventDetail;

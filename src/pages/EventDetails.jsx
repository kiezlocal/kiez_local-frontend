import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
} from "@chakra-ui/react";

const EventDetail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

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

              <Text py="2">
                <Box as="span" fontWeight="bold">
                  Time:
                </Box>{" "}
                {new Date(event.date).toLocaleString()}
              </Text>

              <Text py="2">
                <Box as="span" fontWeight="bold">
                Address:
                </Box>{" "}
                {event.address}
              </Text>

              <Text py="2">{event.description}</Text>

            </CardBody>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
};

export default EventDetail;

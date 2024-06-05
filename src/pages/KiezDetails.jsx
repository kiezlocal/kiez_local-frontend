import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  Link
} from "@chakra-ui/react";

const KiezDetails = () => {
  const { kiezId } = useParams();
  const [kiez, setKiez] = useState(null);


  useEffect(() => {
    const fetchKiez = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/kiez/${kiezId}`);
        const data = await response.json();
        setKiez(data);
      } catch (error) {
        console.error('Error fetching kiez:', error);
      }
    };

    fetchKiez();
  }, [kiezId]);

  if (!kiez) {
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
            src={kiez.image}
            alt={kiez.kiezName}
            objectFit="cover"
            maxW={{ base: "100%", sm: "400px" }}
          />
          <Stack>
            <CardBody>
              <Heading size="lg">{kiez.kiezName}</Heading>

              <Text py="2">
                {kiez.description}
              </Text>

            </CardBody>
          </Stack>
        </Card>
      </Center>

      
      <Center><Heading size="md" mt={10} mb={4} position="center">Events in the neighbourhood</Heading></Center>
      <SimpleGrid columns={[1, 2, 3]} spacing="6" padding="6">
      {kiez.events && kiez.events.length > 0 ? (
            kiez.events.map(event => (
          <Card key={event._id} borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="2xs">
            {event.image && (
              <Image src={event.image} alt={event.name} borderRadius="lg" />
            )}
            
            <CardBody>
              <Stack spacing="3">
                <Heading mb={3} fontSize="lg">{event.name}</Heading>
                <Text>{new Date(event.date).toLocaleDateString()}</Text>
                <Text>{event.address}</Text>
                <Link to={`/events/${event._id}`}>Read more</Link>
              </Stack>
            </CardBody>
          </Card>
        ))
      ) : (
        <Text>There are no events at the moment.</Text>
      )}
      </SimpleGrid>

    </Container>
  );
};


export default KiezDetails;

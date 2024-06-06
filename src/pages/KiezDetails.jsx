import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
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
  Link,
  Button
} from "@chakra-ui/react";

const KiezDetails = () => {
  const { kiezId } = useParams();
  const [kiez, setKiez] = useState(null);

  const handleGoBack = () => {
    window.history.back();
  };


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
  
<Container maxW="8xl" mb="0">
  <Button onClick={handleGoBack} ml="10px" mt="20px">Go Back</Button>
      <Center bg="white" h="600px" color="gray">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          maxW="6xl"
          // mb="5px"
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

      
      <Center><Heading size="md" mb={4} position="center" mt="0" pt="0">Events in this neighbourhood</Heading></Center>
      <SimpleGrid columns={[1, 2, 3]} spacing="6" padding="6">
      {kiez.events && kiez.events.length > 0 ? (
            kiez.events.map(event => (
          <Card key={event._id} borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="2xs">
            {event.image && (
              <Image src={event.image} alt={event.name} borderRadius="lg" />
            )}
            
            <CardBody>
              <Stack spacing="3">
                <Heading mb={3} fontSize="lg" align='center'>{event.name}</Heading>
                <Text align='center'>{new Date(event.date).toLocaleDateString()}</Text>
                {/* <Text>{event.address}</Text> */}
                <Link as={RouterLink} to={`/events/${event._id}`}align='center'>
                <Button mt={3} colorScheme="teal" size='sm'>
                  Read more
                  </Button>
                  </Link>
              </Stack>
            </CardBody>
          </Card>
        ))
      ) : (
        <Box align='center'>
        <Text >There are no events at the moment.</Text>
        </Box>
      )}
      </SimpleGrid>

    </Container>
  );
};


export default KiezDetails;

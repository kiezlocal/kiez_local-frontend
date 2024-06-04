import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import "../App.css";
import { Button, Card, CardBody, Heading, Image } from "@chakra-ui/react";




const KiezGrid = () => {
    const [kiezPhoto, setKiez] = useState([]);


useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/kiez`)
    .then(response => {
        console.log(response.data); 
        setKiez(response.data);
    })
    .catch(error => {
        console.error("Error while fetching kiez information.", error);
    });
}, []);

return (
    <SimpleGrid columns={[1, 2, 3]} spacing="6" padding="6">
      {kiezPhoto.map(kiez => (
        <Card key={kiez._id} borderWidth="1px" borderRadius="lg" overflow="hidden">
          {kiez.image && (
            <Image src={kiez.image} alt={kiez.kiezName || kiez.name} borderRadius="lg" />
          )}
          <CardBody>
            <Stack spacing="3">
              <Heading mb={3} fontSize="2xl">{kiez.kiezName || kiez.name}</Heading>
              <Text>{kiez.description}</Text>
              <div>
                {kiez.events.length > 0 ? (
                  <ul>
                    {kiez.events.map(event => (
                      <li key={event._id}>
                        <Link to={`/events/${event._id}`}>{event.name}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Text>No events available.</Text>
                )}
              </div>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );

}

export default KiezGrid;
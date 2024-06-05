import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import "../App.css";
import { Card, CardBody, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"; 
import SearchBar from '../components/Searchbar';




const KiezGrid = () => {
  const [kiezOptions, setKiezOptions] = useState([]);
  const [filteredKiezPhoto, setFilteredKiezPhoto] = useState([]);


return (
  <div>
    <header></header>
    <SearchBar setFilteredEvents={setFilteredKiezPhoto} setKiezOptions={setKiezOptions} />
    <SimpleGrid columns={[1, 2, 3]} spacing="6" padding="6">a
      {filteredKiezPhoto.map(kiez => (
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
    </div>
  );

}

export default KiezGrid;
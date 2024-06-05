import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 
import "../App.css";
import { Card, CardBody, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"; 
import SearchBar from '../components/Searchbar';




const KiezGrid = () => {
  const [kiezOptions, setKiezOptions] = useState([]);
  const [filteredKiezPhoto, setFilteredKiezPhoto] = useState([]);
  
  const navigate = useNavigate(); 


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/kiez`)
    .then(response => {
        console.log(response.data); 
        setKiezOptions(response.data);
        setFilteredKiezPhoto(response.data);
    })
    .catch(error => {
        console.error("Error while fetching kiez information.", error);
    });
}, []);

const navigateToDetails = (kiezId) => {
  navigate(`/kiezs/${kiezId}`);

};

return (
  <div>
    <header></header>
    <SearchBar setFilteredKiezPhoto={setFilteredKiezPhoto} setKiezOptions={setKiezOptions} />

    <SimpleGrid columns={[1, 2, 3]} spacing="6" padding="6">
      {filteredKiezPhoto.map(kiez => (
        <Card key={kiez._id} borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={() => navigateToDetails(kiez._id)} className='cardToHover' >
          {kiez.image && (
            <Image src={kiez.image} alt={kiez.kiezName || kiez.name} borderRadius="lg" />
          )}
          <CardBody>
            <Stack spacing="3">
              <Heading mb={3} fontSize="2xl">{kiez.kiezName || kiez.name}</Heading>
              {/* <Text>{kiez.description}</Text> */}
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
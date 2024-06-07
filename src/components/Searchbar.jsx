import {useEffect, useState} from 'react';
import axios from 'axios';
// import axios from 'axios';
import "../App.css";
import { Select, 
    ChakraProvider,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    extendTheme,
    Box,
    Button, 
    Stack,
    Flex } from '@chakra-ui/react';

    const activeLabelStyles = {
        transform: "scale(0.85) translateY(-24px)"
      };
      export const theme = extendTheme({
        components: {
          Form: {
            variants: {
              floating: {
                container: {
                  _focusWithin: {
                    label: {
                      ...activeLabelStyles
                    }
                  },
                  "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                    ...activeLabelStyles
                  },
                  label: {
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    position: "absolute",
                    backgroundColor: "white",
                    pointerEvents: "none",
                    mx: 3,
                    px: 1,
                    my: 2,
                    transformOrigin: "left top"
                  }
                }
              }
            }
          }
        }
      });
      
      export default function SearchBar({ setFilteredEvents, setKiezOptions }) {
        const [searchInfo, setSearch] = useState({ category: '', kiez: '', time: '' });
        const [events, setEvents] = useState([]);

      useEffect(() => {
        const fetchEventsAndKiez = async () => {
            try {
                const eventsResponse = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/events`
                );
                const kiezResponse = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/kiez`
                );

                if (
                    Array.isArray(eventsResponse.data) &&
                    Array.isArray(kiezResponse.data)
                ) {
                    setEvents(eventsResponse.data);
                    setFilteredEvents(eventsResponse.data);
                    setKiezOptions(kiezResponse.data);
                } else {
                    console.error("Unexpected response format", {
                        events: eventsResponse.data,
                        kiez: kiezResponse.data,
                    });
                }
            } catch (error) {
                console.error(
                    "Error while fetching events or kiez information.",
                    error
                );
            }
        };
        fetchEventsAndKiez();
    }, [setFilteredEvents, setKiezOptions]);

// export default function SearchBar({activateSearch}){
//     const [searchInfo, setSearch] = useState({category: '', kiez: '', time: ''});


// function handleSubmitSearch(e) {
//     e.preventDefault();
//     activateSearch(searchInfo)
//   }

function handleSubmitSearch(e) {
    e.preventDefault();
    let filtered = events;

    if (searchInfo.category) {
        filtered = filtered.filter(event => event.category === searchInfo.category);
    }

    if (searchInfo.kiez) {
        filtered = filtered.filter(event => event.kiez === searchInfo.kiez);
    }

    if (searchInfo.time) {
        const currentDate = new Date();
        if (searchInfo.time === "Next 3 days") {
            const next3Days = new Date();
            next3Days.setDate(currentDate.getDate() + 3);
            filtered = filtered.filter(event => new Date(event.date) <= next3Days);
        } else if (searchInfo.time === "Next 7 days") {
            const next7Days = new Date();
            next7Days.setDate(currentDate.getDate() + 7);
            filtered = filtered.filter(event => new Date(event.date) <= next7Days);
        } else if (searchInfo.time === "Next month") {
            const nextMonth = new Date();
            nextMonth.setMonth(currentDate.getMonth() + 1);
            filtered = filtered.filter(event => new Date(event.date) <= nextMonth);
        }
    }
    setFilteredEvents(filtered);
}

function handleInputCategory(e) {
    setSearch(prevState => ({ ...prevState, category: e.target.value }));
}

function handleInputKiez(e) {
    setSearch(prevState => ({ ...prevState, kiez: e.target.value }));
}

function handleInputTime(e) {
    setSearch(prevState => ({ ...prevState, time: e.target.value }));
}

return (
    <ChakraProvider theme={theme}>
        <Box as="form" onSubmit={handleSubmitSearch} p={10} m={4} mt={0} boxShadow='md'>
            <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="center"
            mb={4}
            gap={2}
            wrap="wrap">
                <Box  mb={4} w={{ base: '100%', md: 'auto' }}>
                    <FormLabel htmlFor="category">Category</FormLabel>
                    <Select id="category-select" value={searchInfo.category} onChange={handleInputCategory} placeholder='All' w={[200, 250, 300]}  borderColor='gray.400' backgroundColor="white">
                        <option value="Music">Music</option>
                        <option value="Art">Art</option>
                        <option value="Local markets">Local markets</option>
                        <option value="Sport">Sport</option>
                        <option value="Food&Drinks">Food&Drinks</option>
                        <option value="Events for kids">Events for kids</option>
                        <option value="Tours">Tours</option>
                        <option value="Social gatherings">Social gatherings</option>
                        <option value="Other">Other</option>
                    </Select>
                </Box>

                <Box mb={4} w={{ base: '100%', md: 'auto' }}>
                    <FormLabel htmlFor="kiez-select">Neighbourhood</FormLabel>
                    <Select id="kiez-select" value={searchInfo.kiez} onChange={handleInputKiez} placeholder='All' w={[200, 250, 300]} borderColor='gray.400' backgroundColor="white">
                        <option value="Pankow">Pankow</option>
                        <option value="Mitte">Mitte</option>
                        <option value="Reinkendorf">Reinkendorf</option>
                        <option value="Spandau">Spandau</option>
                        <option value="Charlottenburg-Wilmersdorf">Charlottenburg-Wilmersdorf</option>
                        <option value="Steglitz-Zehlendorf">Steglitz-Zehlendorf</option>
                        <option value="Tempelhof-Schöneberg">Tempelhof-Schöneberg</option>
                        <option value="Neukölln">Neukölln</option>
                        <option value="Friedrichshain-Kreuzberg">Friedrichshain-Kreuzberg</option>
                        <option value="Lichtenberg">Lichtenberg</option>
                        <option value="Marzahn-Hellersdorf">Marzahn-Hellersdorf</option>
                        <option value="Treptow-Köpenick">Treptow-Köpenick</option>
                    </Select>
                </Box>

                <Box mb={4} w={{ base: '100%', md: 'auto' }}>
                    <FormLabel htmlFor="time-select">Time</FormLabel>
                    <Select id="time-select" value={searchInfo.time} onChange={handleInputTime} placeholder='All' w={[200, 250, 300]}  borderColor='gray.400' backgroundColor="white">
                        <option value="Next 3 days">Next 3 days</option>
                        <option value="Next 7 days">Next 7 days</option>
                        <option value="Next month">Next month</option>
                    </Select>
                </Box>
           <Button
    type='submit'
    colorScheme='teal'
    size='md'
    mt="15px"
    ml={{ base: 0, md: 'top-end', lg: 'top-end' }} 
    >
    Search
</Button>
            </Flex>
            

        </Box>
    </ChakraProvider>
);


}
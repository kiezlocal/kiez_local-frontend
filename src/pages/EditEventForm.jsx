import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, Select, Textarea, VStack, Heading, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';


const EditEventForm = () => {
    const [formDetails, setFormDetails] = useState({
        name: '',
        date: '',
        startTime: '',
        address: '',
        description: '',
        image: '',
        category: '',
        kiezOptions: ''
    });

    const [kiezOptions, setKiezOptions] = useState([]);
    const [alertStatus, setAlertStatus] = useState(null);
    const navigate = useNavigate();
    const { eventId } = useParams();

    const handleGoBack = () => {
        window.history.back();
      };

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/events/${eventId}`)
            .then(response => {
                setFormDetails(response.data);
            })
            .catch(error => {
                console.error("Error while fetching event information.", error);
            });
    }, [eventId]);

    useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/kiez`)
        .then(response => {
            setKiezOptions(response.data);
        })
        .catch(error => {
            console.error("Error while fetching kiez options.", error);
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({ ...formDetails, [name]: value });
    }; 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/events/${eventId}`, formDetails);

            if (response.status === 200) {
                setAlertStatus('success');
                setTimeout(() => {
                navigate('/');
                }, 2500); 
            } else {
                setAlertStatus('error');
                setTimeout(() => {
                }, 2500);
            }
        } catch (error) {
            console.error('Error updating event:', error);
            setAlertStatus('error');

        }
    };

    return (
        
         <Box position="relative">
        <Box position="absolute" top="10px" left="10px">
            <Button onClick={handleGoBack} colorScheme="teal" ml="10px">Go Back</Button>
        </Box>
        <Box maxW="md" mx="auto" p={6} borderWidth={1} borderRadius="lg" boxShadow="lg" mt="20px">

        {alertStatus === 'success' && (
                    <Alert
                        status='success'
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='200px'
                        mb={4}
                        position="fixed"
                        bottom="10px"
                        left="50%"
                        transform="translateX(-50%)"
                        width="90%"
                        maxWidth="md"
                        zIndex={9999}
                    >
                        <AlertIcon boxSize='40px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Event updated successfully!
                        </AlertTitle>
                        <AlertDescription maxWidth='sm'>
                            The event has been updated. You will be redirected shortly.
                        </AlertDescription>
                    </Alert>
                )}
                {alertStatus === 'error' && (
                    <Alert
                        status='error'
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='200px'
                        mb={4}
                        position="fixed"
                        bottom="10px"
                        left="50%"
                        transform="translateX(-50%)"
                        width="90%"
                        maxWidth="md"
                        zIndex={9999}
                    >
                        <AlertIcon boxSize='40px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Failed to update event!
                        </AlertTitle>
                        <AlertDescription maxWidth='sm'>
                            There was an error updating the event. Please try again.
                        </AlertDescription>
                    </Alert>
                )}

            <form onSubmit={handleSubmit}>
                <Heading mb={6} size="lg">Edit Event</Heading>
                <VStack spacing={4} align="stretch">

                    <FormControl isRequired>
                    <FormLabel htmlFor="name">Event Name</FormLabel>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formDetails.name}
                        onChange={handleChange}
                    />
                    </FormControl>

                    <FormControl isRequired>
                    <FormLabel htmlFor="date">Date</FormLabel>
                    <Input
                        type="date"
                        id="date"
                        name="date"
                        value={formDetails.date.split('T')[0]} 
                        onChange={handleChange}
                    />
                    </FormControl>
            
                <FormControl isRequired>
                <FormLabel htmlFor="startTime">Start Time</FormLabel>
                    <Input
                        type="text"
                        id="startTime"
                        name="startTime"
                        value={formDetails.startTime} 
                        onChange={handleChange}
                    />
                    </FormControl>

               <FormControl isRequired>
               <FormLabel htmlFor="address">Full address</FormLabel>
                    <Input
                        type="text"
                        id="address"
                        name="address"
                        value={formDetails.address}
                        onChange={handleChange}
                    />
                    </FormControl>
              
              <FormControl isRequired>
              <FormLabel htmlFor="description">Description</FormLabel>
                    <Textarea
                        id="description"
                        name="description"
                        value={formDetails.description}
                        onChange={handleChange}
                    />
                    </FormControl>
              
              <FormControl>
              <FormLabel htmlFor="image">Image URL</FormLabel>
                    <Input
                        type="text"
                        id="image"
                        name="image"
                        value={formDetails.image}
                        onChange={handleChange}
                    />
                    </FormControl>
               
               <FormControl isRequired>
               <FormLabel htmlFor="category">Category</FormLabel>
                    <Select
                        id="category"
                        name="category"
                        value={formDetails.category}
                        onChange={handleChange}
                    >
                        <option value="Music">Music</option>
                        <option value="Art">Art</option>
                        <option value="Local markets">Local markets</option>
                        <option value="Sport">Sport</option>
                        <option value="Food&drinks">Food & Drinks</option>
                        <option value="Events for kids">Events for Kids</option>
                        <option value="Tours">Tours</option>
                        <option value="Social gatherings">Social Gatherings</option>
                        <option value="Other">Other</option>
                    </Select>
                    </FormControl>
              
             <FormControl isRequired>
              <FormLabel htmlFor="kiez">Kiez</FormLabel>
              <Select 
              name="kiez"
              id="kiez"
              value={formDetails.kiezId}
              onChange={handleChange}
            >
              <option value="All">All</option>
              {kiezOptions.map(kiez => (
                <option key={kiez._id} value={kiez._id}>{kiez.kiezName}</option>
              ))}
            </Select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="website">Website</FormLabel>
                    <Input
                        type="text"
                        id="website"
                        name="website"
                        value={formDetails.website}
                        onChange={handleChange}
                    />
                    </FormControl>


                <Button type="submit" colorScheme="blue" size="lg" width="full">Update Event</Button>
                
                </VStack>
                </form>
            </Box>
            </Box>

    );
};

export default EditEventForm;
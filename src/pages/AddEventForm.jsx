import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, FormControl, FormLabel, Input, Select, Textarea, Button, VStack, Heading, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react';


const AddEventForm = () => {
    const [eventData, setEventData] = useState({
        name: "",
        date: "",
        startTime: '',
        address: "",
        description: "",
        image: "",
        category: "",
        kiez: '',
        website: '',
    });

const navigate = useNavigate();
const [alertStatus, setAlertStatus] = useState(null);

const handleGoBack = () => {
    window.history.back();
  };

const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting event data:', eventData);
    console.log('Selected Kiez ID:', eventData.kiez);
    axios.post(`${import.meta.env.VITE_API_URL}/api/events`, eventData)
        .then(response => {
            console.log('Event created:', response.data);
            setAlertStatus('success');
            setTimeout(() => {
                navigate('/');
            }, 2500);
        })
        .catch(error => {
            console.error("Error while creating an event", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
                setAlertStatus('error'); 
                setTimeout(() => {
                    setAlertStatus(null); 
                }, 2500);
            } else if (error.request) {
                console.error("Request data:", error.request);
                setAlertStatus('error');
                setTimeout(() => {
                    setAlertStatus(null); 
                }, 2500);
            } else {
                console.error('Error message:', error.message);
                setAlertStatus('error'); 
                setTimeout(() => {
                    setAlertStatus(null); 
                }, 2500);
            }
        });
};


const [kiezOptions, setKiezOptions] = useState([]);

const getKiezInfo = () => {
  axios.get(`${import.meta.env.VITE_API_URL}/api/kiez`)
  .then(response => {
    setKiezOptions(response.data);
    
  })
  .catch(error => {
    console.log(error)
  })
}

useEffect(() => {
  getKiezInfo() 
 
}, []);




return(
    <Box position="relative">
    <Box position="absolute" top="10px" left="10px">
    <Button onClick={handleGoBack} colorScheme="teal" ml="10px">Go back</Button>
</Box>
<Box maxW="md" mx="auto" p={6} borderWidth={1} borderRadius="lg" boxShadow="lg" mt="20px">
                {alertStatus === 'success' && ( // Dodaj to
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
                            Event added successfully!
                        </AlertTitle>
                        <AlertDescription maxWidth='sm'>
                            The event has been added. You will be redirected shortly.
                        </AlertDescription>
                        <CloseButton
                            alignSelf='flex-start'
                            position='relative'
                            right={-1}
                            top={-1}
                            onClick={() => setAlertStatus(null)} // Dodaj to
                        />
                    </Alert>
                )}
                {alertStatus === 'error' && ( // Dodaj to
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
                            Failed to add event!
                        </AlertTitle>
                        <AlertDescription maxWidth='sm'>
                            There was an error adding the event. Please try again.
                        </AlertDescription>
                        <CloseButton
                            alignSelf='flex-start'
                            position='relative'
                            right={-1}
                            top={-1}
                            onClick={() => setAlertStatus(null)} // Dodaj to
                        />
                    </Alert>
                )}
            <form onSubmit={handleSubmit}>
                <Heading mb={6} size="lg">Add Event's Information</Heading>
                <VStack spacing={4} align="stretch">

                    <FormControl isRequired>
                        <FormLabel htmlFor="name">Event's Name</FormLabel>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={eventData.name}
                            onChange={handleChange}
                            placeholder="Event name"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel htmlFor="date">Date</FormLabel>
                        <Input
                            type="date"
                            id="date"
                            name="date"
                            value={eventData.date}
                            onChange={handleChange}
                            placeholder="Enter event's date and time"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel htmlFor="startTime">Start Time</FormLabel>
                        <Input
                            type="text"
                            id="startTime"
                            name="startTime"
                            value={eventData.startTime}
                            onChange={handleChange}
                            placeholder="Enter start time"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel htmlFor="address">Full Address</FormLabel>
                        <Input
                            type="text"
                            id="address"
                            name="address"
                            value={eventData.address}
                            onChange={handleChange}
                            placeholder="Enter event's address"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Textarea
                            id="description"
                            name="description"
                            value={eventData.description}
                            onChange={handleChange}
                            placeholder="Enter event's description"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="image">Image URL</FormLabel>
                        <Input
                            type="text"
                            id="image"
                            name="image"
                            value={eventData.image}
                            onChange={handleChange}
                            placeholder="Enter image URL"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel htmlFor="category">Category</FormLabel>
                        <Select
                            id="category"
                            name="category"
                            value={eventData.category}
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
                            id="kiez"
                            name="kiez"
                            value={eventData.kiez}
                            onChange={handleChange}
                        >
                            <option value="">Select a Kiez</option>
                            {kiezOptions.map((kiez) => (
                                <option key={kiez._id} value={kiez._id}>
                                    {kiez.kiezName}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="website">Website</FormLabel>
                        <Input
                            type="text"
                            id="website"
                            name="website"
                            value={eventData.website}
                            onChange={handleChange}
                            placeholder="Enter website URL"
                        />
                    </FormControl>

                    <Button type="submit" colorScheme="blue" size="lg" width="full">
                        Add Event
                    </Button>
                    
                </VStack>
            </form>
        </Box>
        </Box>
)

}

export default AddEventForm;
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, FormControl, FormLabel, Input, Select, Textarea, VStack, Heading } from '@chakra-ui/react';


const AddEventForm = ({onEventAdded, kiezOptions = [] }) => {
    const [eventData, setEventData] = useState({
        name: "",
        date: "",
        startTime: '',
        address: "",
        description: "",
        image: "",
        category: "",
        kiez: kiezOptions.length > 0 ? kiezOptions[0]._id : '',
    });

useEffect(() => {
    if (kiezOptions.length > 0) {
        setEventData(prevData => ({ ...prevData, kiez: kiezOptions[0]._id }));
    }
}, [kiezOptions]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting event data:', eventData);
    axios.post(`${import.meta.env.VITE_API_URL}/api/events`, eventData)
        .then(response => {
            console.log('Event created:', response.data);
            onEventAdded(response.data);
        })
        .catch(error => {
            console.error("Error while creating an event", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            } else if (error.request) {
                console.error("Request data:", error.request);
            } else {
                console.error('Error message:', error.message);
            }
        });
};

return(
<Box maxW="md" mx="auto" p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <form onSubmit={handleSubmit}>
        <Heading mb={6} size="lg">Add Event's Information</Heading>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel htmlFor="name">Event's name</FormLabel>
            <Input 
              type="text"
              name="name"
              id="name"
              value={eventData.name}
              onChange={handleChange}
              placeholder="Event name"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input 
              type="date"
              name="date"
              id="date"
              value={eventData.date}
              onChange={handleChange}
              placeholder="Enter event's date and time"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="startTime">Start Time</FormLabel>
            <Input 
              type="text"
              name="startTime"
              id="startTime"
              value={eventData.startTime}
              onChange={handleChange}
              placeholder="Enter start time"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="address">Full address</FormLabel>
            <Input 
              type="text"
              name="address"
              id="address"
              value={eventData.address}
              onChange={handleChange}
              placeholder="Enter event's address"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea 
              name="description"
              id="description"
              value={eventData.description}
              onChange={handleChange}
              placeholder="Enter event's description"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="image">Image URL</FormLabel>
            <Input 
              type="text"
              name="image"
              id="image"
              value={eventData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="category">Category</FormLabel>
            <Select 
              name="category"
              id="category"
              value={eventData.category}
              onChange={handleChange}
            >
              <option value="All">All</option>
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
              value={eventData.kiez}
              onChange={handleChange}
            >
              <option value="All">All</option>
              {kiezOptions.map(kiez => (
                <option key={kiez._id} value={kiez._id}>{kiez.kiezName}</option>
              ))}
            </Select>
          </FormControl>

          <Button type="submit" colorScheme="blue" size="lg" width="full">Add Event</Button>
        </VStack>
      </form>
    </Box>
  );
}

export default AddEventForm;
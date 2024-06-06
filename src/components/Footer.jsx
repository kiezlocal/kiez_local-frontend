import { Link } from 'react-router-dom';
import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'; 
import LocalKiezLogo from '../assets/LocalKiez.svg'; 

const Footer = () => {
    return (
        <Box as="footer" bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4}
                justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }}>
                <Box as="img" src="/src/assets/LocalKiez.svg" alt="LocalKiez Logo" w={250} h={250} />
                <Stack direction={'row'} spacing={6}>
                    <Link to="/imprint">Imprint</Link>
                    <Link to="/privacy">Privacy Notice</Link>
                    <Link to="/terms">Terms of Use</Link>
                </Stack>
            </Container>
            <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4}
                    justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }}>
                    <Text>© {new Date().getFullYear()} LocalKiez. All rights reserved.</Text>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;

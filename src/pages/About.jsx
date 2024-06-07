import React from 'react';
import { Box, Flex, Image, Text, Heading, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <Box className="about-container" p={6} display="flex" flexDirection="column" alignItems="center">
      <Heading as="h1" mb={6} textAlign="center">About</Heading>
      <Box className="about-content" mb={6} maxWidth="70%" textAlign="center">
        <Text mb={4}>
          Welcome to our event recommendation platform, where you can stay updated on all the exciting happenings in your neighborhood. Whether it's a flea market, concert, gallery opening, or a new café or restaurant, our site helps you find the best events around the corner.
        </Text>
        <Text mb={4}>
          Our goal is to bring the community closer by providing a space for users to discover and share events happening in their Kiez. You can easily browse events by quarters in Berlin and stay connected with what's going on near you.
        </Text>
        <Text>
          Join us in celebrating the vibrant culture and dynamic events that make each Kiez unique. Stay informed, get involved, and enjoy everything your neighborhood has to offer.
        </Text>
      </Box>

      <Flex direction={["column", "row"]} justifyContent="space-around" maxWidth="70%" width="100%" spacing={4}>
        <Box className="about-person" textAlign="center" mb={[6, 0]} p={4} borderWidth="1px" borderRadius="lg" borderColor="gray.300" width={["100%", "45%"]}>
          <Image src="" alt="Magdalena" boxSize="150px" borderRadius="full" mb={4} mx="auto" />
          <Box className="about-details">
            <Text className="about-created-by" fontWeight="bold">Created by:</Text>
            <Text className="about-last-name" fontSize="xl">Magdalena</Text>
            <Text className="about-role" color="gray.500">Developer</Text>
            <Text className="about-description" mt={2}>
              Mauris eleifend rhoncus nibh, nec interdum lacus hendrerit vel. Duis varius ac felis sit amet lacinia. Praesent sit amet tempor quam, a consectetur purus. Morbi et eros ultricies, finibus urna vitae, faucibus risus.
            </Text>
            <Flex justifyContent="center" mt={4}>
              <Link href="https://www.linkedin.com/in/magdalena-korgul/" isExternal mx={2}>
                <Icon as={FaLinkedin} w={6} h={6} />
              </Link>
              <Link href="https://github.com/magdakorgul" isExternal mx={2}>
                <Icon as={FaGithub} w={6} h={6} />
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box className="about-person" textAlign="center" p={4} borderWidth="1px" borderRadius="lg" borderColor="gray.300" width={["100%", "45%"]}>
          <Image src="" alt="Katrin" boxSize="150px" borderRadius="full" mb={4} mx="auto" />
          <Box className="about-details">
            <Text className="about-created-by" fontWeight="bold">Created by:</Text>
            <Text className="about-last-name" fontSize="xl">Katrin</Text>
            <Text className="about-role" color="gray.500">Developer</Text>
            <Text className="about-description" mt={2}>
              Mauris eleifend rhoncus nibh, nec interdum lacus hendrerit vel. Duis varius ac felis sit amet lacinia. Praesent sit amet tempor quam, a consectetur purus. Morbi et eros ultricies, finibus urna vitae, faucibus risus.
            </Text>
            <Flex justifyContent="center" mt={4}>
              <Link href="https://www.linkedin.com/in/katrin-winnen-27436137/" isExternal mx={2}>
                <Icon as={FaLinkedin} w={6} h={6} />
              </Link>
              <Link href="https://github.com/katwinnen" isExternal mx={2}>
                <Icon as={FaGithub} w={6} h={6} />
              </Link>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;

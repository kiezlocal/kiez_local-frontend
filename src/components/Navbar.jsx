import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import {
  Box,
  Flex,
  Button,
  Stack,
  useDisclosure,
  IconButton,
  Collapse,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleLogout = () => {
    logOutUser();
  };

  return (
    <Box>
      <Flex
        bg={"white"}
        color={"gray.600"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} display={{ base: "none", md: "flex" }}>
          <RouterLink to="/">
            <Button variant="ghost">Home</Button>
          </RouterLink>
          <RouterLink to="/kiez">
            <Button variant="ghost">Kiez</Button>
          </RouterLink>
          <RouterLink to="/about">
            <Button variant="ghost">About</Button>
          </RouterLink>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6} display={{ base: "none", md: "flex" }}>
          {isLoggedIn ? (
            <>
              <RouterLink to="/events/addevent">
                <Button variant="ghost">Add Event</Button>
              </RouterLink>
              <Button variant="ghost" onClick={handleLogout}>
                Logout
              </Button>
              <Text>{user && user.name}</Text>
            </>
          ) : (
            <>
              <RouterLink to="/login">
                <Button variant="ghost">Sign In</Button>
              </RouterLink>
              <RouterLink to="/signup">
                <Button color={"white"} bg={"pink.400"} _hover={{ bg: "pink.300" }}>
                  Sign Up
                </Button>
              </RouterLink>
            </>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack bg={"white"} p={4} display={{ md: "none" }}>
          <RouterLink to="/">
            <Button variant="ghost">Home</Button>
          </RouterLink>
          <RouterLink to="/kiez">
            <Button variant="ghost">Kiez</Button>
          </RouterLink>
          <RouterLink to="/about">
            <Button variant="ghost">About</Button>
          </RouterLink>
          {isLoggedIn ? (
            <>
              <RouterLink to="/events/addevent">
                <Button variant="ghost">Add Event</Button>
              </RouterLink>
              <Button variant="ghost" onClick={handleLogout}>
                Logout
              </Button>
              <Text>{user && user.name}</Text>
            </>
          ) : (
            <>
              <RouterLink to="/login">
                <Button variant="ghost">Sign In</Button>
              </RouterLink>
              <RouterLink to="/signup">
                <Button color={"white"} bg={"pink.400"} _hover={{ bg: "pink.300" }}>
                  Sign Up
                </Button>
              </RouterLink>
            </>
          )}
        </Stack>
      </Collapse>
    </Box>
  );
}

export default Navbar;

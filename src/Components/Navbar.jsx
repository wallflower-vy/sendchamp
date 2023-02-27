import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";


import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Flex, Box, Link, Spacer } from "@chakra-ui/react";
import logo from "../Assets/logo.svg";
import { useState } from "react";
import { atom, useRecoilState } from "recoil";
import ProductDropdown from "./ProductDropdown";
import DevelopersDropdown from "./DevelopersDropdown";

const navdropdown = atom({
  key: "navdropdown",
  default: false,
});

const isMobileMenuOpen = atom({
  key: "isMobileMenuOpen",
  default: false,
});

const Navbar = () => {
  const bg = "#0080EF";
  
  const Navbg = "#EDF4FE";

  const [isdropdown, setisdropdown] = useRecoilState(navdropdown);
  const [mobileMenuOpen, setMobileMenuOpen] = useRecoilState(isMobileMenuOpen);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
const handleMenuButtonClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Flex
      as='nav'
      bg={Navbg}
     
      // bg={{ base: {Navbg}, md: {Navbg} }}
    
      py={{ base: 6, md: 7 }}
      px={{ base: 4, md: 28 }}
     
      alignItems='center'
      position='fixed'
      top='0'
      left='0'
      width='100%'
      zIndex ='1000'
      // zIndex={{base:'1000', md:'1000'}}
    >
      <Box flexGrow={1}
      >
        <Link href='#' >
          <img src={logo} alt='logo' />
        </Link>
      </Box>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={handleMenuButtonClick}
      >
        {mobileMenuOpen ? <AiOutlineClose fontSize='2rem'/> : <HiOutlineMenuAlt4 fontSize='2rem' />}
      </Box>

      <Box 
      flexGrow={6 }
      
      display={{ base: mobileMenuOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
       
       
        alignItems="center">
        <Link
          as={Link}
          color='black'
          mr={10}
          fontWeight='normal'
          textDecoration='none'
          _hover={{ textDecoration: "none" }}
          onMouseEnter={() => setisdropdown(true)}
          onMouseLeave={() => setisdropdown(false)}
          fontFamily={'DM Sans'}
        >
          Products
          {isdropdown && <ProductDropdown />}
        </Link>

        <Link
          as={Link}
          color=''
          mr={8}
          textDecoration='none'
          _hover={{ textDecoration: "none" }}
          fontFamily={'DM Sans'}
          
        >
          Developers
         
        </Link>

        <Link
          as={Link}
          color=''
          mr={8}
          textDecoration='none'
          fontFamily={'DM Sans'}
          _hover={{ textDecoration: "none" }}
        >
          Company
        </Link>

        <Link
          as={Link}
          color=''
          mr={8}
          textDecoration='none'
          fontFamily={'DM Sans'}
          _hover={{ textDecoration: "none" }}
        >
          Use Cases
        </Link>

        <Link
          as={Link}
          color=''
          mr={8}
          textDecoration='none'
          fontFamily={'DM Sans'}
          _hover={{ textDecoration: "none" }}
        >
          Pricing
        </Link>
      </Box>
      <Box display={{ base: mobileMenuOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center">
        <Link
          mr={4}
          color='black'
          href='https://my.sendchamp.com/login'
          isExternal
          target='_blank'
          onClick={onOpen}
          textDecoration='none'
          fontFamily={'DM Sans'}
          _hover={{ textDecoration: "none" }}
        >
          Login
        </Link>
        <Button
          mr={4}
          bg='#0179E1'
          color='white'
          px='1.5rem'
          _hover={{ bg: "#2F76B8" }}
        >
          <Link
            href='https://my.sendchamp.com/signup'
            isExternal
            target='_blank'
            textDecoration='none'
            fontFamily={'DM Sans'}
            _hover={{ textDecoration: "none" }}
          >
            Get Started
          </Link>
        </Button>
        <Link
          onClick={onOpen}
          textDecoration='none'
          fontSize='xl'
          fontFamily={'DM Sans'}
          _hover={{ textDecoration: "none" }}
        >
          <b>NG</b>
        </Link>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            h='30rem'
            display='flex'
            justifyContent='center'
            textAlign='center'
            flexFlow='column'
          >
            <ModalCloseButton
              size='lg'
              borderWidth={"0px"}
              color='#0080EF'
              _hover={{ bg: "none" }}
              textDecoration='underline'
              // mt='2rem'
              pr='3rem'
            >
              Cancel
            </ModalCloseButton>

            <ModalBody>
              <Box display='flex' justifyContent='center' mt='5rem'>
                <Box
                  bg='blue.100'
                  width={"6rem"}
                  alignItems={"center"}
                  alignContent={"center"}
                  display='flex'
                  justifyContent={"center"}
                  borderRadius={"50%"}
                  height={"6rem"}
                >
                  <BiMessageDetail fontSize={"3rem"} color='white' />
                </Box>
              </Box>

              <Box mt='1rem'>
                <Text>Country Preference</Text>
              </Box>
              <Box>
                <Text color='blue.100'>
                  Kindly choose your preferred country from the options below
                </Text>
              </Box>

              <FormControl>
                <FormLabel>COUNTRY</FormLabel>
                <Select></Select>
              </FormControl>
              <Button colorScheme='blue' w='100%' mt='3rem' isDisabled>
                Update preference
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
};

export default Navbar;

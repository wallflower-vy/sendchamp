import React, { useEffect } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { RiVoiceRecognitionFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const PricingCard = () => {
  useEffect(()=>{
    Aos.init({})
}, [])
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = "#0080EF";
  return (
    <Box as='section' px={32} mt={"-5rem"} data-aos="fade-up" data-aos-duration="1000">
      <Grid 
       
       templateColumns='repeat(3, 1fr)'
        gap={8}>
        <Card
          
          borderColor={"#99CCF8"}
         
          maxW={{base:'full', md:'lg'}}
          borderWidth='1px'
          pt={"30px"}
          borderRadius='1REM'
        >
          <CardBody p='2rem'>
            <Box
              bg={bg}
              width={{md:"4rem"}}
              alignItems={"center"}
              alignContent={"center"}
              display='flex'
              justifyContent={"center"}
              borderRadius={"10px"}
              height={"4rem"}
            >
              <BiMessageDetail fontSize={"2rem"} color='white' />
            </Box>
            <Stack mt='6' spacing='3'>
              <Heading size='sm' mb='1rem'>
                SMS
              </Heading>
              <Box
                display='flex'
                flexFlow={"row"}
                fontSize='lg'
                justifyContent={"space-between"}
              >
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>To send sms</Text>
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>To Receive SMS</Text>
              </Box>
              <Box
                display='flex'
                mt='2rem'
                flexFlow={"row"}
                fontSize='lg'
                justifyContent={"space-between"}
              >
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>
                  <b>NGN 3.0870/</b>sms
                </Text>
                <Box
                  bg='#EBF5FE'
                  color='#43A1F3'
                  borderRadius='15px'
                  
                  px='1rem'
                  fontFamily={'DM Sans'} fontSize={'12px'} fontWeight='normal'
                >
                  coming soon
                </Box>
              </Box>
            </Stack>
          </CardBody>
          <Divider bg={"#99CCF8"} mt='1rem' />
          <CardFooter
            alignItems={"center"}
            display='flex'
            justifyContent={"center"}
            _hover={{ bg: "#D8F4FF" }}
          >
            <Link
              fontSize='2xl'
              fontWeight={"bold"}
              color='#2270B6'
              textDecoration='underline'
              onClick={onOpen}
            >
              More details
            </Link>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>hekko</ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </CardFooter>
        </Card>
        <Card
          maxW='lg'
          borderColor={"#99CCF8"}
          borderWidth='1px'
          pt={"30px"}
          borderRadius='1REM'
        >
          <CardBody p='2rem'>
            <Box
              bg={bg}
              width={"4rem"}
              alignItems={"center"}
              alignContent={"center"}
              display='flex'
              justifyContent={"center"}
              borderRadius={"10px"}
              height={"4rem"}
            >
              <RiVoiceRecognitionFill fontSize={"2rem"} color='white' />
            </Box>
            <Stack mt='6' spacing='3'>
              <Heading size='sm' mb='1rem'>
                Voice
              </Heading>
              <Box
                display='flex'
                flexFlow={"row"}
                fontSize='lg'
                justifyContent={"space-between"}
              >
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>To make calls</Text>
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>To Receive Calls</Text>
              </Box>
              <Box
                display='flex'
                mt='2rem'
                flexFlow={"row"}
                fontSize='lg'
                justifyContent={"space-between"}
              >
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>
                  <b>NGN 84.0000/</b>sec
                </Text>
                <Box
                  bg='#EBF5FE'
                  color='#43A1F3'
                  borderRadius='15px'
                  px='1rem'
                  fontFamily={'DM Sans'} fontSize={'12px'} fontWeight='normal'
                >
                  coming soon
                </Box>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Card
          maxW='lg'
          borderColor={"#99CCF8"}
          borderWidth='1px'
          pt={"30px"}
          borderRadius='1REM'
        >
          <CardBody p='2rem'>
            <Box
              bg={bg}
              width={"4rem"}
              alignItems={"center"}
              alignContent={"center"}
              display='flex'
              justifyContent={"center"}
              borderRadius={"10px"}
              height={"4rem"}
            >
              <MdOutlineMail fontSize={"2rem"} color='white' />
            </Box>
            <Stack mt='6' spacing='3'>
              <Heading size='sm' mb='1rem'>
                Email
              </Heading>
              <Box>
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>Price Per Mail</Text>
              </Box>
              <Box>
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>
                  <b>NGN 0.7000/</b>email
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Card
          maxW='lg'
          borderColor={"#99CCF8"}
          borderWidth='1px'
          pt={"30px"}
          borderRadius='1REM'
        >
          <CardBody p='2rem'>
            <Box
              bg={bg}
              width={"4rem"}
              alignItems={"center"}
              alignContent={"center"}
              display='flex'
              justifyContent={"center"}
              borderRadius={"10px"}
              height={"4rem"}
            >
              <BsWhatsapp fontSize={"2rem"} color='white' />
            </Box>
            <Stack mt='6' spacing='3'>
              <Heading size='sm' mb='1rem'>
                Whatsapp
              </Heading>
              <Box
                display='flex'
                flexFlow={"row"}
                fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'
                justifyContent={"space-between"}
              >
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>To Send Message</Text>
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>To Receive Message</Text>
              </Box>
              <Box
                display='flex'
                mt='2rem'
                flexFlow={"row"}
                fontSize='lg'
                justifyContent={"space-between"}
              >
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>
                  <b>NGN 3.5000/</b>msg
                </Text>
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>
                  <b>NGN 0.0000/</b>msg
                </Text>
              </Box>
            </Stack>
          </CardBody>
          <Divider bg={"#99CCF8"} mt='1rem' />
          <CardFooter
            alignItems={"center"}
            display='flex'
            justifyContent={"center"}
            _hover={{ bg: "#D8F4FF" }}
          >
            <Link
              fontSize='2xl'
              fontWeight={"bold"}
              color='#2270B6'
              textDecoration='underline'
              onClick={onOpen}
              fontFamily={'DM Sans'} 
            >
              More details
            </Link>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent pb='1rem'> 
                <ModalHeader>
                  <Box
                    bg={bg}
                    width={"2rem"}
                    alignItems={"center"}
                    alignContent={"center"}
                    display='flex'
                    justifyContent={"center"}
                    borderRadius={"10px"}
                    height={"2rem"}
                  >
                    <BsWhatsapp fontSize={"1rem"} color='white' />
                  </Box>
                </ModalHeader>
                <ModalCloseButton  />
                <Divider  />
                <ModalBody>
                  <Box
                    display='flex'
                    mt='2rem'
                    flexFlow={"row"}
                    fontSize='lg'
                    justifyContent={"space-between"}
                  >
                    <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>To Send Message</Text>
                    <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>To Receive Message</Text>
                  </Box>
                  <Box bg='#EDF4FE' display='flex' mt='1rem' px='1rem' py='1rem' justifyContent='space-between' alignItems='center'>
                    <Box>
                      <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>Starts at</Text>
                      <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>
                        <b>NGN 3.0870/sms</b>
                      </Text>
                    </Box>
                    <Box >
                      <Text bg='#DAEBFD' color='#3198F2' px='1rem' borderRadius='15px' >coming soon</Text>
                    </Box>
                  </Box>
                </ModalBody>
              </ModalContent>
            </Modal>
          </CardFooter>
        </Card>
        <Card
          maxW='lg'
          borderColor={"#99CCF8"}
          borderWidth='1px'
          pt={"30px"}
          borderRadius='1REM'
        >
          <CardBody p='2rem'>
            <Box
              bg={bg}
              width={"4rem"}
              alignItems={"center"}
              alignContent={"center"}
              display='flex'
              justifyContent={"center"}
              borderRadius={"10px"}
              height={"4rem"}
            >
              <MdVerified fontSize={"2rem"} color='white' />
            </Box>
            <Stack mt='6' spacing='3'>
              <Heading size='sm' mb='1rem'>
                Verification
              </Heading>
              <Box
                display='flex'
                flexFlow={"row"}
                fontSize='lg'
                justifyContent={"space-between"}
              >
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>To Send OTP</Text>
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>To Confirm OTP</Text>
              </Box>
              <Box
                display='flex'
                flexFlow={"row"}
                fontSize='lg'
                justifyContent={"space-between"}
              >
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>
                  <b>NGN 0.0000/</b>OTP
                </Text>
                <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>
                  <b>NGN 0.7000/</b>OTP
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
};

export default PricingCard;

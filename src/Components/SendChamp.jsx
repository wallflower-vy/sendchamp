import { Box, Button, Heading, Link, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const SendChamp = () => {
  useEffect(()=>{
    Aos.init({})
}, [])
    const bannerbg = "#EDF4FE";
  return (
    <Box mt={'5rem'} bg={bannerbg } pt={{base:'5rem',md:'10rem'}} pb={{base:'5rem', md:'8rem'}} px={{base:'3rem', md:'0rem'}} data-aos="fade-up" data-aos-duration="1000">
        <Box>
        <Heading  alignItems='center' textAlign={'center'} fontWeight='bold' fontSize={{base:'3xl', md:'4xl'}} lineHeight={{base:'35px', md:'52px'}}>Sendchamp for Startups</Heading>
        <Box  bg={ bannerbg}  display="flex"   justifyContent="center" alignItems="center"pt={'25px'} >
        <Box width={{base:'100%', md:'42%'}} textAlign={'center'}>
        <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>Apply for $1,000 in credits, if you are a startup that is less than 3 years old with less than $500k in total funding.</Text>
        <Button bg={'#0080EF'} color='white' p='1.8rem' mt='3rem' _hover={{ bg:'#2F77B9', textDecoration:'none' }}>
        <Link href="https://airtable.com/shrvcl4oFnrTA7T7N" isExternal target="_blank">
        Apply Now
      </Link>
            </Button>
        </Box>
        </Box>
    </Box>
   
    </Box>
  )
}

export default SendChamp

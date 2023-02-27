import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const BannerComponent = () => {
    const bannerbg = "#EDF4FE";

  return (
   <Box >
     <Box bg={ bannerbg} pt={{base:'10rem', md:'12rem'}}  px={{base:'3rem', md:'0'}} >
      <Heading alignItems='center' textAlign={'center'} color='black' fontWeight='semibold'  fontSize={{base:'2rem', md:'3rem'}} lineHeight={{base:'35px', md:'52px'}}>Pricing for every business</Heading>
    </Box>
    <Box  bg={ bannerbg}  display="flex"   justifyContent="center" alignItems="center"pt={'25px'} >
        <Box width={{base:'100%', md:'42%'}} px={{base:'2rem', md:'0rem'}} textAlign={'center'}>
        <Text fontSize={'lg'}  fontWeight={'normal'} fontFamily={'DM Sans'}>No hidden fees or charges - simple & flexible pricing that fits with your business at any stage.</Text>
        </Box>
    </Box>
    
   </Box>
  )
}

export default BannerComponent

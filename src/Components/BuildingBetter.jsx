import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const BuildingBetter=()=>{
    useEffect(()=>{
        Aos.init({})
    }, [])
    return(
        <div>
            <Box  py={{base:'20px', md:'40px'}} data-aos="fade-up" data-aos-duration="1200">
        <Box mt={{base:'2rem', md:'5rem'}}>
        <Box display="flex"   justifyContent="center" alignItems="center"pt={'25px'}>
            <Box width={{base:'80%', md:'42%'}} textAlign={'center'}><Heading  alignItems='center' textAlign={'center'} fontWeight='semibold' fontSize={{base:'2xl',md:'4xl'}} lineHeight={{base:'30px', md:'52px'}}>Start building better communication experience with Sendchamp</Heading></Box>
       </Box>
        <Box    display="flex"   justifyContent="center" alignItems="center"pt={'25px'} >
        <Box width={{base:'100%', md:'40%'}} textAlign={'center'} px={{base:'2rem', md:'0rem'}}>
        <Text fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>Access a platform that is modernizing communications and making it possible for your customers to communicate with your business the same way they do with their friends and family.</Text>
        
        </Box>
        </Box>
       <Flex gap={'10PX'} justifyContent={'center'} mt={'3rem'}>
       <Button bg={'#0080EF'} color='white' p={'2rem'} _hover={{ bg:'#2F77B9', textDecoration:'none' }} fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>
       <Link href="https://my.sendchamp.com/signup" isExternal target="_blank">
        Start for free
        </Link>
        </Button>
        <Button color={'grey.300'} p={'2rem'} bg={'transparent'} borderColor={'black'} borderWidth='1px' fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>
        <Link href="https://calendly.com/sc-sales-team/" isExternal target="_blank">
        Talk to Sales
        </Link>
            
            </Button>
       </Flex>
    </Box>
   
    </Box>
        </div>
    )

}

export default BuildingBetter;
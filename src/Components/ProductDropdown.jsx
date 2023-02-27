import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import {MdOutlineStarRate} from 'react-icons/md'
import {MdOutlineVerified} from 'react-icons/md'


const ProductDropdown = () => {
    const bannerbg = "#EDF4FE";

  return (
    <Box color='white' position='absolute' width='35rem'mt='1rem' height='30rem' display='flex' boxShadow={'1px 2px 4px grey'} >
        <Box height='30rem' width='50%' p='1.5rem' bg={'white'}>
            <Text color='gray.500'>CHANNELS</Text>
            <Box display='flex' my='1rem' color='grey.500'  gap='3'> 
                <BiMessageSquareDetail  color='black' fontSize='3rem'/>
                    <Box>
                    <Text fontSize='14px' color='black'>SMS</Text>
                <Text color='black' fontSize='14px'>send sms seamlessly at the best rate via the best route to your customers</Text>
                    </Box>
            </Box>
            <Box display='flex' my='1rem' color='grey.500'  gap='3'> 
                < MdOutlineMarkEmailUnread  color='black' fontSize='3rem'/>
                    <Box>
                    <Text fontSize='14px' color='black'>Email</Text>
                <Text color='black' fontSize='14px'>send sms seamlessly at the best rate via the best route to your customers</Text>
                    </Box>
                    
            </Box>
            <Box display='flex' my='1rem' color='grey.500'  gap='3'> 
                <AiOutlineWhatsApp  color='black' fontSize='3rem'/>
                    <Box>
                    <Text fontSize='14px' color='black'>Whatsapp</Text>
                <Text color='black' fontSize='14px'>send sms seamlessly at the best rate via the best route to your customers</Text>
                    </Box>
            </Box>
            <Box display='flex' my='1rem' color='grey.500'  gap='3'> 
                <FiPhoneCall color='black' fontSize='3rem'/>
                    <Box>
                    <Text fontSize='14px' color='black'>Voice</Text>
                <Text color='black' fontSize='14px'>send sms seamlessly at the best rate via the best route to your customers</Text>
                    </Box>
            </Box>
        </Box>
        <Box bg={bannerbg} height='30rem' width='50%'  p='1.5rem'>
        <Text>SERVICES</Text>
        <Box display='flex' my='1rem' color='grey.500'  gap='3'> 
                <MdOutlineStarRate  color='black' fontSize='3rem'/>
                    <Box>
                    <Text fontSize='14px' color='black'>Marketing</Text>
                <Text color='black' fontSize='14px'>send sms seamlessly at the best rate via the best route to your customers</Text>
                    </Box>
            </Box>
                    <Box display='flex' mt='1rem' color='grey.500'  gap='3' alignItems='center'> 
            
                    <MdOutlineVerified  color='black' fontSize='1.5rem'/>
                    <Text fontSize='14px' color='black'>Verification</Text>
               
                    </Box>
                <Text color='black' fontSize='14px'>send sms seamlessly at the best rate via the best route to your customers</Text>
                   
               
                    
            </Box>
        </Box>
    
  )
}

export default ProductDropdown

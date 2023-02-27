import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import logowhite from "../Assets/logo-white.svg";
import nigeria from "../Assets/nigeria.svg";
import usa from "../Assets/usa.svg";
import React from "react";

const Footer = () => {
  

  return (
    <Box bg={"#00263F"} pb='2rem'  px={{base:'3rem',md:"10rem"}} pt={"5rem"} mt={"8rem"}>
      <Flex>
        <Grid templateColumns='repeat(6, 1fr)' gap={12}>
          <Box>
            <Text color='white' opacity={".7"} mb='1rem' fontSize='lg'>
              Products
            </Text>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              mb='.5rem'
              fontSize={{base:'14px', md:'16px'}}
              _hover={{ color: "white", opacity: ".5" }}
            >
              Channels / Router
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              mb='.5rem'
              fontSize={{base:'14px', md:'16px'}}
              _hover={{ color: "white", opacity: ".5" }}
            >
              Verification
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              _hover={{ color: "white", opacity: ".5" }}
            >
              No-Code Tools
            </Link>
          </Box>
          <Box>
            <Text color='white' opacity={".7"} mb='1rem' fontSize='lg'>
              Solutions
            </Text>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              mb='.5rem'
              fontSize={{base:'14px', md:'16px'}}
              _hover={{ color: "white", opacity: ".5" }}
            >
              Onboard
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              Engage
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              Support
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              Retain
            </Link>
          </Box>
          <Box>
            <Text color='white' opacity={".7"} mb='1rem' fontSize='lg'>
              Resources
            </Text>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              Developers
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              API Reference
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              Guides
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              mb='.5rem'
              fontSize={{base:'14px', md:'16px'}}
              _hover={{ color: "white", opacity: ".5" }}
            >
              SDKs/Libaries
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              Communities
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              Status Page
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              Pricing
            </Link>
          </Box>
          <Box>
            <Text color='white' opacity={".7"} mb='1rem' fontSize='lg'>
              Company
            </Text>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              About us
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              Our Stories
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              mb='.5rem'
              fontSize={{base:'14px', md:'16px'}}
              _hover={{ color: "white", opacity: ".5" }}
            >
              Careers
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              mb='.5rem'
              fontSize={{base:'14px', md:'16px'}}
              _hover={{ color: "white", opacity: ".5" }}
            >
              Contact
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              mb='.5rem'
              fontSize={{base:'14px', md:'16px'}}
              _hover={{ color: "white", opacity: ".5" }}
            >
              Terms of Use
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              mb='.5rem'
              fontSize={{base:'14px', md:'16px'}}
              _hover={{ color: "white", opacity: ".5" }}
            >
              Privacy
            </Link>
          </Box>
          <Box>
            <Text color='white' opacity={".7"} mb='1rem' fontSize='lg'>
              Follow us
            </Text>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              Twitter
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              mb='.5rem'
              fontSize={{base:'14px', md:'16px'}}
              _hover={{ color: "white", opacity: ".5" }}
            >
              Linked in
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              Facebook
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
              fontSize={{base:'14px', md:'16px'}}
            >
              Instagram
            </Link>
          </Box>
          <Box>
            <Text color='white' opacity={".7"} mb='1rem' fontSize='lg'>
              Contact us
            </Text>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              +234(0)18880261
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              sales@sendchamp.com
            </Link>
            <Link
              color='white'
              opacity={"1"}
              display='block'
              fontSize={{base:'14px', md:'16px'}}
              mb='.5rem'
              _hover={{ color: "white", opacity: ".5" }}
            >
              help@sendchamp.com
            </Link>
          </Box>
        </Grid>
      </Flex>
      <Divider bg='white' mt={{base:'3rem', md:'4rem'}} />
      <Box py={{base:'1rem', md:'4rem'}}  display='flex' flexFlow={{base:'column', md:'row'}} justifyContent={"space-between"}>
        <Box >
          <img src={logowhite} alt='logo-white'  />
        </Box>
        <Box display='flex' gap='3'>
          <img src={nigeria} alt='nigeria' display={{base:'none'}}/>
          <Text color='white' fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>
            142, Ahmadu Bello Way, Victoria Island, Lagos, Nigeria
          </Text>
        </Box>
        <Box display='flex' gap='3'>
          <img src={usa} alt='usa'  display={{base:'none', md:'inline'}}/>
          <Text color='white' fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>
            2055 Limestone Rd STE 200-C Wilmington, DE 19808
          </Text>
        </Box>
      </Box>
      <Divider bg='white' />
      <Box mt='15px'>
        <Text textAlign='center' color='white' opacity='.5'  fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'>
          Built with ❤️ at Sendchamp Inc. - © 2023 | All rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;

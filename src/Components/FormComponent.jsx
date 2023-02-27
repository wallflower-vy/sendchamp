import { Box, Container, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import axios from "axios";


const selectcountry = atom({
  key: "selectcountry",
  default: [],
});
const FormComponent = () => {
  const bannerbg = "#EDF4FE";
  const border = "#99CCF8";

  const [countries, setCountries] = useRecoilState(selectcountry);;
  
  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    }
    fetchCountries();
  }, []);

  

  return (
    <Box bg={bannerbg} pt={"60px"} pb='7rem' position={"relative"}>
      <Box
        display='flex'
        flexFlow={{ base: "column", md: "row" }}
        alignItems={{ base: "center" }}
        gap='20px'
        justifyContent='center'
      >
        <Box>
          <Select
            placement='bottom-start'
            placeholder='Nigeria'
            borderColor='blue.100'
            borderWidth='1px'
            height={"65px"}
            width='310px'
           
            bg='white'
            fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'
          >
            {countries.map((country) => (
              <option
                key={country.cca2}
                value={country.name.common}
                color='red'
              >
                {country.name.common}
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <Select
            placement='bottom-start'
            placeholder='United Arab Emirate...'
            borderColor='blue.100'
            borderWidth='1px'
            height={"65px"}
            width='310px'
            
            bg='white'
            fontFamily={'DM Sans'} fontSize={'16px'} fontWeight='normal'
          >
            {countries.map((country) => (
              <option key={country.cca2} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default FormComponent;

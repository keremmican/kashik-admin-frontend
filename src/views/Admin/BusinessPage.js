import {
  Box,
  Button,
  Flex,
  FormControl, FormHelperText,
  FormLabel,
  Grid,
  Input, InputGroup, InputLeftAddon, Select,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import React, { useState } from "react";
import signInImage from "assets/img/dikey.png";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL;

export default function BusinessPage() {
  const titleColor = useColorModeValue("orange.300", "orange.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("orange.200", "rgba(255, 255, 255, 0.5)");

  const commonCountryCodes = [
    "+1",   // United States
    "+44",  // United Kingdom
    "+91",  // India
    "+86",  // China
    "+81",  // Japan
    "+49",  // Germany
    "+33",  // France
    "+39",  // Italy
    "+34",  // Spain
    "+7",   // Russia
    "+61",  // Australia
    "+82",  // South Korea
    "+55",  // Brazil
    "+52",  // Mexico
    "+880", // Bangladesh
    "+234", // Nigeria
    "+20",  // Egypt
    "+251", // Ethiopia
    "+98",  // Iran
    "+62",  // Indonesia
    "+962", // Jordan
    "+254", // Kenya
    "+60",  // Malaysia
    "+212", // Morocco
    "+977", // Nepal
    "+92",  // Pakistan
    "+63",  // Philippines
    "+48",  // Poland
    "+966", // Saudi Arabia
    "+65",  // Singapore
    "+27",  // South Africa
    "+94",  // Sri Lanka
    "+66",  // Thailand
    "+216", // Tunisia
    "+90",  // Turkey
    "+256", // Uganda
    "+380", // Ukraine
    "+971", // United Arab Emirates
    "+84",  // Vietnam
  ];

  const categories = [
    "Fast Food Establishment",
    "Cafe",
    "Bar",
    "Bakery",
    "Dessert Shop",
    "Coffee Shop",
    "Food Truck",
    "Pub and Grill",
    "Pizzeria",
    "Seafood Restaurant",
    "Steak House",
    "Vegan and Vegetarian Restaurant",
    "Buffet",
    "Ice Cream Parlor",
    "Winery/Brewery",
  ];

  const [formData, setFormData] = useState({
    venueName: '',
    email: '',
    address: '',
    phoneNumber: '',
    category: '',
    websiteUrl: '',
  });

  const [code, setCode] = useState(commonCountryCodes[0]);

  const handleCountryCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const numericRegex = /^[0-9]*$/;
    if (!numericRegex.test(e.target.value)) {
      return;
    }
    setFormData({ ...formData, phoneNumber: e.target.value });
  };

  const handleApply = () => {
    try {
      axios.post(BASE_URL + "/auth/restaurant-application", formData)
    } catch (e) {
      console.log("başarısız")
    }

  }

  return(
    <div>
      <Flex
        direction='column'
        alignSelf='center'
        justifySelf='center'
        overflow='hidden'>
        <Flex alignItems='center' justifyContent='center' mb='30px' mt='20px'>

          <Flex
            direction='column'
            w='700px'
            background='transparent'
            borderRadius='15px'
            p='40px'>

            <Text>sa</Text>
          </Flex>

          <Flex
            direction='column'
            w='500px'
            background='transparent'
            borderRadius='15px'
            p='30px'
            mx={{ base: "100px" }}
            bg={bgColor}
            mt="6rem"
            boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>

            <VStack>
              <Text fontSize='3xl' fontWeight='bold' mb="14px">
                Get started!
              </Text>
              <FormControl>
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  What’s your main venue name?
                </FormLabel>
                <Input
                  fontSize='sm'
                  ms='4px'
                  borderRadius='15px'
                  type='email'
                  placeholder='Your venue name'
                  mb='24px'
                  size='lg'
                  onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                />

                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  What’s your email address?
                </FormLabel>
                <Input
                  fontSize='sm'
                  ms='4px'
                  borderRadius='15px'
                  type='email'
                  placeholder='Your email address'
                  mb='24px'
                  size='lg'
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  What's your address?
                </FormLabel>
                <Input
                  fontSize='sm'
                  ms='4px'
                  borderRadius='15px'
                  type='email'
                  placeholder='Your address'
                  mb='24px'
                  size='lg'
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />

                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  What’s your contactable phone number?
                </FormLabel>
                <InputGroup ms='4px' mb='24px' >
                  <InputLeftAddon>
                    <Select
                      value={code}
                      fontSize="sm"
                      onChange={handleCountryCodeChange}
                    >
                      {commonCountryCodes.map((code) => (
                        <option key={code} value={code}>
                          {code}
                        </option>
                      ))}
                    </Select>
                  </InputLeftAddon>
                  <Input fontSize='sm' type='tel' placeholder='Your phone number' borderRadius='15px' inputMode="numeric" // Yalnızca sayı girişini sağlamak için "numeric" kullanıyoruz
                         pattern="[0-9]*"
                         value={formData.phoneNumber}
                         onChange={handlePhoneNumberChange}/>
                </InputGroup>

                {/*<FormLabel ms='4px' fontSize='sm' fontWeight='normal'>*/}
                {/*  What's your website url?{" "}*/}
                {/*  <FormHelperText as="span" color="gray.600">*/}
                {/*    (optional)*/}
                {/*  </FormHelperText>*/}
                {/*</FormLabel>*/}
                {/*<Input*/}
                {/*  fontSize='sm'*/}
                {/*  ms='4px'*/}
                {/*  borderRadius='15px'*/}
                {/*  type='email'*/}
                {/*  placeholder='Your website url'*/}
                {/*  mb='24px'*/}
                {/*  size='lg'*/}
                {/*  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}*/}
                {/*/>*/}

                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  What’s the category?
                </FormLabel>
                <Select ms='4px' mb='24px' placeholder='Your category' borderRadius='15px' fontSize='sm'
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                  {categories.map((category) => <option value={category}> {category} </option>)}
                </Select>
              </FormControl>
            </VStack>

            <Button
              type='submit'
              bg='orange.300'
              fontSize='15px'
              color='white'
              fontWeight='bold'
              w='100%'
              h='45'
              mb='24px'
              _hover={{
                bg: "orange",
              }}
              _active={{
                bg: "orange",
              }}

              onClick={handleApply}
            >
              APPLY
            </Button>
          </Flex>
          </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='90%'
          w='45vw'
          zIndex="-1"
          position='absolute'
          >
          <Box
            bgImage={signInImage}
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            borderBottomLeftRadius='20px'></Box>
        </Box>
        </Flex>
    </div>
  )
}
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
import React, {useEffect, useState} from "react";
import signInImage from "assets/img/dikey.png";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import store from "../../store";

const BASE_URL = process.env.REACT_APP_URL;

export default function BusinessPage() {
  const titleColor = useColorModeValue("orange.300", "orange.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("orange.200", "rgba(255, 255, 255, 0.5)");

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

  useEffect(() => {
    console.log(store.getState().auth.userRole)
  }, []);

  const [formData, setFormData] = useState({
    venueName: '',
    email: '',
    address: '',
    phoneNumber: '',
    category: '',
    websiteUrl: '',
  });

  const handleApply = () => {
    try {
      console.log(formData)
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
                  What's your name?
                </FormLabel>
                <Input
                  fontSize='sm'
                  ms='4px'
                  borderRadius='15px'
                  type='email'
                  placeholder='Your name'
                  mb='24px'
                  size='lg'
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />

                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  What’s your contactable phone number?
                </FormLabel>
                <PhoneInput country={'tr'}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e })}
                />

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
                  {categories.map((category, key) => <option key={key} value={category}> {category} </option>)}
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
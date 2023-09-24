import {
  Box,
  Button,
  Flex,
  FormControl, FormHelperText,
  FormLabel,
  Grid,
  Input,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import signInImage from "../../assets/img/dikey.png";
import axios from "axios";
import 'react-phone-input-2/lib/style.css'
import store from "../../store";
import {setAccessToken, setIsLoggedIn, setRefreshToken, setUserId, setUserRole} from "../../store/actions/authActions";

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
    companyName: '',
    email: '',
    name: '',
    username: '',
    password: '',
    pwdConfirm: '',
  });

  const handleApply = async () => {
    try {
      if (formData.password !== formData.pwdConfirm) {
        return
      }

      const response = await axios.post(BASE_URL + "/auth/owner-register", formData, {withCredentials: true})

      const {access_token, refresh_token, userId, role} = response.data;
      store.dispatch(setUserId(userId))
      store.dispatch(setAccessToken(access_token))
      store.dispatch(setRefreshToken(refresh_token))
      store.dispatch(setUserRole(role))
      store.dispatch(setIsLoggedIn(true))

      window.location.href = '/owner/dashboard'
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
                  Company name
                </FormLabel>
                <Input
                  fontSize='sm'
                  ms='4px'
                  borderRadius='15px'
                  type='email'
                  placeholder='Your company name'
                  mb='24px'
                  size='lg'
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                      handleApply();
                    }
                  }}
                />

                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Email address
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
                  onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                      handleApply();
                    }
                  }}
                />

                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Name
                </FormLabel>
                <Input
                  fontSize='sm'
                  ms='4px'
                  borderRadius='15px'
                  type='email'
                  placeholder='Your name'
                  mb='24px'
                  size='lg'
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                      handleApply();
                    }
                  }}
                />

                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Username
                </FormLabel>
                {/*<PhoneInput country={'tr'}*/}
                {/*            onChange={(e) => setFormData({ ...formData, phoneNumber: e })}*/}
                {/*/>*/}

                <Input
                    fontSize='sm'
                    ms='4px'
                    borderRadius='15px'
                    type='email'
                    placeholder='Your number'
                    mb='24px'
                    size='lg'
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    onKeyUp={(e) => {
                      if (e.keyCode === 13) {
                        handleApply();
                      }
                    }}
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

                {/*<FormLabel ms='4px' fontSize='sm' fontWeight='normal'>*/}
                {/*  What’s the category?*/}
                {/*</FormLabel>*/}
                {/*<Select ms='4px' mb='24px' placeholder='Your category' borderRadius='15px' fontSize='sm'*/}
                {/*        onChange={(e) => setFormData({ ...formData, category: e.target.value })}>*/}
                {/*  {categories.map((category, key) => <option key={key} value={category}> {category} </option>)}*/}
                {/*</Select>*/}

                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Password
                </FormLabel>
                <Input
                    fontSize='sm'
                    ms='4px'
                    borderRadius='15px'
                    type='email'
                    placeholder='Your password'
                    mb='24px'
                    size='lg'
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    onKeyUp={(e) => {
                      if (e.keyCode === 13) {
                        handleApply();
                      }
                    }}
                />

                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Confirm password
                </FormLabel>
                <Input
                    fontSize='sm'
                    ms='4px'
                    borderRadius='15px'
                    type='email'
                    placeholder='Confirm password'
                    mb='24px'
                    size='lg'
                    onChange={(e) => setFormData({ ...formData, pwdConfirm: e.target.value })}
                    onKeyUp={(e) => {
                      if (e.keyCode === 13) {
                        handleApply();
                      }
                    }}
                />
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
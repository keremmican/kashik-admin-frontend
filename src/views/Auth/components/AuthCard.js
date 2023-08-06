import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon, Input,
  Link, Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text, useColorModeValue, VStack
} from "@chakra-ui/react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";

const BASE_URL = process.env.REACT_APP_URL

export default function AuthCard() {
  const history = useHistory();

  const titleColor = useColorModeValue("orange.300", "orange.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("orange.200", "rgba(255, 255, 255, 0.5)");

  const [currentPage, setCurrentPage] = useState("home");

  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  function setSecureCookie(name, value, expirationDays) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);

    // Check if the application is running on a secure context (HTTPS)
    const isSecureContext = window.location.protocol === 'https:';

    let cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; path=/';

    // Set the cookie domain based on localhost (without specifying port)
    const cookieDomain = window.location.hostname;
    cookieValue += '; domain=' + cookieDomain;

    if (isSecureContext) {
      cookieValue += '; Secure';
    }

    document.cookie = name + '=' + cookieValue;
  }


  const handleLogin = async () => {
    try {
      const loginResponse = await axios.post(`${BASE_URL}/auth/authenticate`, {
        email: email,
        password: pwd
      });

      const { access_token, refresh_token } = loginResponse.data;

      // Store the tokens in cookies
      setSecureCookie('access_token', access_token, 1); // 1 day expiration
      setSecureCookie('refresh_token', refresh_token, 7); // 7 days expiration

      console.log('Login successful!');
      console.log('Access Token:', access_token);
      console.log('Refresh Token:', refresh_token);

      window.location.href = '/admin/dashboard'
    } catch (e) {
      console.log('Login error:', e.message);
    }
  };



  const signUp = async () => {

    const api = axios.create({
      baseURL: BASE_URL,
      withCredentials: true, // Enable sending cookies with the request
    });
    try {
      api.get('/auth/test')
        .then((response) => {
          // Handle the response
          console.log(response.data); // If HttpOnly cookie exists, it will log the success message
        })
        .catch((error) => {
          // Handle errors
          console.error(error); // If HttpOnly cookie is not found, it will log the error message
        });
    } catch (e) {
      console.log("sign up error")
    }
  }

  return(
    <>
      {currentPage === "home" && (
        <Flex
          direction='column'
          alignSelf='center'
          justifySelf='center'
          overflow='hidden'>

          <Flex alignItems='center' justifyContent='center' direction='column' mt='8rem'>

            <Flex
              direction='column'
              alignSelf='center'
              justifySelf='center'
              overflow='hidden'>

              <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
                <Flex
                  direction='column'
                  w='445px'
                  background='transparent'
                  borderRadius='15px'
                  p='40px'
                  mx={{ base: "100px" }}
                  bg={bgColor}
                  boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
                  <Tabs>
                    <TabList ml={10}>
                      <Tab
                        _selected={{ borderColor: 'orange', boxShadow: 'none' }}
                      >
                        Sign in
                      </Tab>
                      <Tab
                        _selected={{ borderColor: 'orange', boxShadow: 'none' }}
                      >
                        Sign up
                      </Tab>
                      <Tab
                        _selected={{ borderColor: 'orange', boxShadow: 'none' }}
                      >
                        Join us
                      </Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <Text
                          fontSize='xl'
                          color={textColor}
                          fontWeight='bold'
                          textAlign='center'
                          mb='22px'>
                          Sign in with
                        </Text>
                        <HStack spacing='15px' justify='center' mb='22px'>
                          <Flex
                            justify='center'
                            align='center'
                            w='60px'
                            h='60px'
                            borderRadius='15px'
                            border='1px solid lightgray'
                            cursor='pointer'
                            transition='all .25s ease'
                            _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
                            <Link href='#'>
                              <Icon
                                as={FaFacebook}
                                w='30px'
                                h='30px'
                                _hover={{ filter: "brightness(120%)" }}
                              />
                            </Link>
                          </Flex>
                          <Flex
                            justify='center'
                            align='center'
                            w='60px'
                            h='60px'
                            borderRadius='15px'
                            border='1px solid lightgray'
                            cursor='pointer'
                            transition='all .25s ease'
                            _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
                            <Link href='#'>
                              <Icon
                                as={FaApple}
                                w='30px'
                                h='30px'
                                _hover={{ filter: "brightness(120%)" }}
                              />
                            </Link>
                          </Flex>
                          <Flex
                            justify='center'
                            align='center'
                            w='60px'
                            h='60px'
                            borderRadius='15px'
                            border='1px solid lightgray'
                            cursor='pointer'
                            transition='all .25s ease'
                            _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
                            <Link href='#'>
                              <Icon
                                as={FaGoogle}
                                w='30px'
                                h='30px'
                                _hover={{ filter: "brightness(120%)" }}
                              />
                            </Link>
                          </Flex>
                        </HStack>
                        <Text
                          fontSize='lg'
                          color='gray.400'
                          fontWeight='bold'
                          textAlign='center'
                          mb='22px'>
                          or
                        </Text>
                        <FormControl>

                          <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                            Email
                          </FormLabel>
                          <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='email'
                            placeholder='Your email address'
                            mb='24px'
                            size='lg'
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                            Password
                          </FormLabel>
                          <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='password'
                            placeholder='Your password'
                            mb='24px'
                            size='lg'
                            onChange={(e) => setPwd(e.target.value)}
                          />
                          <FormControl display='flex' alignItems='center' mb='24px'>
                            <Switch id='remember-login' colorScheme='orange' me='10px' />
                            <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                              Remember me
                            </FormLabel>
                          </FormControl>
                          <Button
                            type='submit'
                            bg='orange.300'
                            fontSize='15px'
                            color='white'
                            fontWeight='bold'
                            w='100%'
                            h='45'
                            _hover={{
                              bg: "orange",
                            }}
                            _active={{
                              bg: "orange",
                            }}

                            onClick={() => handleLogin()}>
                            SIGN IN
                          </Button>
                        </FormControl>

                      </TabPanel>
                      <TabPanel>
                        <Text
                          fontSize='xl'
                          color={textColor}
                          fontWeight='bold'
                          textAlign='center'
                          mb='22px'>
                          Sign up with
                        </Text>
                        <HStack spacing='15px' justify='center' mb='22px'>
                          <Flex
                            justify='center'
                            align='center'
                            w='60px'
                            h='60px'
                            borderRadius='15px'
                            border='1px solid lightgray'
                            cursor='pointer'
                            transition='all .25s ease'
                            _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
                            <Link href='#'>
                              <Icon
                                as={FaFacebook}
                                w='30px'
                                h='30px'
                                _hover={{ filter: "brightness(120%)" }}
                              />
                            </Link>
                          </Flex>
                          <Flex
                            justify='center'
                            align='center'
                            w='60px'
                            h='60px'
                            borderRadius='15px'
                            border='1px solid lightgray'
                            cursor='pointer'
                            transition='all .25s ease'
                            _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
                            <Link href='#'>
                              <Icon
                                as={FaApple}
                                w='30px'
                                h='30px'
                                _hover={{ filter: "brightness(120%)" }}
                              />
                            </Link>
                          </Flex>
                          <Flex
                            justify='center'
                            align='center'
                            w='60px'
                            h='60px'
                            borderRadius='15px'
                            border='1px solid lightgray'
                            cursor='pointer'
                            transition='all .25s ease'
                            _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
                            <Link href='#'>
                              <Icon
                                as={FaGoogle}
                                w='30px'
                                h='30px'
                                _hover={{ filter: "brightness(120%)" }}
                              />
                            </Link>
                          </Flex>
                        </HStack>
                        <Text
                          fontSize='lg'
                          color='gray.400'
                          fontWeight='bold'
                          textAlign='center'
                          mb='22px'>
                          or
                        </Text>
                        <FormControl>
                          <HStack>
                            <VStack>
                              <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                                First Name
                              </FormLabel>
                              <Input
                                fontSize='sm'
                                ms='4px'
                                borderRadius='15px'
                                type='text'
                                placeholder='Your first name'
                                mb='24px'
                                size='lg'
                              />
                            </VStack>

                            <VStack>
                              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                                Last Name
                              </FormLabel>
                              <Input
                                fontSize='sm'
                                ms='4px'
                                borderRadius='15px'
                                type='text'
                                placeholder='Your last name'
                                mb='24px'
                                size='lg'
                              />
                            </VStack>
                          </HStack>
                          <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                            Email
                          </FormLabel>
                          <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='email'
                            placeholder='Your email address'
                            mb='24px'
                            size='lg'
                          />
                          <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                            Password
                          </FormLabel>
                          <Input
                            fontSize='sm'
                            ms='4px'
                            borderRadius='15px'
                            type='password'
                            placeholder='Your password'
                            mb='24px'
                            size='lg'
                          />
                          <Button
                            type='submit'
                            bg='orange.300'
                            fontSize='15px'
                            color='white'
                            fontWeight='bold'
                            w='100%'
                            h='45'
                            _hover={{
                              bg: "orange",
                            }}
                            _active={{
                              bg: "orange",
                            }}

                            onClick={() => signUp()}>
                            SIGN UP
                          </Button>
                        </FormControl>
                      </TabPanel>

                      <TabPanel>
                        <Text
                          fontSize='xl'
                          color={textColor}
                          fontWeight='bold'
                          textAlign='center'
                          mb='22px'>
                          Restaurant Application
                        </Text>

                        <VStack>
                          <FormControl>
                            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                              Title of your company
                            </FormLabel>
                            <Input
                              fontSize='sm'
                              ms='4px'
                              borderRadius='15px'
                              type='email'
                              placeholder='Your email address'
                              mb='24px'
                              size='lg'
                            />

                            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                              What is the category
                            </FormLabel>
                            <Input
                              fontSize='sm'
                              ms='4px'
                              borderRadius='15px'
                              type='email'
                              placeholder='Your email address'
                              mb='24px'
                              size='lg'
                            />

                            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                              Email
                            </FormLabel>
                            <Input
                              fontSize='sm'
                              ms='4px'
                              borderRadius='15px'
                              type='email'
                              placeholder='Your email address'
                              mb='24px'
                              size='lg'
                            />

                            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                              Why do you prefer us?
                            </FormLabel>
                            <Input
                              fontSize='sm'
                              ms='4px'
                              borderRadius='15px'
                              type='email'
                              placeholder='Your email address'
                              mb='24px'
                              size='lg'
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

                          onClick={() => signUp()}>
                          APPLY
                        </Button>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>

                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  )
}
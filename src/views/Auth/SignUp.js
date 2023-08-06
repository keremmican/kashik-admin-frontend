// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel, Grid,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue, VStack
} from "@chakra-ui/react";
import axios from "axios";
// Assets
import BgSignUp from "assets/img/yatay.png";
import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

const BASE_URL = process.env.REACT_APP_URL

function SignUp() {
  const titleColor = useColorModeValue("orange.300", "orange.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("orange.200", "rgba(255, 255, 255, 0.5)");


  const signUp = () => {

    try {
      console.log("sa")
    } catch (e) {
      console.log("sign up error")
    }
  }

  const [page, setPage] = useState('');

  const handleButtonClick = (pageName) => {
    setPage(pageName);
  };

  const renderForm = () => {
    switch (page) {
      case 'Login':
        return (
          <div>
            {/* Login form components */}
          </div>
        );
      case 'SignUp':
        return (
          <div>
            <Flex
              direction='column'
              alignSelf='center'
              justifySelf='center'
              overflow='hidden'>
              <Box
                position='absolute'
                minH={{ base: "70vh", md: "50vh" }}
                w={{ md: "calc(100vw - 50px)" }}
                borderRadius={{ md: "15px" }}
                left='0'
                right='0'
                bgRepeat='no-repeat'
                overflow='hidden'
                zIndex='-1'
                top='0'
                bgImage={BgSignUp}
                bgSize='cover'
                mx={{ md: "auto" }}
                mt={{ md: "14px" }}></Box>
              <Flex
                direction='column'
                textAlign='center'
                justifyContent='center'
                align='center'
                mt='6.5rem'
                mb='30px'>
                <Text fontSize='4xl' color='white' fontWeight='bold'>
                  Welcome!
                </Text>
              </Flex>
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
                  <Text
                    fontSize='xl'
                    color={textColor}
                    fontWeight='bold'
                    textAlign='center'
                    mb='22px'>
                    Register with
                  </Text>
                  <HStack spacing='15px' justify='center' mb='22px'>
                    <Flex
                      justify='center'
                      align='center'
                      w='75px'
                      h='75px'
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
                      w='75px'
                      h='75px'
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
                      w='75px'
                      h='75px'
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
                      mb='24px'
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
                  <Flex
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    maxW='100%'
                    mt='0px'>
                    <Text color={textColor} fontWeight='medium'>
                      Already have an account?
                      <Link
                        color={titleColor}
                        as='span'
                        ms='5px'
                        href='#'
                        fontWeight='bold'>
                        Sign In
                      </Link>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </div>
        );
      case 'RestaurantSignIn':
        return (
          <div>
            {/* Restaurant sign-in form components */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>

      <Flex
        direction='column'
        alignSelf='center'
        justifySelf='center'
        overflow='hidden'>
        <Box
          position='absolute'
          minH={{ base: "70vh", md: "50vh" }}
          w={{ md: "calc(100vw - 50px)" }}
          borderRadius={{ md: "15px" }}
          left='0'
          right='0'
          bgRepeat='no-repeat'
          overflow='hidden'
          zIndex='-1'
          top='0'
          bgImage={BgSignUp}
          bgSize='cover'
          mx={{ md: "auto" }}
          mt={{ md: "14px" }}></Box>
        <Flex
          direction='column'
          textAlign='center'
          justifyContent='center'
          align='center'
          mt='6.5rem'
          mb='30px'>
        </Flex>
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
            <VStack>
              <Text fontSize='4xl' color='black' fontWeight='bold'>
                Welcome!
              </Text>

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
                onClick={() => handleButtonClick('Login')}>Login</Button>
              <Button onClick={() => handleButtonClick('SignUp')}>SignUp</Button>
              <Button onClick={() => handleButtonClick('RestaurantSignIn')}>Restaurant SignIn</Button>
            </VStack>
          </Flex>
        </Flex>
      </Flex>

      {renderForm()}
    </div>
  );
}

export default SignUp;

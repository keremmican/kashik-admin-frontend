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

function SignIn() {
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
            </Flex>
          </Flex>
        </Flex>
      </Flex>

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

      </Flex>
    </div>
  );
}

export default SignIn;

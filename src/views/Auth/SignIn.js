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
import {useDispatch} from "react-redux";

const BASE_URL = process.env.REACT_APP_URL

function SignIn() {
  const titleColor = useColorModeValue("orange.300", "orange.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("orange.200", "rgba(255, 255, 255, 0.5)");

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

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
      const loginResponse = await axios.post(`${BASE_URL}/auth/authenticate-admin`, {
        email: email,
        password: pwd
      });

      const {access_token, refresh_token} = loginResponse.data;

      setSecureCookie('access_token', access_token, 1); // 1 day expiration
      setSecureCookie('refresh_token', refresh_token, 7); // 7 days expiration

      let role = checkUserRole(access_token)

      window.location.href = '/admin/dashboard'

      console.log('Login successful!');
      console.log('Access Token:', access_token);
      console.log('Refresh Token:', refresh_token);
    } catch (e) {
      console.log('Login error:', e.message);
    }
  }

  const checkUserRole = async (accessToken) => {
    try {
      if (accessToken) {
        const response = await axios.post(
            BASE_URL + "/auth/validate-token?token=" + accessToken
        );
        dispatch({ type: "SET_USER_ROLE", payload: response.data });
        return response.data
      } else {
        dispatch({ type: "SET_USER_ROLE", payload: "ROLE_GUEST" });
        return response.data
      }
    } catch (error) {
      console.error("User role check failed:", error);
      dispatch({ type: "SET_USER_ROLE", payload: "ROLE_GUEST" });
      return response.data
    } finally {
      setLoading(false);
    }
  };

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

                  onClick={() => handleLogin()}
                  onSubmit={() => handleLogin()}>
                SIGN IN
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


    </div>
  );
}

export default SignIn;

// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl, FormErrorMessage, FormHelperText,
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
import React, {useEffect, useRef, useState} from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import {useDispatch} from "react-redux";
import {Field, Form, Formik} from "formik";
import {setAccessToken, setIsLoggedIn, setRefreshToken, setUserId, setUserRole} from "../../store/actions/authActions";
import store from "../../store";
const BASE_URL = process.env.REACT_APP_URL

function SignIn() {
  const titleColor = useColorModeValue("orange.300", "orange.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("orange.200", "rgba(255, 255, 255, 0.5)");

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const ref = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  function handleEmailChange(e)  {
    let error
    if (!email) {
      error = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      error = "Invalid email type"
    }
    return error
  }

  function handlePasswordChange(e)  {
    let error
    if (!pwd)
      error = 'Password is required'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    //   error = "Password"
    // }
    return error
  }

  const handleKeyUp = (event) => {
    // Enter
    if (event.keyCode === 13) {
      handleLogin();
    }
  }

  const handleLogin = async () => {
    try {
      const loginResponse = await axios.post(`${BASE_URL}/auth/authenticate-admin`, {
        email: email,
        password: pwd
      }, {withCredentials: true});

      const {access_token, refresh_token, userId, role} = loginResponse.data;

      store.dispatch(setUserId(userId))
      store.dispatch(setAccessToken(access_token))
      store.dispatch(setRefreshToken(refresh_token))
      store.dispatch(setUserRole(role))
      store.dispatch(setIsLoggedIn(true))

      window.location.href = '/admin/dashboard'

      console.log('Login successful!');
      console.log('Access Token:', access_token);
      console.log('Refresh Token:', refresh_token);
      console.log('Role:', role)
    } catch (e) {
      console.log('Login error:', e.message);
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

            <Formik
                initialValues={{ email: "", pwd: "" }}
                onSubmit={(values, actions) => {
                  handleLogin(values);
                  actions.setSubmitting(false);
                }}
            >
              {(props) => (
                  <Form>
                    <Field name="email" validate={handleEmailChange}>
                      {({ field, form }) => (
                          <FormControl
                              mb={"10px"}
                              isInvalid={form.errors.email && form.touched.email}
                          >
                            <FormLabel>Email</FormLabel>
                            <Input
                                {...field}
                                placeholder="Your email address"
                                size="lg"
                                type={"email"}
                                ref={ref}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyUp={(e) => {
                                  if (e.keyCode === 13) {
                                    handleLogin();
                                  }
                                }}
                            />
                            <FormErrorMessage pt={"1px"} pb={"6px"}>{form.errors.email}</FormErrorMessage>
                          </FormControl>
                      )}
                    </Field>

                    <Field name="pwd" validate={handlePasswordChange}>
                      {({ field, form }) => (
                          <FormControl
                              mb={"10px"}
                              isInvalid={form.errors.pwd && form.touched.pwd}
                          >
                            <FormLabel>Password</FormLabel>
                            <Input
                                {...field}
                                placeholder="Your password"
                                size="lg"
                                type={"password"}
                                ref={ref}
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                onKeyUp={(e) => {
                                  if (e.keyCode === 13) {
                                    handleLogin();
                                  }
                                }}
                            />
                            <FormErrorMessage pt={"1px"} pb={"6px"}>{form.errors.pwd}</FormErrorMessage>
                          </FormControl>
                      )}
                    </Field>

                    <Button
                        type="submit"
                        bg="orange.300"
                        fontSize="15px"
                        color="white"
                        fontWeight="bold"
                        w="100%"
                        h="45"
                        mt="15px"
                        mb="24px"
                        _hover={{
                          bg: "orange",
                        }}
                        _active={{
                          bg: "orange",
                        }}
                        isLoading={props.isSubmitting}
                    >
                      SIGN IN
                    </Button>
                  </Form>
              )}
            </Formik>
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

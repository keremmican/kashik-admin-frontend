// Chakra imports
import {
  Box,
  Button,
  Flex, FormControl, FormLabel, Grid, GridItem,
  HStack, Icon, Image, Input,
  Link, Switch,
  Text,
  useColorModeValue, VStack
} from "@chakra-ui/react";
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";
import {
  CreativeTimLogo,
  DocumentIcon,
  HomeIcon,
  PersonIcon,
  RocketIcon,
} from "components/Icons/Icons";
import SidebarResponsive from "components/Sidebar/SidebarResponsive";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import routes from "routes.js";
import small_logo from "assets/img/small_logo.png";
import BgSignUp from "../../assets/img/welcome-bg.jpg";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useToast, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { color } from "@chakra-ui/system";
import axios from "axios";
import AuthCard from "./components/AuthCard";


const BASE_URL = process.env.REACT_APP_URL

export default function WelcomePage() {
  const history = useHistory();

  const titleColor = useColorModeValue("orange.300", "orange.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("orange.200", "rgba(255, 255, 255, 0.5)");

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  function WelcomeToast() {

    const toast = useToast()

    return (
      <Button
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }

  return(
    <Grid gap={4} templateColumns='repeat(5, 1fr)' mb={"2rem"}>
      <GridItem colSpan={2}>
        <Flex
          direction='column'
          textAlign='center'
          justifyContent='center'
          align='center'
          mt='20.5rem'
          mb='30px'>
          <Box
            position='absolute'
            minH={{ base: "100vh", md: "70vh" }}
            w={{ md: "calc(100%)" }}
            h="calc(120vh)"
            left='0'
            right='0'
            bgRepeat='no-repeat'
            overflow='hidden'
            zIndex='-1'
            top='0'
            bgImage={BgSignUp}
            bgSize='cover'></Box>
          <Text fontSize='4xl' color='white' fontWeight='bold'>
            Welcome!
          </Text>
          <Text
            fontSize='md'
            color='white'
            fontWeight='normal'
            mt='10px'
            mb='26px'
            w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}>
            Kashik
          </Text>

          <HStack>
            <AppStoreButton url={""} theme={"dark"} s/>
            <GooglePlayButton url={""} theme={"dark"}/>
          </HStack>
        </Flex>
      </GridItem>

      <GridItem colSpan={3}>
        <AuthCard />
      </GridItem>


    </Grid>
  )
}
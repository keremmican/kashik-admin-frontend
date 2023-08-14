// Chakra imports
import {
  Box,
  Button,
  Flex, Grid, GridItem,
  HStack, IconButton, Image,
  Link,
  Text, useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import {
  CreativeTimLogo,
  DocumentIcon,
  HomeIcon,
  PersonIcon,
  RocketIcon,
} from "components/Icons/Icons";
import SidebarResponsive from "components/Sidebar/SidebarResponsive";
import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import routes from "routes.js";
import small_logo from "assets/img/small_logo.png";
import { Icon } from "@iconify/react";

export default function AuthNavbar(props) {
  const [open, setOpen] = React.useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [window.location.pathname])
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const { logo, logoText, secondary, ...rest } = props;
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1;
  };
  // Chakra color mode
  let navbarIcon = useColorModeValue("black", "white.700");
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarBg = useColorModeValue(
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  let navbarBorder = useColorModeValue(
    "1.5px solid rgba(255, 255, 255, 0.31)",
    "1.5px solid rgba(255, 255, 255, 0.31)"
  );
  let navbarShadow = useColorModeValue(
    "0px 7px 23px rgba(0, 0, 0, 0.05)",
    "none"
  );
  let navbarFilter = useColorModeValue(
    "none",
    "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
  );
  let navbarBackdrop = "blur(21px)";
  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );
  let navbarPosition = "fixed";
  let colorButton = "white";
  if (props.secondary === true) {
    navbarIcon = "white";
    navbarBg = "none";
    navbarBorder = "none";
    navbarShadow = "initial";
    navbarFilter = "initial";
    navbarBackdrop = "none";
    bgButton = "white";
    colorButton = "gray.700";
    mainText = "white";
    navbarPosition = "absolute";
  }
  var brand = (
    <Link
      href={`${process.env.PUBLIC_URL}/#/`}
      target="_blank"
      display="flex"
      lineHeight="100%"
      fontWeight="bold"
      justifyContent="center"
      alignItems="center"
      color={mainText}
    >
      <Image src={small_logo} alt="logo" boxSize='150px'/>
    </Link>
  );
  var linksAuth = (
    <HStack display={{ sm: "none", lg: "flex" }}>
      <NavLink to="/admin/dashboard">
        <Button
          fontSize="sm"
          ms="0px"
          me="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          //leftIcon={<HomeIcon color={navbarIcon} w="12px" h="12px" me="0px" />}
        >
          <Text textColor={navbarIcon}>About us</Text>
        </Button>
      </NavLink>
      <NavLink to="/auth/sign-in">
        <Button
          fontSize="sm"
          ms="0px"
          me="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          //leftIcon={<PersonIcon color={navbarIcon} w="12px" h="12px" me="0px" />}
        >
          <Text textColor={navbarIcon}>Sign in</Text>
        </Button>
      </NavLink>
      <IconButton aria-label={"sa"} onClick={toggleColorMode}>
        <Icon icon={colorMode === 'light' ? ("ph:moon-bold") : ("octicon:sun-16")} />
      </IconButton>
    </HStack>
  );
  return (
      <Flex
          position={navbarPosition}
          top="22px"
          left="50%"
          transform="translate(-50%, 0px)"
          background={navbarBg}
          border={navbarBorder}
          boxShadow={navbarShadow}
          filter={navbarFilter}
          backdropFilter={navbarBackdrop}
          borderRadius="15px"
          px="16px"
          py="22px"
          mx="auto"
          width="calc(100vw)"
          height="60px"
          maxH="50%"
          maxW="90%"
          alignItems="center"
          justifyContent="space-between"
      >
        <Flex flex="0.5" justifyContent="center">
          {brand}
        </Flex>

        {currentPath === "/auth/business" && (
            <Flex flex="1" justifyContent="end">
              {linksAuth}
            </Flex>
        )}

      </Flex>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};

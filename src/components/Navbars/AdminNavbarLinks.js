// Chakra Icons
import { BellIcon, SearchIcon } from "@chakra-ui/icons";
// Chakra Imports
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text, useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
// Custom Icons
import { ProfileIcon, SettingsIcon } from "components/Icons/Icons";
// Custom Components
import { ItemContent } from "components/Menu/ItemContent";
import SidebarResponsive from "components/Sidebar/SidebarResponsive";
import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import routes from "routes.js";
import ProfileCard from "../Custom/Cards/ProfileCard";
import { Icon } from '@iconify/react';
import {clearData, setUsername} from "../../store/actions/authActions";
import {useDispatch, useSelector} from "react-redux";
import apiClient from "../../api/axiosInstance";
import store from "../../store";
const BASE_URL = process.env.REACT_APP_URL;

export default function HeaderLinks(props) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(null)

  useEffect(() => {
    getInfo()
  }, []);

  const getInfo = async () => {
    try {
      await apiClient.get('/auth/get-user-login-info').then(
          (response) => {
            store.dispatch(setUsername(response.data.username))
            setUsername(response.data.username)
          })
    } catch (e) {
      console.log(e)
    }
  }

  const handleLogout = async () => {
    await apiClient.post(`${BASE_URL}/auth/logout`, {}, {
      withCredentials: true
    });
    dispatch(clearData());

    window.location.href = '/auth/business'
  };

  const { variant, children, fixed, secondary, onOpen, ...rest } = props;

  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("gray.700", "white");

  const [isOpen, setIsOpen] = useState(false);

  // Chakra Color Mode
  let mainTeal = useColorModeValue("teal.300", "teal.300");
  let inputBg = useColorModeValue("white", "gray.800");
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  let searchIcon = useColorModeValue("gray.700", "gray.200");

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  const settingsRef = React.useRef();
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <InputGroup
        cursor="pointer"
        bg={inputBg}
        borderRadius="15px"
        w={{
          sm: "128px",
          md: "200px",
        }}
        me={{ sm: "auto", md: "20px" }}
        _focus={{
          borderColor: { mainTeal },
        }}
        _active={{
          borderColor: { mainTeal },
        }}
      >
        <InputLeftElement
          children={
            <IconButton
              bg="inherit"
              borderRadius="inherit"
              _hover="none"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              icon={<SearchIcon color={searchIcon} w="15px" h="15px" />}
            ></IconButton>
          }
        />
        <Input
          fontSize="xs"
          py="11px"
          color={mainText}
          placeholder="Type here..."
          borderRadius="inherit"
        />
      </InputGroup>

      <Flex px="8px">
        <Menu>
          <MenuButton>
            <ProfileCard title={username}/>
          </MenuButton>
          <MenuList p="16px 8px">
            <Flex flexDirection="column">
              <MenuItem borderRadius="8px" mb="10px">
                <ProfileIcon />
                <Text ml={2} color={textColor} fontWeight="bold">Profile</Text>
              </MenuItem>
              <MenuItem borderRadius="8px" mb="10px" onClick={handleLogout}>
                <Icon icon="material-symbols:logout" />
                <Text ml={2} color={textColor} fontWeight="bold">Logout</Text>
              </MenuItem>
            </Flex>
          </MenuList>
        </Menu>
      </Flex>

      <SidebarResponsive
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        // logo={logo}
        {...rest}
      />

      {/*<SettingsIcon*/}
      {/*  cursor="pointer"*/}
      {/*  ms={{ base: "16px", xl: "0px" }}*/}
      {/*  me="16px"*/}
      {/*  ref={settingsRef}*/}
      {/*  onClick={props.onOpen}*/}
      {/*  color={navbarIcon}*/}
      {/*  w="18px"*/}
      {/*  h="18px"*/}
      {/*/>*/}

      <Flex px="5px">
        <Menu>
          <MenuButton>
            <BellIcon color={navbarIcon} w="18px" h="18px" />
          </MenuButton>
          <MenuList p="16px 8px">
            <Flex flexDirection="column">
              <MenuItem borderRadius="8px" mb="10px">
                <ItemContent
                    time="13 minutes ago"
                    info="from Alicia"
                    boldInfo="New Message"
                    aName="Alicia"
                    aSrc={avatar1}
                />
              </MenuItem>
              <MenuItem borderRadius="8px" mb="10px">
                <ItemContent
                    time="2 days ago"
                    info="by Josh Henry"
                    boldInfo="New Album"
                    aName="Josh Henry"
                    aSrc={avatar2}
                />
              </MenuItem>
              <MenuItem borderRadius="8px">
                <ItemContent
                    time="3 days ago"
                    info="Payment succesfully completed!"
                    boldInfo=""
                    aName="Kara"
                    aSrc={avatar3}
                />
              </MenuItem>
            </Flex>
          </MenuList>
        </Menu>
      </Flex>

      <Flex px="5px">
        <IconButton aria-label={"colormode"} onClick={toggleColorMode}>
          <Icon icon={colorMode === 'light' ? ("ph:moon-bold") : ("octicon:sun-16")} />
        </IconButton>
      </Flex>
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};

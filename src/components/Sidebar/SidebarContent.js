/*eslint-disable*/
// chakra imports
import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
    Box,
    Button, Flex, Image,
    Link,
    Stack,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
import { CreativeTimLogo } from "components/Icons/Icons";
import { Separator } from "components/Separator/Separator";
import { SidebarHelp } from "components/Sidebar/SidebarHelp";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import small_logo from "../../assets/img/small_logo.png";
import {Icon} from "@iconify/react";
import { css } from '@emotion/react';

const SidebarContent = ({ logoText, routes }) => {
    const buttonStyles = css`
        &:focus {
            outline: none !important;
          box-shadow: none !important;
        }
    `;
    // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const [state, setState] = React.useState({});

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  const createLinks = (routes) => {
    // Chakra Color Mode
    const activeBg = useColorModeValue("white", "gray.700");
    const inactiveBg = useColorModeValue("white", "gray.700");
    const activeColor = useColorModeValue("gray.700", "white");
    const inactiveColor = useColorModeValue("gray.400", "gray.400");

    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }

        if (prop.category) {
            var st = {};
            st[prop["state"]] = !state[prop.state];
            if (prop.category === "OWNER_PAGES_ADMIN" || prop.category === "USER_PAGES_ADMIN") {
                let iconComponent;

                if (prop.category === "USER_PAGES_ADMIN") {
                    iconComponent = <Icon icon={"material-symbols:person-outline"} />;
                } else if (prop.category === "OWNER_PAGES_ADMIN") {
                    iconComponent = <Icon icon={"mingcute:spoon-line"} />;
                }

                return (
                    <Accordion mt={"10px"} allowMultiple key={prop.name}>
                        <AccordionItem border={"none"}>
                            <h2>
                                <AccordionButton css={buttonStyles}>
                                    <Box flex="1" textAlign="left">
                                        <Flex align="center">
                                            <IconBox
                                                bg="orange.300"
                                                color="white"
                                                h="30px"
                                                w="30px"
                                                me="12px"
                                            >
                                                {iconComponent}
                                            </IconBox>
                                            {prop.name}
                                        </Flex>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                {createLinks(prop.views)}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                );
            }
        }
      return (
        <NavLink to={prop.layout + prop.path} key={prop.name}>
          {activeRoute(prop.layout + prop.path) === "active" ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg={activeBg}
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg="orange.300"
                    color="white"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  {document.documentElement.dir === "rtl"
                    ? prop.rtlName
                    : prop.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="transparent"
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              py="12px"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg={inactiveBg}
                    color="orange.300"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  {document.documentElement.dir === "rtl"
                    ? prop.rtlName
                    : prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };

    const links = <>{createLinks(routes)}</>;

  return (
    <>
        <Box mb="12px">
      <Link
        href={`${process.env.PUBLIC_URL}/`}
        target="_blank"
        display="flex"
        lineHeight="100%"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        fontSize="11px"
      >

          <Image src={small_logo} alt="logo" boxSize='130px'/>
      </Link>
      <Separator></Separator>
    </Box>
          <Stack direction="column" mb="40px">
            <Box>{links}</Box>
          </Stack>
          <SidebarHelp />
    </>
  )
}

export default SidebarContent
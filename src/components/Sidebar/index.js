/*eslint-disable*/
// chakra imports
import {
  Box, useColorModeValue
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import SidebarContent from "./SidebarContent";
import small_logo from "assets/img/small_logo.png";
import {useSelector} from "react-redux";
import store from "../../store";

// FUNCTIONS

function Sidebar(props) {
  const userRole = store.getState().auth.userRole;
  const mainPanel = React.useRef();
  let variantChange = "0.2s linear";

  const { logoText, routes, sidebarVariant } = props;

  //  BRAND
  //  Chakra Color Mode
  let sidebarBg = "none";
  let sidebarRadius = "0px";
  let sidebarMargins = "0px";
  if (sidebarVariant === "opaque") {
    sidebarBg = useColorModeValue("white", "gray.700");
    sidebarRadius = "16px";
    sidebarMargins = "16px 0px 16px 16px";
  }

  // SIDEBAR
  return (
    <Box ref={mainPanel}>
      <Box display={{ sm: "none", xl: "block" }} position="fixed">
        <Box
          bg={sidebarBg}
          transition={variantChange}
          w="260px"
          maxW="260px"
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          h="calc(100vh - 32px)"
          ps="20px"
          pe="20px"
          m={sidebarMargins}
          borderRadius={sidebarRadius}
        >
          <SidebarContent routes={userRole === "ROLE_ADMIN" ? routes[2].views : userRole === "ROLE_OWNER" ? routes[3].views : routes[4].views}
        logoText={"PURITY UI DASHBOARD"}
        display="none"
        sidebarVariant={sidebarVariant}
        />
        </Box>
      </Box>
    </Box>
  );
}




export default Sidebar;

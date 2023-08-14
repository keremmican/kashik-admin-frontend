import {
    Avatar, Box,
    Button, HStack,
    Menu, MenuButton, MenuItem, MenuList,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from "@chakra-ui/react";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import React, {useState} from "react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {NavLink} from "react-router-dom";
import avatar1 from "../../../assets/img/avatars/avatar1.png";
import {ItemContent} from "../../Menu/ItemContent";

const ProfileCard = ({ title, photoSrc, data }) => {

  const textColor = useColorModeValue("gray.700", "white");

  return (
      <div>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' px={"6px"} py={"6px"}>
                <HStack>
                    <Avatar
                        src={photoSrc}
                        borderRadius="12px"
                        me="10px"
                        size='sm'
                    />
                    <Text fontSize="xl" color={textColor} fontWeight="bold" pr={"5px"}>
                        {title}
                    </Text>
                </HStack>
            </Box>
      </div>
  );
};

export default ProfileCard;

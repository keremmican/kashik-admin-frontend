import {
  Avatar,
  Button,
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
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="0px 0px 0px 0px">
            <Avatar
                src={photoSrc}
                borderRadius="12px"
                me="16px"
                size='sm'
            />
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              {title}
            </Text>
          </CardHeader>
        </Card>
      </div>
  );
};

export default ProfileCard;

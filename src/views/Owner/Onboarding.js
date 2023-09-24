import Card from "../../components/Card/Card";
import {Box, Flex, Text} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import apiClient from "../../api/axiosInstance";
import { Icon } from '@iconify/react';
import store from "../../store";
import {setUsername} from "../../store/actions/authActions";

const BASE_URL = process.env.REACT_APP_URL;

export default function Onboarding() {
    const [status, setStatus] = useState(null);
    const [userStatus, setUserStatus] = useState(null)

    useEffect(() => {
        const getOnboarding = async () => {
            await apiClient.get("/onboarding").then((response) =>
                {
                    console.log(response.data.status)
                    setStatus(response.data.status)
                    setUserStatus(response.data.userStatus)
                }
            )
        }
        getOnboarding()
    }, []);

    return(
        <Flex flexDirection='column' alignItems={"center"} justifyContent={"center"} pt={{ base: "120px", md: "200px" }}>
            {userStatus !== "ACTIVE" ? (
                <>
                    <Box>
                        <Icon icon={"ci:mail"} style={{ fontSize: '136px'}} />
                    </Box>
                    <Box textAlign="center">
                        <Text fontWeight="bold" fontSize="30">Verify your email address.</Text>
                        <Text>We send an email to verify that you are a real person. Please verify your email address to progress.</Text>
                    </Box>
                </>
            ) : (
                status === "IN_PROGRESS" && (
                    <Card>ONBOARDING</Card>
                )
            )}

        </Flex>
    )
}
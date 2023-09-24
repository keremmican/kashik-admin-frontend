import {
    Box, Flex, Text
} from '@chakra-ui/react'
import {useEffect, useState} from "react";
import apiClient from "../../api/axiosInstance";
import UserStatusCard from "../../components/Card/user/UserStatusCard";
import Card from "../../components/Card/Card";
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react'
import OnboardingPersonalInfoCard from "../../components/Card/onboarding/OnboardingPersonalInfoCard";
import OnboardingCompanyInfoCard from "../../components/Card/onboarding/OnboardingCompanyInfoCard";
import OnboardingDocumentsCard from "../../components/Card/onboarding/OnboardingDocumentsCard";

const steps = [
    { title: 'First', description: 'Personal Info' },
    { title: 'Second', description: 'Company Info' },
    { title: 'Third', description: 'Documents' },
]

export default function Onboarding() {
    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })

    const onStepChange = () => {

    }

    const [status, setStatus] = useState(null);
    const [userStatus, setUserStatus] = useState(null)

    const [userStatusForm, setUserStatusForm] = useState({
        icon: "",
        title: "",
        text: ""
    })

    function getUserStatusInfo(userStatus) {
        switch (userStatus) {
            case "BANNED":
                setUserStatusForm({icon: "akar-icons:cross",
                    title: "You have been banned!",
                    text: "Contact us if you think this isn't right."})
                break
            case "VERIFICATION":
                setUserStatusForm({icon: "ci:mail",
                    title: "Verify your email address.",
                    text: "We send an email to verify that you are a real person. Please verify your email address to progress."})
                break
            case "WAITING_FOR_APPROVE":
                setUserStatusForm({icon: "iconamoon:clock-light",
                    title: "Waiting for approve.",
                    text: "Contact us if you have questions in mind."})
                break
            default:
                return null
        }
    }

    useEffect(() => {
        const getOnboarding = async () => {
            await apiClient.get("/onboarding").then((response) =>
                {
                    setStatus(response.data.status)
                    setUserStatus(response.data.userStatus)
                    getUserStatusInfo(response.data.userStatus)
                }
            )
        }
        getOnboarding()
    }, []);

    return(
        <Flex flexDirection='column' alignItems={"center"} justifyContent={"center"} pt={{ base: "120px", md: "200px" }}>
            {userStatus === "ACTIVE" ? ( //TODO normalde başına ünlem koyulacak.
                <UserStatusCard icon={userStatusForm.icon}
                title={userStatusForm.title}
                text={userStatusForm.text}/>
            ) : (
                status === "IN_PROGRESS" && (
                    <>
                        <Stepper size='lg' index={activeStep} colorScheme='orange'>
                            {steps.map((step, index) => (
                                <Step key={index}>
                                    <StepIndicator>
                                        <StepStatus
                                            complete={<StepIcon />}
                                            incomplete={<StepNumber />}
                                            active={<StepNumber />}
                                        />
                                    </StepIndicator>

                                    <Box flexShrink='0'>
                                        <StepTitle>{step.title}</StepTitle>
                                        <StepDescription>{step.description}</StepDescription>
                                    </Box>

                                    <StepSeparator />
                                </Step>
                            ))}
                        </Stepper>

                        <Flex flexDirection='column' alignItems={"center"} justifyContent={"center"} pt={{ base: "12px", md: "50px" }}>
                            {activeStep === 1 && <OnboardingPersonalInfoCard onChange/>}
                            {activeStep === 2 && <OnboardingCompanyInfoCard />}
                            {activeStep === 3 && <OnboardingDocumentsCard />}
                        </Flex>


                    </>
                )
            )}

        </Flex>
    )
}
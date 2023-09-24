import {
    Box,
    Flex,
    Text,
    Input,
    Button,
    VStack,
    FormControl,
    FormLabel,
    FormErrorMessage, GridItem, Grid,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import React from "react";
import {ChevronRightIcon} from "@chakra-ui/icons";

const OnboardingPersonalInfoCard = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const inputStyles = {
        fontSize: 'sm',
        ms: '4px',
        borderRadius: '15px',
        mb: '4px',
        size: 'lg',
    };

    const labelStyles = {
        ms: '4px',
        fontSize: 'sm',
        fontWeight: 'normal',
    };

    const validateBirthDate = (dateString) => {
        // Check if the date is in the future
        const inputDate = new Date(dateString);
        const currentDate = new Date();
        if (inputDate > currentDate) {
            return 'Birth date cannot be in the future';
        }
        return true;
    };

    const validateContactNumber = (number) => {
        // Check if the contact number contains only digits
        if (!/^\d+$/.test(number)) {
            return 'Contact number must contain only digits';
        }
        return true;
    };

    const onSubmit = (data) => {
        // Verileri iletmek için bir işlevi çağırabilirsiniz.
        // Örneğin, onForwardClick(data) gibi.
        onForwardClick(data);

        // Formu sıfırlayın veya başka bir işlem yapın.
        reset();
    };

    return (
        <Box
            maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="gray.100"
            boxShadow="md"
            p={4}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing={6}>
                    <Grid templateColumns="repeat(2, 1fr)" gap={7}>
                        <GridItem colSpan={2}>
                            <FormControl id="companyAuthorizedName" isInvalid={errors.companyAuthorizedName}>
                                <FormLabel {...labelStyles}>Authorized Name</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Your company name"
                                    {...inputStyles}
                                    {...register('companyAuthorizedName', { required: 'This field is required' })}
                                />
                                <FormErrorMessage ml={2}>{errors.companyAuthorizedName && errors.companyAuthorizedName.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl id="companyAuthorizedSurname" isInvalid={errors.companyAuthorizedSurname}>
                                <FormLabel {...labelStyles}>Authorized Surname</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Your company surname"
                                    {...inputStyles}
                                    {...register('companyAuthorizedSurname', { required: 'This field is required' })}
                                />
                                <FormErrorMessage ml={2}>{errors.companyAuthorizedSurname && errors.companyAuthorizedSurname.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl id="companyAuthorizedBirthDate" isInvalid={errors.companyAuthorizedBirthDate}>
                                <FormLabel {...labelStyles}>Authorized Birth Date</FormLabel>
                                <Input
                                    type="date"
                                    placeholder="Your birth date"
                                    {...inputStyles}
                                    {...register('companyAuthorizedBirthDate', {
                                        required: 'This field is required',
                                        validate: validateBirthDate, // Custom validation
                                    })}
                                />
                                <FormErrorMessage ml={2}>{errors.companyAuthorizedBirthDate && errors.companyAuthorizedBirthDate.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl id="companyAuthorizedTradeName" isInvalid={errors.companyAuthorizedTradeName}>
                                <FormLabel {...labelStyles}>Authorized Trade Name</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Your trade name"
                                    {...inputStyles}
                                    {...register('companyAuthorizedTradeName', { required: 'This field is required' })}
                                />
                                <FormErrorMessage ml={2}>{errors.companyAuthorizedTradeName && errors.companyAuthorizedTradeName.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl id="contactNumber" isInvalid={errors.contactNumber}>
                                <FormLabel {...labelStyles}>Contact number</FormLabel>
                                <Input
                                    type="tel"
                                    placeholder="Your contact number"
                                    {...inputStyles}
                                    {...register('contactNumber', {
                                        required: 'This field is required',
                                        validate: validateContactNumber, // Custom validation
                                    })}
                                />
                                <FormErrorMessage ml={2}>{errors.contactNumber && errors.contactNumber.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Flex justifyContent="flex-end" alignItems={"end"}>
                        <Button colorScheme="orange" type="submit" rightIcon={<ChevronRightIcon />} size="md">
                            Forward
                        </Button>
                    </Flex>
                </VStack>
            </form>
        </Box>
    );
}

export default OnboardingPersonalInfoCard;
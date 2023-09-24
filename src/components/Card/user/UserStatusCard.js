import {Box, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";


const UserStatusCard = ({icon, title, text}) => {
    return(
        <>
            <Box>
                <Icon icon={icon} style={{ fontSize: '136px'}} />
            </Box>
            <Box textAlign="center">
                <Text fontWeight="bold" fontSize="30">{title}</Text>
                <Text>{text}</Text>
            </Box>
        </>
    )
}

export default UserStatusCard;
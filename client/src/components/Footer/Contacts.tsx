import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
    Text,
    HStack,
    VStack,
    Tooltip,
    Link
} from "@chakra-ui/react";

const Contacts = () => {

    return (<>
        <VStack spacing={2}>
            <Text>Denys Vynohradnyi</Text>
            <HStack spacing={2}>
                <Tooltip label='denys.vynohradnyi.dev@gmail.com' placement='top' hasArrow>
                    <Link href='mailto:denys.vynohradnyi.dev@gmail.com' isExternal>
                        email <ExternalLinkIcon mx='2px' />
                    </Link>
                </Tooltip>
                <Tooltip label='github.com/Vakhaa' placement='top' hasArrow>
                    <Link href='https://github.com/Vakhaa' isExternal>
                        github <ExternalLinkIcon mx='2px' />
                    </Link>
                </Tooltip>
                <Tooltip label='linkedin.com/in/denys-vynohradnyi-67b7a41b9/' placement='top' hasArrow>
                    <Link href='https://www.linkedin.com/in/denys-vynohradnyi-67b7a41b9/' isExternal>
                        linkedIn <ExternalLinkIcon mx='2px' />
                    </Link>
                </Tooltip>
            </HStack>
        </VStack>
    </>);
}

export default Contacts;
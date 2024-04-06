import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel,
    Heading,
    Tooltip
} from "@chakra-ui/react";
import SuggestionForm from "./Suggestion";
import Contacts from "./Contacts";

const Footer: React.FC<{ isHome: boolean, showFooter: boolean }> = ({ isHome, showFooter }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (<>
        <Tooltip
            label="You could click to get a contacts or q&a."
            aria-label='A filters'
            border="1px solid white"
            borderRadius="6px"
            bg='#ff8029'
            isDisabled={!isHome}
            isOpen={showFooter}
            hasArrow
        >
            <Button p={2}
                position="absolute"
                bottom={{ base: '50%', md: '0' }}
                left={{ base: 'unset', md: '45%' }}
                right={{ base: '-70px', md: 'unset' }}
                transform={{ base: 'rotate(-90deg)', md: 'unset' }}
                border={isHome ? "1px solid #ff8029" : "unset"}
                borderTopRadius={10}
                bg='#00000020'
                onClick={onOpen}
            >
                @Denys Vynohradnyi
            </Button>
        </Tooltip>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader borderBottomWidth='1px' fontSize={15}>Created by Denys Vynohradnyi</DrawerHeader>
                <DrawerBody p={0}>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <Heading as="h3">
                                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Contacts
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel>
                                <Contacts />
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading as="h3">
                                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Suggestion
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel>
                                <SuggestionForm />
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading as="h3">
                                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Is this web application commercial?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel>
                                No, it isn't. This is a pet project intended for portfolio purposes.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading as="h3">
                                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Do we collect your data?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel>
                                No, we do not collect any data.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading as="h3">
                                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Other questions?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel>
                                Які ще питання? Де моє місце роботи? Я не розумію, дайте мені вже оффер! Годі знущань.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>);
}

export default Footer;
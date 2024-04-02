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
    Heading
} from "@chakra-ui/react";
import SuggestionForm from "./Suggestion";
import Contacts from "./Contacts";

const Footer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (<>
        <Button
            position="absolute"
            bottom={{ base: '50%', md: '0' }}
            left={{ base: 'unset', md: '45%' }}
            right={{ base: '-70px', md: 'unset' }}
            transform={{ base: 'rotate(-90deg)', md: 'unset' }}
            p={2}
            borderTopRadius={10}
            bg='#00000020'
            onClick={onOpen}
        >
            @Denys Vynohradnyi
        </Button>
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
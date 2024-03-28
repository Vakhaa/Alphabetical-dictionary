import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure } from "@chakra-ui/react";

const Footer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (<>
        <Button
            position="absolute"
            bottom="0"
            left="45%"
            p={2}
            borderTopRadius={10}
            bg='#00000020'
            onClick={onOpen}
        >
            @Denys Vynohradnyi
        </Button>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                <DrawerBody>
                    <p>Some contents...</p>
                    <p>Send form</p>
                    <p>Some contents...</p>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>);
}

export default Footer;
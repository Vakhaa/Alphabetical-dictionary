import {
    Button,
    Input,
    Textarea,
    FormControl,
    VStack,
    FormLabel,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const SuggestionForm = () => {

    const [name, setName] = useState('');
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)

    const [email, setEmail] = useState('');
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)

    const [message, setMessage] = useState('');
    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)

    const [error, setError] = useState('null');

    const toast = useToast()

    const send = async () => {
        if (name === '') {
            setError('name');
            return;
        }
        if (email === '' || !email.match('@')) {
            setError('email');
            return;
        }
        if (message === '') {
            setError('message');
            return;
        }

        setError('');

        try {
            let response = await fetch(`${process.env.REACT_APP_SERVER}/mail/send`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                }),
            })

            if (response.ok)
                toast({
                    title: 'Thank you!',
                    description: "We've sent your message.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            else
                toast({
                    title: 'We are sorry!',
                    description: "We haven't sent your message. You can take an email from the contacts.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
        } catch (error) {
            toast({
                title: 'We are sorry!',
                description: "We haven't sent your message. You can take an email from the contacts.",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    return (<>
        <FormControl as='fieldset'>
            <VStack spacing={5}>
                <FormLabel as='legend'>If you have some questions or propositions:</FormLabel>
                <Input type="text" placeholder="Name" isInvalid={error === 'name'} onChange={handleNameChange} />
                <Input type="email" placeholder="E-mail" isInvalid={error === 'email'} onChange={handleEmailChange} />
                <Textarea name="message" placeholder="Lorem ipsum" resize="none" isInvalid={error === 'message'} onChange={handleMessageChange} />
                <Button type="submit" w="full" onClick={send}>Send</Button>
            </VStack>
        </FormControl>
    </>);
}

export default SuggestionForm;
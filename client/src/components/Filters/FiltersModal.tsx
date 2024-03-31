import {
  Text,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  RadioGroup,
  Stack,
  Radio,
  Input,
  VStack
} from '@chakra-ui/react'
import { useState } from 'react';

const FiltersModal: React.FC<{
  isOpen: boolean,
  onClose: () => void,
  setLevel: React.Dispatch<React.SetStateAction<string>>,
  setContext: React.Dispatch<React.SetStateAction<string>>
}> = ({ isOpen, onClose, setLevel, setContext }) => {

  const [radio, setRadio] = useState('B1');
  const [input, setInput] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filters</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={3}>
              <Stack w="100%">
                <Text>Word difficulty level:</Text>
                <RadioGroup onChange={setRadio} value={radio}>
                  <Stack direction='row'>
                    <Radio value='A1'>A1</Radio>
                    <Radio value='A2'>A2</Radio>
                    <Radio value='B1'>B1</Radio>
                    <Radio value='B2'>B2</Radio>
                    <Radio value='C1'>C1</Radio>
                    <Radio value='C2'>C2</Radio>
                  </Stack>
                </RadioGroup>
              </Stack>
              <Stack w="100%">
                <Text>Context</Text>
                <Input
                  type='text'
                  placeholder="Animals"
                  borderColor="black"
                  value={input}

                  _placeholder={{ color: '#ffffff50' }}
                  onChange={handleInputChange}
                />
              </Stack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={5}>
              <Button onClick={() => {

                setLevel(radio);
                if (input != '')
                  setContext(input);
                onClose();

              }}>Save</Button>
              <Button onClick={onClose}>Close</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FiltersModal;

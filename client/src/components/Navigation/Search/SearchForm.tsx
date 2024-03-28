import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  HStack
} from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  close(): void,
  setWord(word: string): void
}


const SearchForm: React.FC<Props> = ({ close, setWord }) => {

  const [input, setInput] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)

  return (
    <Stack as='nav' spacing={1}>
      <FormControl as='fieldset'>

        <HStack spacing={1} pb={1} justify="space-between" >
          <FormLabel as='legend'>Search a specific word</FormLabel>

          <IconButton
            aria-label='Close icon'
            icon={<CloseIcon />}
            bg="blue.500"
            color="white"

            _hover={{ color: '#ffffff50' }}
            onClick={close}
          />
        </HStack>

        <HStack spacing={1}>
          <Input
            type='text'
            placeholder="Banana"
            borderColor="white"
            value={input}

            _placeholder={{ color: '#ffffff50' }}
            onChange={handleInputChange}
          />

          <IconButton
            aria-label='Search word'
            icon={<SearchIcon />}
            bg="blue.500"
            color="white"
            border="1px solid white"

            _hover={{ bg: "white", borderColor: 'blue.500', color: 'blue.500' }}
            onClick={(event) => {
              event.preventDefault();
              if (input.length >= 1) {
                setWord(input);
                close();
              }
            }}
          />
        </HStack>
      </FormControl>
    </Stack>
  );
}

export default SearchForm;

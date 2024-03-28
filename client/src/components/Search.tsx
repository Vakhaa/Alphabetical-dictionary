import { Stack, FormControl, FormLabel, Input, Button, HStack } from "@chakra-ui/react";
const Search: React.FC = (props) => {

  return (
    <Stack as='nav' spacing={1} >
      <FormControl>
        <FormLabel>Search a specific word</FormLabel>
        <HStack spacing={1}>
          <Input placeholder="Banana" borderColor="white" _placeholder={{ color: '#ffffff50' }} />
          <Button bg="blue.500" color="white" border="1px solid white"
            _hover={{ bg: "white", borderColor: 'blue.500', color: 'blue.500' }}>
            Send
          </Button>
        </HStack>
      </FormControl>
    </Stack>
  );
}

export default Search;

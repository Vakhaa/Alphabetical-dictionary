import { Dispatch, SetStateAction, useState } from "react";
import {
  Box, Text, Stack, useToast,
  Flex,
  VStack
} from "@chakra-ui/react";
import Search from "./Search";

const AlphabetNavagiator: React.FC<{ currentLetter: string, setLetter: Dispatch<SetStateAction<string>> }> = ({ currentLetter, setLetter }) => {

  const toast = useToast();
  const [isSearch, setIsSearch] = useState(false);
  return (<>
    <VStack>
      <Box as="a" href={`/home`} key={40} p={1} w="full" textAlign="center"
        bg={isSearch ? 'tomato' : 'white'}
        _hover={{ bg: 'tomato' }}
        onClick={(event) => {
          event.preventDefault();
          setLetter('');
          setIsSearch(true);
          return toast({
            position: 'top',
            render: () => (
              <Box color='white' p={3} bg='blue.500'>
                <Search />
              </Box>),
          })
        }}>
        Word
      </Box>
      <Flex as='nav' p={1} direction={{ base: 'row', md: 'column' }} flexWrap='wrap'>
        {
          alphabet.map((letter, index) => {
            return <Box as="a" href={`/${letter.toLowerCase()}`} key={index} p={1}
              backgroundColor={currentLetter === letter.toLowerCase() ? "tomato" : "bisque"}
              _hover={{ color: currentLetter === letter.toLowerCase() ? 'bisque' : 'tomato' }}
              onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();
                setIsSearch(false);
                setLetter(letter.toLowerCase());
              }}>
              {letter.toUpperCase()}, {letter.toLowerCase()}
            </Box>
          })
        }
      </Flex>
    </VStack>
  </>);
}

export default AlphabetNavagiator;

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
import {
  Dispatch,
  SetStateAction,
  useState
} from "react";
import {
  Box,
  Flex,
  VStack
} from "@chakra-ui/react";
import SearchPopup from "./Search/SearchPopup";
import { useSWRConfig } from 'swr'

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const AlphabetNavagiator: React.FC<{
  currentLetter: string,
  setLetter: Dispatch<SetStateAction<string>>,
  setSearch: Dispatch<SetStateAction<string>>
}> = ({ currentLetter, setLetter, setSearch }) => {

  const [isSearch, setIsSearch] = useState(false);
  const { mutate } = useSWRConfig(); // for clearing cache

  return (<>
    <VStack
      bg="linear-gradient(to right,#ff8029,#ff9752,#ff8e42)"
      w={{ base: "unset", md: "5%" }}
      position="relative"
      boxShadow='3px 0px 10px 0px #0f0f0f50'
    >
      <SearchPopup
        setLetter={setLetter}
        setSearch={setSearch}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      />
      <Flex
        as='nav'
        direction={{ base: 'row', md: 'column' }}
        flexWrap={{ base: 'wrap', md: 'unset' }}
        fontFamily="Plus Jakarta Sans"
        fontSize="small"
        alignItems="center"
      >
        {
          alphabet.map((letter, index) => {

            return <Box
              as="a"
              href={`/${letter.toLowerCase()}`}
              key={index}
              p={1}
              color={currentLetter === letter.toLowerCase() ? "white" : "black"}
              borderTop={currentLetter === letter.toLowerCase() ? "1px solid white" : "unset"}
              borderBottom={currentLetter === letter.toLowerCase() ? "1px solid white" : "unset"}

              _hover={{ color:'white' }}

              onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();

                mutate(`http://localhost:5000/openai/word/${letter.toLowerCase()}/B1/`, undefined);
                setSearch('');
                setIsSearch(false);
                setLetter(letter.toLowerCase());
              }}>
              {letter.toUpperCase()} {letter.toLowerCase()}
            </Box>
          })
        }
      </Flex>
    </VStack>
  </>);
}

export default AlphabetNavagiator;
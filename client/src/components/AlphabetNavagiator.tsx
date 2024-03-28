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

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const AlphabetNavagiator: React.FC<{
  currentLetter: string,
  setLetter: Dispatch<SetStateAction<string>>
}> = ({ currentLetter, setLetter }) => {

  const [isSearch, setIsSearch] = useState(false);

  return (<>
    <VStack>
      <SearchPopup
        setLetter={setLetter}
        isSearch={isSearch}
        setIsSearch={setIsSearch} />

      <Flex as='nav' p={1} direction={{ base: 'row', md: 'column' }} flexWrap='wrap'>
        {
          alphabet.map((letter, index) => {

            return <Box
              as="a"
              href={`/${letter.toLowerCase()}`}
              key={index}
              p={1}
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
import { Dispatch, SetStateAction } from "react";
import {
  IconButton,
  useToast,
  Box,
} from "@chakra-ui/react";
import SearchForm from "./SearchForm";
import { SearchIcon } from "@chakra-ui/icons";

const SearchPopup: React.FC<{
  isSearch: boolean,
  setLetter: Dispatch<SetStateAction<string>>,
  setIsSearch: Dispatch<SetStateAction<boolean>>
}> = ({ isSearch, setIsSearch, setLetter }) => {

  const toast = useToast();
  return (<>
    <IconButton
      aria-label='Search word'
      icon={<SearchIcon />}
      key={40}
      textAlign="center"
      w="full"
      p={1}
      bg={isSearch ? 'tomato' : 'white'}
      
      _hover={{ bg: 'tomato' }}

      onClick={(event) => {
        
        event.preventDefault();
        setLetter('');
        setIsSearch(true);

        return toast({
          position: 'top',
          isClosable: true,
          render: () => (
            <Box color='white' p={3} bg='blue.500' borderRadius={4}>
              <SearchForm
                close={() => {
                  toast.closeAll()
                }}
                setWord={(word) => {
                  setLetter(word.toLowerCase());
                }} />
            </Box>),
        })
      }} />
  </>);
}

export default SearchPopup;

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
  setSearch: Dispatch<SetStateAction<string>>,
  setIsSearch: Dispatch<SetStateAction<boolean>>
}> = ({ isSearch, setIsSearch, setSearch, setLetter }) => {

  const toast = useToast();
  return (<>
    <IconButton
      aria-label='Search word'
      icon={<SearchIcon />}
      key={40}
      borderTopRadius={0}
      borderBottomRadius={18}
      textAlign="center"
      w="full"
      p={1}
      position="relative"
      boxShadow='0px 2px 5px 0px #0f0f0f50'
      bg={isSearch ? 'tomato' : 'white'}

      _hover={{ bg: 'tomato' }}

      onClick={(event) => {

        event.preventDefault();
        setLetter('');
        setSearch('');
        setIsSearch(true);

        return toast({
          position: 'top',
          isClosable: true,
          render: () => (
            <Box
              color='white'
              p={3} bg='blue.500'
              borderRadius={10}
              position="relative"
              boxShadow='3px 5px 10px 0px #0f0f0f50'
            >
              <SearchForm
                close={() => {
                  toast.closeAll()
                }}
                setWord={(word) => {
                  setSearch(word.toLowerCase());
                }} />
            </Box>),
        })
      }} />
  </>);
}

export default SearchPopup;

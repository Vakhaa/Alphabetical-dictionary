import {
  HStack,
  useDisclosure,
  IconButton,
  Tooltip
} from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons';
import FiltersModal from './FiltersModal';

const Filters: React.FC<{
  isHome: boolean,
  showFilters: boolean,
  setLevel: React.Dispatch<React.SetStateAction<string>>,
  setContext: React.Dispatch<React.SetStateAction<string>>
}> = ({ isHome, showFilters, setLevel, setContext }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip
        label="This is a filters for a words."
        aria-label='A filters'
        border="1px solid white"
        borderRadius="6px"
        bg='#ff8029'
        isDisabled={!isHome}
        isOpen={showFilters}
        hasArrow
      >
        <HStack w="max-content" h="max-content"
          position="absolute"
          top={{ base: "5", md: "10" }}
          left={{ base: "unset", md: "10" }}
          right={{ base: "10", md: "unset" }}
          border={isHome ? "1px solid #ff8029" : "unset"}
          borderRadius={isHome ? "6px" : "unset"}
        >
          <IconButton aria-label='Filters' icon={<SettingsIcon />} onClick={onOpen} />
          <FiltersModal isOpen={isOpen} onClose={onClose} setLevel={setLevel} setContext={setContext} />
        </HStack>
      </Tooltip>
    </>
  );
}

export default Filters;

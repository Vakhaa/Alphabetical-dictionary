import {
  HStack,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons';
import FiltersModal from './FiltersModal';

const Filters: React.FC<{
  setLevel: React.Dispatch<React.SetStateAction<string>>,
  setContext: React.Dispatch<React.SetStateAction<string>>
}> = ({ setLevel, setContext }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack w="max-content" h="max-content" 
      position="absolute" 
      top={{base:"5", md:"10"}} 
      left={{base:"unset", md:"10"}}
      right={{base:"10", md:"unset"}}>
        <IconButton aria-label='Filters' icon={<SettingsIcon />} onClick={onOpen} />
        <FiltersModal isOpen={isOpen} onClose={onClose} setLevel={setLevel} setContext={setContext} />
      </HStack>
    </>
  );
}

export default Filters;

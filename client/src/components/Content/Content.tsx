import useSWR from 'swr';
import {
  Flex,
} from '@chakra-ui/react'
import { WordType } from '../../types/WordType';
import MainInformation from './MainInformation';
import AdditionalInformation from './AdditionalInformation';

const fetcher = (url: string) => fetch(url).then(response => response.json()).catch(error => error);

const Content: React.FC<{ word: WordType }> = ({ word }) => {

  const {
    data: image,
    error,
    isLoading
  } = useSWR(`http://localhost:5000/image/${word.word}`, fetcher);

  return (
    <>
      <Flex h="full" w="full" direction={{ base: 'column', md: 'row' }} align='center'>
        <MainInformation image={image} word={word} isLoading={isLoading} />
        <AdditionalInformation word={word} isLoading={isLoading} />
      </Flex>
    </>
  );
}

export default Content;

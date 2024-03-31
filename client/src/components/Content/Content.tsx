import useSWR from 'swr';
import {
  Flex,
} from '@chakra-ui/react'
import MainInformation from './MainInformation';
import AdditionalInformation from './AdditionalInformation';
import { ImageType } from '../../types/ImageType';
import { ErrorImageType } from '../../types/ErrorImageType';
import { DictionaryWordType } from '../../types/DictionaryWordType';

const fetcher = (url: string) => fetch(url).then(response => response.json()).catch(error => error);

const Content: React.FC<{ word: DictionaryWordType | undefined, isWordLoading: boolean }> = ({ word, isWordLoading }) => {

  const {
    data: image,
    isLoading: isImageLoading
  } = useSWR<ImageType, ErrorImageType>(word ? `http://localhost:5000/image/${word.word}` : null, fetcher);

  return (
    <>
      <Flex h="full" w="full" direction={{ base: 'column', md: 'row' }} align='center' gap={10}>
        {(image && word) && <MainInformation image={image} word={word} isLoading={isImageLoading && isWordLoading} />}
        <AdditionalInformation dictionaryWord={word} isLoading={isWordLoading} />
      </Flex>
    </>
  );
}

export default Content;

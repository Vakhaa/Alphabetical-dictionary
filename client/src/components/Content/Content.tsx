import useSWR from 'swr';
import { Flex } from '@chakra-ui/react'
import MainInformation from './MainInformation';
import AdditionalInformation from './AdditionalInformation';
import { ImageType } from '../../types/ImageType';
import { ErrorImageType } from '../../types/ErrorImageType';
import { DictionaryWordType } from '../../types/DictionaryWordType';
import { useEffect, useState } from 'react';

const fetcher = (url: string) => fetch(url).then(response => response.json()).catch(error => error);

const Content: React.FC<{ words: DictionaryWordType[] | undefined, isWordLoading: boolean }> = ({ words, isWordLoading }) => {

  const [word, setWord] = useState<DictionaryWordType | undefined>(undefined);

  const {
    data: image,
    isLoading: isImageLoading
  } = useSWR<ImageType, ErrorImageType>(word ? `${process.env.REACT_APP_SERVER}/image/${word.word}` : null, fetcher);

  useEffect(() => {
    if (words && words.length >= 1)
      setWord(words[0]);
  }, [words])

  return (
    <>
      <Flex h="full" w="full" direction={{ base: 'column', md: 'row' }} align='center' gap={10}>
        <MainInformation image={image} word={word} isImageLoading={isImageLoading} />
        <AdditionalInformation dictionaryWord={word} isLoading={isWordLoading} />
      </Flex>
    </>
  );
}

export default Content;

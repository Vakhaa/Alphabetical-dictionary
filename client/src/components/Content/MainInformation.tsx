import {
  Heading,
  SimpleGrid,
  GridItem,
  VStack,
  Image,
  Text,
  Button,
  HStack,
  Skeleton,
} from '@chakra-ui/react'
import { ImageType } from '../../types/ImageType';
import { ErrorImageType } from '../../types/ErrorImageType';
import { DictionaryWordType } from '../../types/DictionaryWordType';
import { useEffect, useState } from 'react';


const MainInformation: React.FC<{
  word: DictionaryWordType | undefined,
  image: ImageType & ErrorImageType | undefined,
  isImageLoading: boolean
}> = ({ word, image, isImageLoading }) => {

  const [audio, setAudio] = useState<HTMLAudioElement | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (word?.phonetics &&
      word?.phonetics?.length >= 1 &&
      word?.phonetics[0].audio)
      setAudio(new Audio(word?.phonetics[0].audio));


    return (() => {
      setAudio(undefined);
    });
  }, [word, word?.phonetics])

  useEffect(() => {
    setTimeout(() => setIsLoading(isImageLoading), 1000);
  }, [isImageLoading])

  return (<>
    <VStack w={{ base: '100%', md: '50%' }}>
      <SimpleGrid columns={1} columnGap={3} rowGap={6} w="fit-content">

        <GridItem colSpan={1}>
          <Heading size='2xl'>
            {word?.word}
          </Heading>
          <HStack pt={5} pb={1} position="relative">
            {(word && word?.phonetics[0]?.text) && <Text>[ {word?.phonetics[0].text} ]</Text>}
            {(audio && word && word?.phonetics[0].audio) && <Button position="absolute" right="0" onClick={() => audio.play()}>Audio</Button>}
          </HStack>
        </GridItem>
        {/* box size for skeleton */}
        <GridItem colSpan={1}>
          <Skeleton isLoaded={!isLoading} fadeDuration={2} boxSize="400px">
            {image && <Image src={image.urls?.raw || image.message} objectFit='cover' alt={word?.word} boxSize="400px" />}
          </Skeleton>
        </GridItem>
      </SimpleGrid>
    </VStack>
  </>);
}

export default MainInformation;

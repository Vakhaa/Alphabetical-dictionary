import {
  Heading,
  SimpleGrid,
  GridItem,
  VStack,
  Image,
  Text,
  Skeleton,
  Button,
  HStack,
} from '@chakra-ui/react'
import { ImageType } from '../../types/ImageType';
import { ErrorImageType } from '../../types/ErrorImageType';
import { DictionaryWordType } from '../../types/DictionaryWordType';
import { useEffect, useState } from 'react';


const MainInformation: React.FC<{
  word: DictionaryWordType | undefined,
  image: ImageType & ErrorImageType | undefined,
  isLoading: boolean
}> = ({ word, image, isLoading }) => {

  const [audio, setAudio] = useState<HTMLAudioElement | undefined>();

  useEffect(() => {
    if (word?.phonetics[0].audio)
      setAudio(new Audio(word?.phonetics[0].audio));

  }, [word, word?.phonetics[0].audio])

  return (
    <VStack w={{ base: '100%', md: '50%' }} pb={{ base: '15px', md: '0px' }} >
      <SimpleGrid columns={1} columnGap={3} rowGap={6} w="fit-content">

        <GridItem colSpan={1}>
          <Skeleton isLoaded={!isLoading} fadeDuration={4}>
            <Heading size='2xl'>
              {word?.word}
            </Heading>
            <HStack pt={5} pb={1} position="relative">
              {(word && word?.phonetics[0]?.text) && <Text>[ {word?.phonetics[0].text} ]</Text>}
              {(audio && word && word?.phonetics[0].audio) && <Button position="absolute" right="0" onClick={() => audio?.play()}>Audio</Button>}
            </HStack>
          </Skeleton>
        </GridItem>

        <GridItem colSpan={1}>
          <Skeleton isLoaded={!isLoading} fadeDuration={4}>
            {image && <Image src={image.urls?.raw || image.message} objectFit='cover' alt={word?.word} boxSize="400px" />}
          </Skeleton>
        </GridItem>

      </SimpleGrid>
    </VStack>
  );
}

export default MainInformation;

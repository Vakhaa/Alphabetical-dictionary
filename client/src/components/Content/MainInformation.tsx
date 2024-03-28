import {
  Heading,
  SimpleGrid, GridItem,
  VStack, Image,
  Skeleton,
} from '@chakra-ui/react'
import { WordType } from '../../types/WordType';
import { ImageType } from '../../types/ImageType';


const MainInformation: React.FC<{
  word: WordType,
  image: ImageType,
  isLoading: boolean
}> = ({ word, image, isLoading }) => {

  return (
    <VStack w='50%' pb={{ base: '15px', md: '0px' }} >
      <SimpleGrid columns={1} columnGap={3} rowGap={6} w="full">

        <GridItem colSpan={1}>
          <Skeleton isLoaded={!isLoading} fadeDuration={4}>
            <Heading size='2xl'>
              {word?.word}
            </Heading>
          </Skeleton>
        </GridItem>

        <GridItem colSpan={1}>
          <Skeleton isLoaded={!isLoading} fadeDuration={4}>
            {image?.data && <Image src={image?.data} objectFit='cover' alt={word.word} boxSize="400px" />}
          </Skeleton>
        </GridItem>

      </SimpleGrid>
    </VStack>
  );
}

export default MainInformation;

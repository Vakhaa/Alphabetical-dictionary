import {
  SkeletonText,
  SimpleGrid,
  GridItem,
  VStack,
  Text,
  Heading,
} from '@chakra-ui/react'
import { WordType } from '../../types/WordType';
import Definitions from './Definitions';

const AdditionalInformation: React.FC<{ word: WordType, isLoading: boolean }> = ({ word, isLoading }) => {

  return (
    <>
      <VStack w='50%'>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={1}>
            <SkeletonText isLoaded={!isLoading} fadeDuration={4}>
              <Heading>
                Origin
              </Heading>
            </SkeletonText>
          </GridItem>
          <GridItem colSpan={1}>
            <SkeletonText isLoaded={!isLoading} fadeDuration={4}>
              <Text>
                {word.origin}
              </Text>
            </SkeletonText>
          </GridItem>
          <GridItem colSpan={2}>
            <SkeletonText isLoaded={!isLoading} fadeDuration={4}>
              <Definitions word={word} />
            </SkeletonText>
          </GridItem>
          {/* <GridItem colSpan={2}>
            <SkeletonText isLoaded={!isLoading} fadeDuration={4}>
              <Text>
                Prononsiation
              </Text>
            </SkeletonText>
          </GridItem> */}
        </SimpleGrid>
      </VStack>
    </>
  );
}

export default AdditionalInformation;

import {
  SkeletonText,
  SimpleGrid,
  GridItem,
  VStack,
} from '@chakra-ui/react'
import Definitions from './Definitions';
import { DictionaryWordType } from '../../types/DictionaryWordType';

const AdditionalInformation: React.FC<{ dictionaryWord: DictionaryWordType | undefined, isLoading: boolean }> = ({ dictionaryWord, isLoading }) => {

  return (
    <>
      <VStack w={{ base: '100%', md: '50%' }} h="100%">
        <SimpleGrid
          columns={2}
          columnGap={3}
          rowGap={6}
          w="full"
          overflowY={{base: "unset", md:"auto"}}
          textAlign="left"
        >
          {/* <GridItem colSpan={1}>
            <SkeletonText isLoaded={!isLoading} fadeDuration={4}>
              <Heading as="h3">
                Origin
              </Heading>
            </SkeletonText>
          </GridItem>
          <GridItem colSpan={1}>
            <SkeletonText isLoaded={!isLoading} fadeDuration={4}>
              <Heading as="h3">
                Origin 2
                // {dictionaryWord?.origin}
              </Heading>
            </SkeletonText>
          </GridItem> */}
          <GridItem colSpan={2}>
            <SkeletonText isLoaded={!isLoading} fadeDuration={4}>
              <Definitions dictionaryWord={dictionaryWord} />
            </SkeletonText>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </>
  );
}

export default AdditionalInformation;

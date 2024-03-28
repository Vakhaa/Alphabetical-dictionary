import useSWR from 'swr';
import {
  Text, Heading,
  SimpleGrid, GridItem,
  VStack, Image,
  Skeleton, SkeletonText,
  Flex
} from '@chakra-ui/react'
import { } from '@chakra-ui/react'
import { Word } from '../types/Word';

const fetcher = (url: string) => fetch(url).then(response => response.json()).catch(error => error);

const LetterCard: React.FC<{ word: Word }> = ({ word }) => {

  const {
    data: image,
    error,
    isLoading
  } = useSWR(`http://localhost:5000/image/${word.word}`, fetcher);


  return (
    <>
      <Flex h="full" w="full" direction={{ base: 'column', md: 'row' }} align='center'>
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
              {(!image?.data && !isLoading) && <Image src="https://iaaglobal.s3.amazonaws.com/bulk_images/no-image.png" objectFit='cover' alt={word.word} boxSize="100%" />}
            </GridItem>
          </SimpleGrid>
        </VStack>
        {/* other */}
        <VStack w='50%'>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={1}>
              <SkeletonText isLoaded={!isLoading} fadeDuration={4}>
                <Text>
                  Description
                </Text>
              </SkeletonText>
            </GridItem>
            <GridItem colSpan={1}>
              <SkeletonText isLoaded={!isLoading} fadeDuration={4}>
                <Text>
                  Specification
                </Text>
              </SkeletonText>
            </GridItem>
            <GridItem colSpan={2}>
              <SkeletonText isLoaded={!isLoading} fadeDuration={4}>
                <Text>
                  Examples
                </Text>
              </SkeletonText>
            </GridItem>
            <GridItem colSpan={2}>
              <SkeletonText isLoaded={!isLoading} fadeDuration={4}>
                <Text>
                  Prononsiation
                </Text>
              </SkeletonText>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Flex>
    </>
  );
}

export default LetterCard;

import useSWR from 'swr';
import {
  Text, Heading,
  SimpleGrid, GridItem,
  VStack, HStack, Image,
  Divider, AspectRatio,
  Skeleton, SkeletonText,
  Flex
} from '@chakra-ui/react'
import { } from '@chakra-ui/react'

const fetcher = (url: string) => fetch(url).then(response => response.json()).catch(error => error);

type Word = {
  rhymes: any
  word: string
  pronunciation: any
}

const LetterCard: React.FC<{ word: Word }> = ({ word }) => {

  const {
    data: image,
    error,
    isLoading
  } = useSWR(`http://localhost:5000/image/${word.word}`, fetcher);

  {/* as="h1" fontSize='54px' */ }
  if (isLoading) return (<>
    <HStack>
      <VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={1}>
            <Heading size='2xl'>
              <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Heading>
          </GridItem>
          <GridItem colSpan={1}>
            <Skeleton h='150px' w='150px' />
          </GridItem>
        </SimpleGrid>
      </VStack>
      {/* other */}
      <VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={1}>
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          </GridItem>
          <GridItem colSpan={1}>
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          </GridItem>
          <GridItem colSpan={2}>
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          </GridItem>
          <GridItem colSpan={2}>
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          </GridItem>
        </SimpleGrid>
      </VStack>
    </HStack>
  </>)
  // isLoading vs Is validating
  return (
    <>
      <Flex h="full" w="full" direction={{ base: 'column', md: 'row' }} align='center'>
        <VStack w='50%' pb={{ base: '15px', md: '0px' }} >
          <SimpleGrid columns={1} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={1}>
              <Heading size='2xl'>
                {word?.word}
              </Heading>
            </GridItem>
            <GridItem colSpan={1}>
              {image?.data && <Image src={image.data} objectFit='cover' alt={word.word} boxSize="400px" />}
              {!image?.data && <Image src="https://iaaglobal.s3.amazonaws.com/bulk_images/no-image.png" objectFit='cover' alt={word.word} boxSize="100%" />}
            </GridItem>
          </SimpleGrid>
        </VStack>
        {/* other */}
        <VStack w='50%'>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={1}>
              <Text>
                Description
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text>
                Specification
              </Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Text>
                Examples
              </Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Text>
                Prononsiation
              </Text>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Flex>
    </>
  );
}

export default LetterCard;

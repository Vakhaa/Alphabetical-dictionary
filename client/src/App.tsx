import { Container, Flex, Stack, Text } from '@chakra-ui/react';
import AlphabetNavagiator from './components/Navigation/AlphabetNavagiator';
import LetterCard from './components/Content/Content';
import { useState } from 'react'
import useSWR from 'swr';
import { WordType } from './types/WordType';
import Footer from './components/Footer/Footer';

const fetcher = (url: string) => fetch(url).then(response => response.json()).catch(error => error);

const App: React.FC = () => {

  const [letter, setLetter] = useState('');

  const {
    data: word,
    error: wordError,
    isValidating: isWordValidating,
  } = useSWR<WordType>(letter.length >= 1 ? `http://localhost:5000/dictionary/${letter}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return (
    <Container maxW='full' maxH='full' p={0} bg='gray.50'>
      <Flex h="100vh" direction={{ base: 'column', md: 'row' }}>
        <AlphabetNavagiator currentLetter={letter} setLetter={setLetter} />
        <Stack spacing={10} w="full" h="full" p={10} alignItems={'flex-start'} as="center" bg="#F5F5F5 ">
          {word && <LetterCard word={word} />}
          {!isWordValidating && wordError}
        </Stack>

        <Footer />
      </Flex>
    </Container>
  );
}

export default App;

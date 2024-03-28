import { Container, Flex, Stack } from '@chakra-ui/react';
import './App.css';
import AlphabetNavagiator from './components/AlphabetNavagiator';
import LetterCard from './components/LetterCard';
import { useState } from 'react'
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(response => response.json()).catch(error => error);

const App: React.FC = () => {

  const [letter, setLetter] = useState('');

  type Word = {
    rhymes: any
    word: string
    pronunciation: any
  }

  const {
    data: word,
    error: wordError,
    isValidating: isWordValidating,
  } = useSWR<Word>(letter.length >= 1 ? `http://localhost:5000/dictionary/${letter}` : null, fetcher);

  return (
    <Container maxW='full' maxH='full' p={0} bg='gray.50'>
      <Flex h="100vh"  direction={{base:'column', md:'row'}}>
        <AlphabetNavagiator currentLetter={letter} setLetter={setLetter} />
        <Stack spacing={10} w="full" h="full" p={10} alignItems={'flex-start'} as="center" bg="#6B46C1">
          {word && <LetterCard word={word} />}
          {!isWordValidating && wordError}
        </Stack>
      </Flex>
    </Container>
  );
}

export default App;
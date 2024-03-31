import { Container, Flex, Stack } from '@chakra-ui/react';
import AlphabetNavagiator from './components/Navigation/AlphabetNavagiator';
import Content from './components/Content/Content';
import { useState } from 'react'
import useSWR from 'swr';
import { WordType } from './types/WordType';
import Footer from './components/Footer/Footer';
import { DictionaryWordType } from './types/DictionaryWordType';
import NotFoundContent from './components/NotFoundContent';

const fetcher = (url: string) => fetch(url).then(response => response.json());

const App: React.FC = () => {

  const [letter, setLetter] = useState('');
  const [search, setSearch] = useState('');

  const {
    data: word,
  } = useSWR<WordType>(letter.length >= 1 ? `http://localhost:5000/openai/word/${letter}/B1/` : null, fetcher, {
    // for caching
    // revalidateIfStale: false,
    revalidateOnFocus: false,
    // revalidateOnReconnect: false
  }
  );

  const {
    data: dictionaryWord,
    error: dictionaryWordError,
    isLoading: isDictionaryWordLoading,
  } = useSWR<DictionaryWordType[], { message?: string }>(
    (word || search.length > 1) ?
      `http://localhost:5000/dictionary/search/${word?.word.toLowerCase() || search}` :
      null, fetcher
  );

  return (
    <Container maxW='full' maxH='full' p={0} bg='gray.50'>
      <Flex h="100vh" direction={{ base: 'column', md: 'row' }}>
        <AlphabetNavagiator currentLetter={letter} setLetter={setLetter} setSearch={setSearch} />
        <Stack spacing={10} w="full" h="full" p={10} alignItems={'flex-start'} as="center" bg="#F5F5F5 ">
          {dictionaryWord && <Content word={dictionaryWord[0]} isWordLoading={isDictionaryWordLoading} />}
          {dictionaryWordError && <NotFoundContent />}
        </Stack>

        <Footer />
      </Flex>
    </Container>
  );
}

export default App;

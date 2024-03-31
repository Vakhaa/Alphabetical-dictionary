import { Container, Flex, VStack } from '@chakra-ui/react';
import AlphabetNavagiator from './components/Navigation/AlphabetNavagiator';
import Content from './components/Content/Content';
import { useMemo, useState } from 'react'
import useSWR from 'swr';
import { WordType } from './types/WordType';
import Footer from './components/Footer/Footer';
import { DictionaryWordType } from './types/DictionaryWordType';
import NotFoundContent from './components/NotFoundContent';
import Filters from './components/Filters/Filters';

const fetcher = (url: string) => fetch(url).then(response => response.json());

const App: React.FC = () => {

  const [letter, setLetter] = useState('');
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('intermediate');
  const [context, setContext] = useState('');

  const {
    data: wordWithoutContext,
  } = useSWR<WordType>((letter.length >= 1) && context === '' ? `http://localhost:5000/openai/word/${letter}/${level}/` : null, fetcher, {
    // for caching
    // revalidateIfStale: false,
    revalidateOnFocus: false,
    // revalidateOnReconnect: false
  }
  );

  const {
    data: wordWithContext,
  } = useSWR<WordType>((letter.length >= 1) && context !== '' ? `http://localhost:5000/openai/word/${letter}/${level}/${context}` : null, fetcher, {
    revalidateOnFocus: false,
  }
  );

  const word = useMemo(() => wordWithoutContext || wordWithContext, [wordWithoutContext, wordWithContext]);

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
    <Container maxW='full' maxH='full' p={0} bg='gray.50' overflow={{ base: "scroll", md: "clip" }}>
      <Flex h="100vh" w="100%" direction={{ base: 'column', md: 'row' }} gap="0"  >
        <AlphabetNavagiator currentLetter={letter} setLetter={setLetter} setSearch={setSearch} />
        <VStack as="div" w="full" h="full"
          p={{ base: 2, md: 10 }}
          pl={{ base: 10, md: 5 }}
          pr={{ base: 10, md: 5 }}
          alignItems={'flex-start'}
          bg="#F5F5F5" position="relative">
          <Filters setLevel={setLevel} setContext={setContext} />
          {dictionaryWord && <Content word={dictionaryWord[0]} isWordLoading={isDictionaryWordLoading} />}
          {dictionaryWordError && <NotFoundContent />}
        </VStack>

        <Footer />
      </Flex>
    </Container>
  );
}

export default App;

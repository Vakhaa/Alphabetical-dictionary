import { Container, Flex, VStack } from '@chakra-ui/react';
import AlphabetNavagiator from './components/Navigation/AlphabetNavagiator';
import Content from './components/Content/Content';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import useSWR from 'swr';
import { WordType } from './types/WordType';
import Footer from './components/Footer/Footer';
import { DictionaryWordType } from './types/DictionaryWordType';
import NotFoundContent from './components/NotFoundContent';
import Filters from './components/Filters/Filters';
import WelcomeHome from './components/WelcomeHome';

const fetcher = (url: string) => fetch(url).then(response => response.json());

const App: React.FC = () => {

  const [letter, setLetter] = useState('');
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('beginner');
  const [context, setContext] = useState('');

  const [isHome, setIsHome] = useState(true);
  const [showFooter, setShowFooter] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const {
    data: wordWithoutContext,
  } = useSWR<WordType>((letter.length >= 1) && context === '' ? `${process.env.REACT_APP_SERVER}/openai/word/${letter}/${level}/` : null, fetcher, {
    // for caching
    // revalidateIfStale: false,
    revalidateOnFocus: false,
    // revalidateOnReconnect: false
  }
  );

  const {
    data: wordWithContext,
  } = useSWR<WordType>((letter.length >= 1) && context !== '' ?
    `${process.env.REACT_APP_SERVER}/openai/word/${letter}/${level}/${context}` :
    null, fetcher, {
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
      `${process.env.REACT_APP_SERVER}/dictionary/search/${word?.word.toLowerCase() || search}` :
      null, fetcher
  );

  useEffect(() => {
    if (showFooter)
      setTimeout(() => setShowFooter(false), 1000);
    if (showFilters)
      setTimeout(() => setShowFilters(false), 1000);
  }, [showFooter, showFilters])

  useLayoutEffect(()=>{
    fetch(process.env.REACT_APP_SERVER || "");
  },[]);

  return (
    <Container maxW='100vw' maxH='100vh' p={0} bg='gray.50' overflow={{ base: "scroll", md: "clip" }}>
      <Flex h="100vh" w="100%" direction={{ base: 'column', md: 'row' }} gap="0"  >
        <AlphabetNavagiator currentLetter={letter} level={level} setLetter={setLetter} setSearch={setSearch} setIsHome={setIsHome} />
        <VStack as="div" w="full" h="full"
          p={{ base: 2, md: 10 }}
          pl={{ base: 10, md: 5 }}
          pr={{ base: 10, md: 5 }}
          alignItems={'flex-start'}
          bg="#F5F5F5" position="relative">
          <Filters setLevel={setLevel} setContext={setContext} isHome={isHome} showFilters={showFilters} />
          {(dictionaryWord || (!dictionaryWord && isDictionaryWordLoading)) && <Content words={dictionaryWord} isWordLoading={isDictionaryWordLoading} />}
          {isHome && <WelcomeHome setShowFooter={setShowFooter} setShowFilters={setShowFilters} />}
          {dictionaryWordError && <NotFoundContent />}
        </VStack>

        <Footer isHome={isHome} showFooter={showFooter} />
      </Flex>
    </Container>
  );
}

export default App;

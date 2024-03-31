import {
  Text,
  Heading,
  Box,
  Divider,
  Stack,
} from '@chakra-ui/react'
import { DictionaryWordType } from '../../types/DictionaryWordType';

const Definitions: React.FC<{ dictionaryWord: DictionaryWordType | undefined }> = ({ dictionaryWord }) => {

  return (
    <>
      {dictionaryWord && dictionaryWord?.meanings?.map(meaning => {

        return <>
          <Box mb={5} mt={5}>
            <Heading as="h3" size="lg">Part of speech: {meaning.partOfSpeech}</Heading>
            {meaning.definitions.map((unit, index) => {
              return <Stack as="span">
                <Heading as="h4" size="md" mt={1} >Definitions:</Heading>
                <Text>{index + 1}. {unit.definition}</Text>
                {unit.example && <Text>Example: {unit.example}</Text>}
                <Synonyms synonyms={unit.synonyms} />
                <Antonyms antonyms={unit.antonyms} />
              </Stack>
            })}
          </Box>
          <Divider borderColor='#00000050' />
        </>
      })}
    </>
  );
}

export default Definitions;

const Synonyms: React.FC<{ synonyms: string[] }> = ({ synonyms }) => {

  if (synonyms.length < 1) return <></>;


  return (
    <>
      <Heading as="h4" size="md">Synonums:</Heading>
      <Text>
        {synonyms.map((synonym, index) => {
          return `${index+1}. ${synonym} \n`
        })}
      </Text>
    </>
  );
}

const Antonyms: React.FC<{ antonyms: string[] }> = ({ antonyms }) => {

  if (antonyms.length < 1) return <></>;


  return (
    <>
      <Heading as="h4" size="md">Antonyms:</Heading>
      <Text>
        {antonyms.map((antonym, index) => {
          return `${index+1}. ${antonym} \n`
        })}
      </Text>
    </>
  );
}

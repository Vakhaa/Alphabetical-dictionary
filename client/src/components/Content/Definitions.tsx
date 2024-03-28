import {
  Text,
  Heading,
} from '@chakra-ui/react'
import { WordType } from '../../types/WordType';

const Definitions: React.FC<{ word: WordType }> = ({ word }) => {

  return (
    <>
      {word?.meanings?.map(meaning => {

        return <>
          <Heading>{meaning.partOfSpeech}</Heading>
          <Heading>Definitions:</Heading>
          {meaning.definitions.map((unit, index) => {
            return <>
              <Text>{index + 1}. {unit.definition}</Text>
              <Text>Example: {unit.example}</Text>
              <Synonyms synonyms={unit.synonyms} />
              <Antonyms antonyms={unit.antonyms} />
            </>
          })}
        </>
      })}
    </>
  );
}

export default Definitions;

const Synonyms: React.FC<{ synonyms: string[] }> = ({ synonyms }) => {

  if (synonyms.length >= 1) return <></>;


  return (
    <>
      <Heading>Synonums:</Heading>
      <Text>
        {synonyms.map((synonym, index) => {
          return `${index}. ${synonym} \n`
        })}
      </Text>
    </>
  );
}

const Antonyms: React.FC<{ antonyms: string[] }> = ({ antonyms }) => {

  if (antonyms.length >= 1) return <></>;


  return (
    <>
      <Heading>Synonums:</Heading>
      <Text>
        {antonyms.map((antonym, index) => {
          return `${index}. ${antonym} \n`
        })}
      </Text>
    </>
  );
}

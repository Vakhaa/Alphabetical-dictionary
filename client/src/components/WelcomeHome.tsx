import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  VStack,
  Show,
  Heading,
  List,
  ListIcon,
  ListItem,
  Highlight,
  Button,
  Tooltip,
} from '@chakra-ui/react'

const WelcomeHome: React.FC<{
  setShowFooter: React.Dispatch<React.SetStateAction<boolean>>,
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>,
}> = ({ setShowFooter, setShowFilters }) => {

  return (
    <>
      <VStack w='100%' h='100%' justifyContent="center" spacing={10}>

        <Heading as="h2" color="#ff8029">Welcome home, buddy!</Heading>
        <List spacing={2}>

          <ListItem>
            <ListIcon as={ChevronRightIcon} color='#ff8029' />
            You can find the&#8192;
            <Highlight query="navigation" styles={{ px: '1', py: '1px', bg: 'orange.200', rounded: 'full' }}>navigation</Highlight>
            &#8192;on the&#8192;
            <Show above='md'><Highlight query="left" styles={{ px: '1', py: '1px', bg: 'orange.200', rounded: 'full' }}>left</Highlight></Show>
            <Show below='md'><Highlight query="top" styles={{ px: '1', py: '1px', bg: 'orange.200', rounded: 'full' }}>top</Highlight></Show>
            &#8192; side of your screen.
          </ListItem>

          <ListItem>
            <ListIcon as={ChevronRightIcon} color='#ff8029' />
            By selecting and pressing any letter, you will receive a random word that starts with that letter.
          </ListItem>

          <ListItem>
            <ListIcon as={ChevronRightIcon} color='#ff8029' />
            In the&#8192;
            <Tooltip label='*Click*' placement='top' bg='#ff8029' hasArrow defaultIsOpen>
              <Button colorScheme="orange" variant='link' onClick={() => setShowFilters(true)}>filters</Button>
            </Tooltip>
            , you can choose the level of complexity for words and their context.
          </ListItem>

          <ListItem>
            <ListIcon as={ChevronRightIcon} color='#ff8029' />
            <Highlight query="search bar" styles={{ px: '1', py: '1px', bg: 'orange.200', rounded: 'full' }}>
              Using the search bar, you can find specific words.
            </Highlight>
          </ListItem>

          <ListItem>
            <ListIcon as={ChevronRightIcon} color='#ff8029' />
            At the&#8192;
            <Show above='md'><Highlight query="bottom" styles={{ px: '1', py: '1px', bg: 'orange.200', rounded: 'full' }}>bottom</Highlight></Show>
            <Show below='md'><Highlight query="right" styles={{ px: '1', py: '1px', bg: 'orange.200', rounded: 'full' }}>right side</Highlight></Show>
            &#8192;of your screen, you can find the clickable button called the&#8192;
            <Button colorScheme="orange" variant='link' onClick={() => setShowFooter(true)}>footer</Button>.
          </ListItem>

          <ListItem>
            <ListIcon as={ChevronRightIcon} color='#ff8029' />
            There will be contact information, a suggestion form, and a Q&A section.
          </ListItem>

        </List>
      </VStack>
    </>
  );
}

export default WelcomeHome;

import {
  Text,
  Stack,
} from '@chakra-ui/react'

const NotFoundContent: React.FC = () => {

  return (
    <>
      <Stack w='100%' h='100%'>
        <Text>Unfortunately, there isn't such a word :(</Text>
      </Stack>
    </>
  );
}

export default NotFoundContent;

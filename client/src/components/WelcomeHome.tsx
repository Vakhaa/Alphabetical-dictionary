import {
  Text,
  Stack,
} from '@chakra-ui/react'

const WelcomeHome: React.FC = () => {

  return (
    <>
      <Stack w='100%' h='100%' textAlign="center" justifyContent="center">
        <Text>Welcome home, buddy!</Text>
      </Stack>
    </>
  );
}

export default WelcomeHome;

import {
  Heading,
  Button,
  Flex,
  Text,
  Box,
  SimpleGrid,
  useColorModeValue,
  Wrap,
  WrapItem,
  Center,
  Link,
} from "@chakra-ui/react";
import useAuth from "src/hooks/useAuth";

function Home() {
  const { user, signin } = useAuth();

  return (
    <Box>
      <h1>Home</h1>
      <Link href="/sobre">
        <a>Acessar página Sobre</a>
      </Link>

      <button onClick={() => signin()}>Entrar com github</button>
    </Box>
  );
}

export default Home;

import { useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useMediaQuery,
  Heading,
  Text,
  Container,
  Flex
} from "@chakra-ui/react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [isLargerThan612] = useMediaQuery("(max-width: 612px)");
  return (
    <Flex
      flexDir={isLargerThan612 ? "column" : "row"}
      minH={"40vh"}
      align={"center"}
      justify={"center"}
      bg="#8052c3"
    >
      <Container
        maxW={"lg"}
        bg="#8052c3"
        rounded={"lg"}
        p={6}
        direction={"column"}
      >
        <Heading
          as={"h2"}
          fontSize="xl"
          textAlign={"center"}
          mb={5}
          color="white"
        >
          Assine nossa newslatter
        </Heading>
        <Text fontSize="small" color="white" p="5">
          cadastre-se para receber nossas novidades e descontos{" "}
        </Text>
        <Stack
          direction={isLargerThan612 ? "column" : "row"}
          as={"form"}
          spacing={"12px"}
          onSubmit={(e) => {
            e.preventDefault();

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === "fail@example.com") {
                return;
              }
            }, 1000);
          }}
        >
          <FormControl
            display="flex"
            flexDir={isLargerThan612 ? "column" : "row"}
          >
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400"
              }}
              id={"email"}
              type={"text"}
              required
              outline="none"
              p="5"
              placeholder={"nome"}
              aria-label={"Seu nome"}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400"
              }}
              id={"email"}
              type={"email"}
              required
              outline="none"
              p="5"
              placeholder={"email"}
              aria-label={"Seu Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              backgroundColor="orange"
              color="white"
              w="100%"
              type="submit"
              border="none"
              p="6"
              ml={isLargerThan612 ? "0" : "10"}
            >
              Enviar
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  );
}

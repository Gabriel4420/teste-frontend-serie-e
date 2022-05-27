import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Img,
  Flex,
  useMediaQuery,
  Heading
} from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg="gray"
      rounded={"full"}
      w={10}
      h={10}
      p="10"
      mr="2"
      borderRadius="50%"
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "orange"
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const [isLargerThan612] = useMediaQuery("(max-width: 612px)");
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={isLargerThan612 ? 1 : 4} spacing={8}>
          <Stack align={isLargerThan612 ? "center" : "flex-start"}>
            <ListHeader>
              <Img
                src="./images/Logo.png"
                alt="logomarca love pet"
                h="40"
                w="full"
              />
            </ListHeader>
            <Container
              as={Stack}
              py={4}
              direction="row"
              justify="center"
              align="center"
            >
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter size="50" color="white" />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaFacebook size="50" color="white" />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram size="50" color="white" />
              </SocialButton>
            </Container>
            <Text fontSize="10">&copy; 2019 - CNPJ 00.000.000/0000-00</Text>
            <Text fontSize="10"> Rua tal de tal, 123 - Cidade - Estado</Text>
          </Stack>
          <Stack align={isLargerThan612 ? "center" : "flex-start"}>
            <ListHeader>
              <Heading color="#8052c3" fontSize="large">
                PET STORE
              </Heading>
            </ListHeader>
            <Text fontSize="medium">Quem Somos</Text>
            <Text fontSize="medium">Como Comprar</Text>
            <Text fontSize="medium">Trocas e Devoluções</Text>
            <Text>Fretes e Entregas</Text>
          </Stack>

          <Stack align={isLargerThan612 ? "center" : "flex-start"}>
            <ListHeader>
              <Heading color="#8052c3" fontSize="large">
                CONTATO
              </Heading>
            </ListHeader>
            <Text>(99)9999-9999</Text>
            <Text>(99)9999-9999</Text>
            <Text>petstore@petstore.com</Text>
          </Stack>

          <Stack align={isLargerThan612 ? "center" : "flex-start"}>
            <ListHeader>
              <Heading color="#8052c3" fontSize="large">
                PAGAMENTOS
              </Heading>
            </ListHeader>
            <Img src="images/Pagamento/pagamentos.png" />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box>
        <Container as={Stack} maxW={"6xl"} justify="center" align="center">
          <Text>TECNOLOGIA E DESENVOLVIMENTO </Text>
        </Container>
      </Box>
    </Box>
  );
}

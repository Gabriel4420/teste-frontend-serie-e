import { Box, Flex, Heading, useMediaQuery } from "@chakra-ui/react";

const FeatureMostCommonly = () => {
  const [isLargerThan612] = useMediaQuery("(max-width: 612px)");

  return (
    <Flex
      bgColor="#f9a01d"
      w="full"
      alignItems="center"
      p="30"
      justifyContent="center"
    >
      <Box
        bgImage="linear-gradient(
          rgba(0, 0, 0, 0.548),
          rgba(31, 30, 30, 0.603)
        ),url('images/FaixaCategorias/ração.png')"
        height="100px"
        w="300px"
        bgSize="cover"
        bgRepeat="no-repeat"
        p="10"
        mr="10"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="white" fontSize={isLargerThan612 ? "medium" : "large"}>
          Ração
        </Heading>
      </Box>
      <Box
        bgImage="linear-gradient(
          rgba(0, 0, 0, 0.548),
          rgba(31, 30, 30, 0.603)
        ),url('images/FaixaCategorias/brinquedos.jpg')"
        height="100px"
        w="300px"
        bgSize="cover"
        bgRepeat="no-repeat"
        p="10"
        mr="10"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="white" fontSize={isLargerThan612 ? "medium" : "large"}>
          Brinquedos
        </Heading>
      </Box>
      <Box
        bgImage="linear-gradient(
          rgba(0, 0, 0, 0.548),
          rgba(31, 30, 30, 0.603)
        ),url('images/FaixaCategorias/acessorios.jpeg')"
        height="100px"
        w="300px"
        bgSize="cover"
        bgRepeat="no-repeat"
        p="10"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="white" fontSize={isLargerThan612 ? "medium" : "large"}>
          Acessorios
        </Heading>
      </Box>
    </Flex>
  );
};

export default FeatureMostCommonly;

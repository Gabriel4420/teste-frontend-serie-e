import { Flex, Box, Badge, useMediaQuery } from "@chakra-ui/react";

const PopularCategories = () => {
  const [isLargerThan612] = useMediaQuery("(max-width: 612px)");
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      mt={isLargerThan612 ? "-60" : "0"}
      mb="-300"
    >
      <Box
        w="500px"
        h="500px"
        bgImage="url('https://www.petz.com.br/blog/wp-content/uploads/2020/09/gato-dormindo-felino.jpg')"
        m="10"
        bgSize="contain"
        bgRepeat="no-repeat"
      >
        <Badge backgroundColor="orange" color="white" p="5">
          PARA GATOS
        </Badge>
      </Box>

      <Box
        w="500px"
        h="500px"
        bgImage="url('https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png')"
        m="10"
        bgSize="contain"
        bgRepeat="no-repeat"
      >
        <Badge backgroundColor="orange" color="white" p="5">
          PARA CACHORROS
        </Badge>
      </Box>
    </Flex>
  );
};

export default PopularCategories;

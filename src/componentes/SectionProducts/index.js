import { Flex, Box, useMediaQuery, Badge } from "@chakra-ui/react";

const SectionProducts = ({ py, mt }) => {
  const [isLargerThan612] = useMediaQuery("(max-width: 612px)");
  return (
    <>
      {isLargerThan612 ? (
        <Flex
          alignItems="center"
          justifyContent="center"
          py={py ? py : "50"}
          mt={mt ? mt : "0"}
        >
          <Box
            w="500px"
            h="200px"
            bgImage="url('https://http2.mlstatic.com/D_NQ_NP_823669-MLB29113888075_012019-O.jpg')"
            m="10"
            bgSize="contain"
            bgRepeat="no-repeat"
          />
          <Box
            w="500px"
            h="200px"
            bgImage="url('https://a-static.mlcdn.com.br/800x560/caminha-cama-cachorro-pet-e-gato-soft-fofinha-g-70x70-c-ziper-lavavel-azul-edecasaenxovais/edecasaenxovais/11161776940/e66e5ab4f80b96ab434a1e9e5205f362.jpg')"
            m="10"
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPosition={isLargerThan612 ? "-5px 30px" : "center center"}
          >
            <Badge p="5" bgColor="#8052c3" color="white">
              50% OFF
            </Badge>
          </Box>
          <Box
            w="500px"
            h="200px"
            bgImage="url('https://m.media-amazon.com/images/I/61Owye5mTAL._AC_SX466_.jpg')"
            m="10"
            bgSize="contain"
            bgRepeat="no-repeat"
          />
          <Box
            w="500px"
            h="200px"
            bgImage="url('https://http2.mlstatic.com/D_NQ_NP_823669-MLB29113888075_012019-O.jpg')"
            m="10"
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPosition={isLargerThan612 ? "5px 30px" : "center center"}
          >
            <Badge bgColor="#8052c3" p="5" color="white">
              NOVO
            </Badge>
          </Box>
        </Flex>
      ) : (
        <Flex
          alignItems="center"
          justifyContent="center"
          py={py ? py : "80"}
          mt="-20"
        >
          <Box
            w="500px"
            h="200px"
            bgImage="url('https://http2.mlstatic.com/D_NQ_NP_823669-MLB29113888075_012019-O.jpg')"
            m="10"
            bgSize="contain"
            bgRepeat="no-repeat"
          />
          <Box
            w="500px"
            h="200px"
            bgImage="url('https://a-static.mlcdn.com.br/800x560/caminha-cama-cachorro-pet-e-gato-soft-fofinha-g-70x70-c-ziper-lavavel-azul-edecasaenxovais/edecasaenxovais/11161776940/e66e5ab4f80b96ab434a1e9e5205f362.jpg')"
            m="10"
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPosition={isLargerThan612 ? "-5px 30px" : "center center"}
          >
            <Badge p="5" bgColor="#8052c3" color="white">
              50% OFF
            </Badge>
          </Box>
          <Box
            w="500px"
            h="200px"
            bgImage="url('https://m.media-amazon.com/images/I/61Owye5mTAL._AC_SX466_.jpg')"
            m="10"
            bgSize="contain"
            bgRepeat="no-repeat"
          />
          <Box
            w="500px"
            h="200px"
            bgImage="url('https://sc02.alicdn.com/kf/HTB1gipMhqagSKJjy0Faq6z0dpXaD/223282388/HTB1gipMhqagSKJjy0Faq6z0dpXaD.jpg_.webp')"
            m="10"
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPosition={isLargerThan612 ? "5px 30px" : "center center"}
          >
            <Badge bgColor="#8052c3" p="5" color="white">
              NOVO
            </Badge>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default SectionProducts;

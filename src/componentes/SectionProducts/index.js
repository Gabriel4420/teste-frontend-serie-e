import {
  Flex,
  Box,
  useMediaQuery,
  Badge,
  Img,
  Heading,
  Text,
  SimpleGrid,
  Grid,
  GridItem
} from "@chakra-ui/react";

const SectionProducts = ({ py, mt }) => {
  const [isLargerThan612] = useMediaQuery("(max-width: 612px)");

  const images = [
    {
      title: "Casa de cachorro",
      price: "R$ 99.99",
      url:
        "https://http2.mlstatic.com/D_NQ_NP_823669-MLB29113888075_012019-O.jpg",
      hasBadge: false
    },
    {
      title: "Cama de cachorro e/ou gato",
      price: "R$ 99.99",
      url:
        "https://a-static.mlcdn.com.br/800x560/caminha-cama-cachorro-pet-e-gato-soft-fofinha-g-70x70-c-ziper-lavavel-azul-edecasaenxovais/edecasaenxovais/11161776940/e66e5ab4f80b96ab434a1e9e5205f362.jpg",
      hasBadge: true,
      contentBadge: "50%"
    },
    {
      title: "Brinquedo de Pato",
      price: "R$ 99.99",
      url: "https://m.media-amazon.com/images/I/61Owye5mTAL._AC_SX466_.jpg",
      hasBadge: false
    },
    {
      title: "Kit Gato Cama Completo",
      price: "R$ 99.99",
      url:
        "https://a-static.mlcdn.com.br/800x560/kit-gato-cama-comedouro-caixa-areia-pa-bolinha-mel-dog/wnbijouterias/cat1001kt/1ae9e3ab084b07d55efd90d2edef2558.jpg",
      hasBadge: true,
      contentBadge: "Novo"
    }
  ];

  return (
    <>
      {isLargerThan612 ? (
        <>
          <Grid templateColumns="repeat(2, 1fr)" gap={1}>
            {images.map((item, index) => (
              <GridItem pl="30" w="100%" h="250px" overflowX="hidden" mt="10">
                {item.hasBadge === true && (
                  <Badge p="5" bgColor="#8052c3" color="white">
                    {item.contentBadge}
                  </Badge>
                )}
                <Img src={item.url} w="100px" h="100px" alt={item.title} />
                <Heading fontSize="12px">{item.title}</Heading>
                <Text fontSize="10px">{item.price}</Text>
              </GridItem>
            ))}
          </Grid>
        </>
      ) : (
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          {images.map((item, index) => (
            <GridItem pl="20" w="100%" h="250px" overflowX="hidden" mt="120">
              {item.hasBadge === true && (
                <Badge p="5" bgColor="#8052c3" color="white">
                  {item.contentBadge}
                </Badge>
              )}
              <Img src={item.url} w="100px" h="100px" alt={item.title} />
              <Heading fontSize="12px">{item.title}</Heading>
              <Text fontSize="10px">{item.price}</Text>
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};

export default SectionProducts;

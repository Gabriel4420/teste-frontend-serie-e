import Header from "./componentes/Layout/Header";
import BottomHeader from "./componentes/Layout/BottomHeader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerSlider from "./componentes/BannerSlider";

import FeatureMostCommonly from "./componentes/FeatureMostCommonly";
import SectionProducts from "./componentes/SectionProducts";
import { Flex, useMediaQuery, Box } from "@chakra-ui/react";
import Footer from "./componentes/Layout/Footer";
import PopularCategories from "./componentes/PopularCategories";
import Newsletter from "./componentes/NewsLatter";

export default function App() {
  const [isLargerThan612] = useMediaQuery("(max-width: 612px)");
  return (
    <div className="App">
      <Header />
      <BottomHeader />
      <BannerSlider />
      <FeatureMostCommonly />
      <SectionProducts />
      <PopularCategories />
      <Flex
        direction="column"
        justifyContent="space-between"
        mt={isLargerThan612 ? "0" : "-200px"}
      >
        <SectionProducts py="0" mt="-400px" />
        <SectionProducts py="0" mt="-80px" />
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        bg="#8052c3"
        color="white"
        fontSize="small"
        w="full"
      >
        <Box textTransform="uppercase" p="10">
          entrega gratuita apartir de R$ 99{" "}
        </Box>
        <Box textTransform="uppercase" p="10">
          parcelamento sem juros
        </Box>
        <Box textTransform="uppercase" p="10">
          cadastre-se e ganhe descontos
        </Box>
      </Flex>

      <Newsletter />
      <Footer />
    </div>
  );
}

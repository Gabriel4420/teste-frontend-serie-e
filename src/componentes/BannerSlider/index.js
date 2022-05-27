import { Carousel } from "react-responsive-carousel";
import { Box, Img } from "@chakra-ui/react";
const BannerSlider = () => {
  return (
    <Carousel
      showArrows
      dynamicHeight
      autoPlay
      interval={3000}
      infiniteLoop
      animationHandler="fade"
      showThumbs={false}
    >
      <Box>
        <Img src="./images/banner1.png" />
      </Box>
      <Box>
        <Img src="./images/banner2.webp" w="full" />
      </Box>
    </Carousel>
  );
};

export default BannerSlider;

import { Box, Flex, Img, useMediaQuery } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import InputSearch from "../../InputSearch";

const Header = () => {
  const [isLargerThan612] = useMediaQuery("(max-width: 612px)");

  return (
    <Flex alignItems="center" justifyContent="space-evenly">
      <Box p="10">
        {isLargerThan612 ? (
          <InputSearch pos="relative" t="35px" l="80px" />
        ) : (
          <InputSearch />
        )}
      </Box>
      {isLargerThan612 ? (
        <Box>
          {isLargerThan612 ? (
            <Img
              src="./images/Logo.png"
              alt="logomarca love pet"
              h="40"
              w="full"
              mr="100"
              ml="-210"
            />
          ) : (
            <Img src="./images/Logo.png" alt="logomarca love pet" />
          )}
        </Box>
      ) : (
        <Box p="10">
          {isLargerThan612 ? (
            <Img
              src="./images/Logo.png"
              alt="logomarca love pet"
              h="40"
              w="full"
            />
          ) : (
            <Img src="./images/Logo.png" alt="logomarca love pet" />
          )}
        </Box>
      )}

      <Box p="10">
        <Flex alignItems="center" justifyContent="center">
          {isLargerThan612 ? (
            <>
              <FaUser size="15" style={{ padding: "10", marginLeft: "-30" }} />
              <BsFillCartFill size="15" />
            </>
          ) : (
            <>
              <FaUser size="30" />
              <BsFillCartFill size="30" />
            </>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;

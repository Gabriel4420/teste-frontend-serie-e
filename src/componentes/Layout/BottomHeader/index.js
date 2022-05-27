import { Flex, ListItem, UnorderedList, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const BottomHeader = () => {
  const [isLargerThan612] = useMediaQuery("(max-width: 612px)");
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {isLargerThan612 ? (
        <Flex
          bgColor="#8052c3"
          height="30"
          w="full"
          alignItems="center"
          justifyContent="flex-end"
          mt="30"
          p="0"
        >
          {!showMenu && (
            <UnorderedList
              display="flex"
              listStyleType="none"
              alignItems="center"
              transition="all ease 0.5s"
            >
              <ListItem
                _hover={{ textDecoration: "underline" }}
                pr="3"
                ml="-50"
                fontSize="12px"
              >
                Lorem
              </ListItem>
              <ListItem
                _hover={{ textDecoration: "underline" }}
                pr="3"
                fontSize="12px"
              >
                Lorem
              </ListItem>
              <ListItem
                _hover={{ textDecoration: "underline" }}
                pr="3"
                fontSize="12px"
              >
                Lorem
              </ListItem>
              <ListItem
                _hover={{ textDecoration: "underline" }}
                pr="3"
                fontSize="12px"
              >
                Lorem
              </ListItem>
              <ListItem
                _hover={{ textDecoration: "underline" }}
                pr="3"
                fontSize="12px"
              >
                Lorem
              </ListItem>
              <ListItem
                _hover={{ textDecoration: "underline" }}
                pr="3"
                fontSize="12px"
              >
                Lorem
              </ListItem>
              <ListItem
                _hover={{ textDecoration: "underline" }}
                pr="3"
                fontSize="12px"
              >
                Lorem
              </ListItem>
              <ListItem
                _hover={{ textDecoration: "underline" }}
                pr="3"
                fontSize="12px"
              >
                Lorem
              </ListItem>
            </UnorderedList>
          )}

          <HamburgerIcon
            cursor="pointer"
            onClick={() => setShowMenu(!showMenu)}
            color="orange"
            p="3"
          />
        </Flex>
      ) : (
        <Flex
          bgColor="#8052c3"
          height="30"
          w="full"
          alignItems="center"
          justifyContent="flex-end"
          margin="0"
          p="0"
        >
          {!showMenu && (
            <UnorderedList
              display="flex"
              listStyleType="none"
              alignItems="center"
              transition="all ease 0.5s"
              cursor="pointer"
            >
              <ListItem _hover={{ textDecoration: "underline" }} pr="10">
                Lorem
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }} pr="10">
                Lorem
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }} pr="10">
                Lorem
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }} pr="10">
                Lorem
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }} pr="10">
                Lorem
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }} pr="10">
                Lorem
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }} pr="10">
                Lorem
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }} pr="10">
                Lorem
              </ListItem>
            </UnorderedList>
          )}
          <HamburgerIcon
            onClick={() => setShowMenu(!showMenu)}
            cursor="pointer"
            color="orange"
            p="10"
          />
        </Flex>
      )}
    </>
  );
};

export default BottomHeader;

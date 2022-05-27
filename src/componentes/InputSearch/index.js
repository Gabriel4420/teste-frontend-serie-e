import { Flex, Input, Box } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const InputSearch = ({ type, p, pos, l, r, t, b }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <Flex>
      <Input
        type={type}
        onClick={() => setIsActive(false)}
        onBlur={() => setIsActive(true)}
        border="1px solid grey"
        borderRadius="10px"
        p={p ? p : "5"}
        placeholder="pesquisar"
        position={pos}
        left={l}
        right={r}
        top={t}
        bottom={b}
      />
      {isActive && (
        <Box position={pos} left={l} right={r} top={t} bottom={b}>
          <BsSearch
            style={{
              marginLeft: "-30px",
              marginTop: "5",
              marginRight: "30"
            }}
          />
        </Box>
      )}
    </Flex>
  );
};

export default InputSearch;

import { Box, HStack, Input, Button } from "@chakra-ui/react";
import { useState, FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBox = ({ query }: { query?: string }) => {
  const [inputValue, setInputValue] = useState(query || "");
  const navigate = useNavigate();
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    navigate({ pathname: "/search", search: `?q=${inputValue}` });
  };

  return (
    <Box width="100%">
      <form onSubmit={onSubmit}>
        <HStack>
          <Input
            name="q"
            placeholder="keyword"
            bgColor="white"
            size="lg"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <Button mt={4} colorScheme="teal" type="submit">
            Search
          </Button>
        </HStack>
      </form>
    </Box>
  );
};

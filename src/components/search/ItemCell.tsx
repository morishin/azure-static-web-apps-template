import { ExternalLinkIcon } from "@chakra-ui/icons";
import { VStack, Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { useCallback } from "react";
import { Item } from "../../generated";

export const ItemCell = ({ item }: { item: Item }) => {
  const onClickButton = useCallback(() => {
    window.open(item.itemUrl, "_blank");
  }, [item.itemUrl]);

  return (
    <VStack bg="white" borderRadius="lg" padding={4}>
      <Box width="100%" position="relative" paddingTop="100%">
        {item.imageUrl && (
          <Image src={item.imageUrl} width="100%" height="100%" position="absolute" top={0} objectFit="contain" />
        )}
      </Box>
      <Box>
        <Text
          overflow="hidden"
          style={{
            maxWidth: "100%",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {item.name}
        </Text>
      </Box>
      <Flex flex="1" direction="column" justifyContent="flex-end" alignItems="center" width="100%">
        <Box>
          <Text>${item.price?.toLocaleString() || "- "}</Text>
        </Box>
        <Button
          colorScheme="teal"
          _hover={{ opacity: 0.6 }}
          color="white"
          size="md"
          width="100%"
          marginTop={2}
          onClick={onClickButton}
          aria-label="商品ページを開く"
          rightIcon={<ExternalLinkIcon />}
        >
          Go to item page
        </Button>
      </Flex>
    </VStack>
  );
};

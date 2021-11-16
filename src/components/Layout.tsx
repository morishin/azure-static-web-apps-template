import { Box, Container, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useQueryParams } from "../lib/useQueryParams";
import { SearchBox } from "./home/SearchBox";

export const Layout = ({ hideTitle, children }: { hideTitle?: boolean; children: ReactNode }) => {
  const params = useQueryParams();
  return (
    <VStack boxSizing="border-box" minH="100vh" position="relative" paddingBottom="2em">
      <Container maxW="1100px" alignContent="start" pt={6} pb={6}>
        {!hideTitle && (
          <HStack>
            <Box flex={2}>
              <Link to="/">
                <Heading as="h1" size="md">
                  <Text>Azure Static Web Apps Template</Text>
                </Heading>
              </Link>
            </Box>
            <Box flex={5}>
              <SearchBox query={params.get("q") || undefined} />
            </Box>
            <Box flex={2} />
          </HStack>
        )}
        {children}
      </Container>
      <footer style={{ position: "absolute", bottom: 5 }}>
        <Text fontSize="sm" alignSelf={{ base: "center", sm: "start" }} lineHeight="2em">
          &copy; {new Date().getFullYear()} <a href="https://github.com/morishin">morishin</a> All rights reserved.
        </Text>
      </footer>
    </VStack>
  );
};

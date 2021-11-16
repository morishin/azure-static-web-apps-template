import { Flex, Heading } from "@chakra-ui/react";
import { Layout } from "../Layout";
import { SearchBox } from "./SearchBox";

export const HomePage = () => {
  return (
    <Layout hideTitle={true}>
      <Flex flexDirection="column" paddingTop={200} maxWidth={700} width="50%" marginX="auto" alignItems="center">
        <Heading as="h2" marginBottom={10}>
          Azure Static Web Apps Template
        </Heading>
        <SearchBox />
      </Flex>
    </Layout>
  );
};

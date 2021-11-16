import { Box } from "@chakra-ui/react";
import { GraphQLClient } from "graphql-request";
import { useSearchItemsQuery, Item } from "../../generated";
import { useQueryParams } from "../../lib/useQueryParams";
import { Layout } from "../Layout";
import { ItemGrid } from "./ItemGrid";

const graphqlClient = new GraphQLClient("/api/graphql");

export const SearchPage = () => {
  const params = useQueryParams();
  const { data, isLoading, isError } = useSearchItemsQuery(graphqlClient, { query: params.get("q") || "" });
  return (
    <Layout>
      <Box paddingTop={5}>
        {data ? <ItemGrid items={data?.searchItems} /> : isLoading ? <SkeletonGrid /> : isError ? "error" : null}
      </Box>
    </Layout>
  );
};

const SkeletonGrid = () => {
  const dummyItems = [...Array(12)].map(
    (_, i) =>
      ({
        id: i.toString(),
        itemUrl: "dummy",
        name: "dummy",
      } as Item)
  );
  return <ItemGrid items={dummyItems} skeleton={true} />;
};

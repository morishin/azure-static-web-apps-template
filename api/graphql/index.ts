import { ApolloServer } from "apollo-server-azure-functions";
import { readFileSync } from "fs";
import { join } from "path";
import { resolvers } from "./resolvers";

const schemaPath = join(__dirname, "..", "schema.graphql");
const typeDefs = readFileSync(schemaPath, { encoding: "utf8" });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  debug: process.env.AZURE_FUNCTIONS_ENVIRONMENT === "Development",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  playground: process.env.AZURE_FUNCTIONS_ENVIRONMENT === "Development",
});

// eslint-disable-next-line import/no-default-export
export default server.createHandler({
  cors: {
    origin: "*",
  },
});

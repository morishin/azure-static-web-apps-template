import { Resolvers, Item } from "../generated/resolvers";

export const resolvers: Resolvers = {
  Query: {
    searchItems: async (_parent, args, _context, _info) => {
      const query = args.query;
      const results = await fetchItems(query);
      return results.flat();
    },
  },
};

const fetchItems = async (query: string): Promise<Item[]> => {
  const colors = ["38A169", "ECC94B", "ED8936", "F56565", "38B2AC", "4299E1", "9F7AEA", "ED64A6"];
  return [...Array(8)].map((_, i) => ({
    id: i.toString(),
    name: `${query}${i}`,
    price: i * 100,
    imageUrl: `https://via.placeholder.com/300/${colors[i % colors.length]}/FFFFFF?Text=${query}${i}`,
    itemUrl: "#",
  }));
};

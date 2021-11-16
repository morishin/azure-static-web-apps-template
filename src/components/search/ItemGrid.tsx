import { Grid, Skeleton } from "@chakra-ui/react";
import { Item } from "../../generated";
import { ItemCell } from "./ItemCell";

export const ItemGrid = ({ items, skeleton }: { items: Item[]; skeleton?: boolean }) => {
  return (
    <Grid templateColumns="repeat(auto-fit, 240px)" gap={6}>
      {items.map((item) =>
        skeleton ? (
          <Skeleton>
            <ItemCell key={item.id} item={item} />
          </Skeleton>
        ) : (
          <ItemCell key={item.id} item={item} />
        )
      )}
    </Grid>
  );
};

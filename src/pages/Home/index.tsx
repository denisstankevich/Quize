import { SimpleGrid } from "@chakra-ui/react";
import CardItem from "@/components/CardItem";

export default function Home() {
  return (
    <SimpleGrid columns={[2, null, 3]} spacing={5}>
      <CardItem />
    </SimpleGrid>
  );
}

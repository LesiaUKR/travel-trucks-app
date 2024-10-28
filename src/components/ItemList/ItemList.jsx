import ItemCard from "../ItemCard/ItemCard";
import { CardList } from "./ItemList.styled";

export default function functionItemList({ campers }) {
  return (
    <CardList>
      {campers.map((camper) => (
        <ItemCard key={camper.id} advert={camper} />
      ))}
    </CardList>
  );
}

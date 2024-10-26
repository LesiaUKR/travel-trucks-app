import ItemCard from "../ItemCard/ItemCard";
import { CardList } from "./ItemList.styled";


const ItemList = ({ campers}) => {

  console.log('campers ItemList', campers);
  return (
    <CardList>
      {campers.map((camper) => (
        <ItemCard key={camper.id} advert={camper} />
      ))}
    </CardList>
  );
};

export default ItemList;

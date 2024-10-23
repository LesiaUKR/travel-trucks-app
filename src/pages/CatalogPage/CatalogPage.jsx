import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchAllCampers } from "../../redux/campers/operations";
import { CatalogContainer, CatalogSection } from "./CatalogPage.styled";
import FilterBar from "../../components/FilterBar/FilterBar";
import ItemList from "../../components/ItemList/ItemList";


const CatalogPage = () => {
const dispatch = useDispatch(); 
const campers = useSelector(selectCampers);

useEffect(() => {
  dispatch(fetchAllCampers());
}, [dispatch]);

console.log("campers", campers);
const camperItems = campers?.items || [];
console.log("camperItems", camperItems);

  return (

    <CatalogSection>
    <CatalogContainer>
        <FilterBar />
        <ItemList  campers={camperItems} />
    </CatalogContainer>
    </CatalogSection>
  );
};

export default CatalogPage;

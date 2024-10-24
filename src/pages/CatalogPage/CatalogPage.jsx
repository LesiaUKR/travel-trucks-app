import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchAllCampers } from "../../redux/campers/operations";
import { CatalogContainer, CatalogSection } from "./CatalogPage.styled";
import FilterBar from "../../components/FilterBar/FilterBar";
import ItemList from "../../components/ItemList/ItemList";
import { MainContent } from "../../components/SharedLayout/SharedLayout.styled";


const CatalogPage = () => {
const dispatch = useDispatch(); 
const campers = useSelector(selectCampers);

useEffect(() => {
  dispatch(fetchAllCampers());
}, [dispatch]);


const camperItems = campers?.items || [];


  return (
    <MainContent>
    <CatalogSection>
    <CatalogContainer>
        <FilterBar />
        <ItemList  campers={camperItems} />
    </CatalogContainer>
    </CatalogSection>
    </MainContent>
  );
};

export default CatalogPage;

import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectFilterCampers, selectIsLoading, selectTotalCampers } from "../../redux/campers/selectors";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { AsideContainer, CatalogContainer, CatalogSection } from "./CatalogPage.styled";
import FilterBar from "../../components/FilterBar/FilterBar";
import ItemList from "../../components/ItemList/ItemList";
import { MainContent } from "../../components/SharedLayout/SharedLayout.styled";
import Loader from "../../components/Loader/Loader";
import DefaultBtn from "../../components/DefaultBtn/DefaultBtn";


const CatalogPage = () => {
const dispatch = useDispatch(); 
const filters = useSelector(selectFilterCampers);
const campers = useSelector(selectCampers);
const isLoading  = useSelector(selectIsLoading);
const totalCampers = useSelector(selectTotalCampers); 
const [page, setPage] = useState(1);


useEffect(() => {
  // Початкове завантаження даних
  setPage(1); // Скидаємо сторінку
  dispatch(fetchCampers({ page: 1, filters }));
}, [dispatch, filters]); 

console.log('Campers', campers);


const hasMoreItems = campers.length < totalCampers;
console.log("campers.length", campers.length);
console.log("totalCampers", totalCampers);
console.log("hasMoreItems", hasMoreItems);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchCampers({ page: nextPage, filters}));
  };

  return (
    <MainContent>

          <AsideContainer>
               <FilterBar />
               </AsideContainer>
         
    <CatalogSection>
    <CatalogContainer>


        <div>
        {isLoading?(<Loader/>) :(<ItemList  campers={campers} />)}
    
        {hasMoreItems && !isLoading && (
            <DefaultBtn text="Load More" type="button" onClick={handleLoadMore} />
          )}
        </div>
    </CatalogContainer>
    </CatalogSection>
    </MainContent>
  );
};

export default CatalogPage;

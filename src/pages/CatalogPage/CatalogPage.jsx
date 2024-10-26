import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectCurrentPage,
  selectFilterCampers,
  selectIsLoading,
  selectTotalCampers,
} from "../../redux/campers/selectors";
import { useEffect} from "react";
import { fetchCampers } from "../../redux/campers/operations";
import {
  AsideContainer,
  CatalogContainer,
  CatalogMainContent,
  CatalogSection,
} from "./CatalogPage.styled";
import FilterBar from "../../components/FilterBar/FilterBar";
import ItemList from "../../components/ItemList/ItemList";
import Loader from "../../components/Loader/Loader";
import DefaultBtn from "../../components/DefaultBtn/DefaultBtn";
import { setPage } from "../../redux/campers/slice";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilterCampers);
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const totalCampers = useSelector(selectTotalCampers);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchCampers({ page: currentPage, filters }));
 }, [dispatch, filters, currentPage]);

  const hasMoreItems = campers.length < totalCampers;

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    dispatch(setPage(nextPage));
    dispatch(fetchCampers({ page: nextPage, filters }));
 };

  return (
    <CatalogMainContent>
      <AsideContainer>
        <FilterBar />
      </AsideContainer>
      <CatalogSection>
        <CatalogContainer>
          <div>
            {isLoading ? <Loader /> : <ItemList campers={campers} />}

            {hasMoreItems && !isLoading && (
              <DefaultBtn
                text="Load More"
                type="button"
                onClick={handleLoadMore}
              />
            )}
          </div>
        </CatalogContainer>
      </CatalogSection>
    </CatalogMainContent>
  );
};

export default CatalogPage;

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
  LoadMoreBtn,
  NoItemsFound,
} from "./CatalogPage.styled";
import FilterBar from "../../components/FilterBar/FilterBar";
import ItemList from "../../components/ItemList/ItemList";
import Loader from "../../components/Loader/Loader";
import { clearItems, setPage } from "../../redux/campers/slice";
import { Helmet } from "react-helmet-async";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilterCampers);
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const totalCampers = useSelector(selectTotalCampers);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(setPage(1)); 
    dispatch(clearItems());
    dispatch(fetchCampers({ page: 1, filters }));
  }, [dispatch, filters]);

  const hasMoreItems = campers.length < totalCampers;

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    dispatch(setPage(nextPage));
    dispatch(fetchCampers({ page: nextPage, filters }));
  };

  return (
    <CatalogMainContent>
           <Helmet>
        <title>Travel Trucks Catalog Page</title>
        <meta name="description" content="Look through catalog of the travel trucks" />
      </Helmet>
      <AsideContainer>
        <FilterBar />
      </AsideContainer>
      <CatalogSection>
        <CatalogContainer>
          <div>
          {isLoading ? (
              <Loader />
            ) : campers.length > 0 ? (
              <ItemList campers={campers} />
            ) : (
              <NoItemsFound>
                No items found based on your filters
                </NoItemsFound>
            )}
            {hasMoreItems && !isLoading && campers.length > 0 && (
              <LoadMoreBtn
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

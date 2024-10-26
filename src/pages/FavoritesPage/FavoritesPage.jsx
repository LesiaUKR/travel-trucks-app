import { useDispatch, useSelector } from "react-redux";
import { MainContent } from "../../components/SharedLayout/SharedLayout.styled";
import { selectCampers, selectFavoriteCampers, selectIsLoading } from "../../redux/campers/selectors";
import ItemList from './../../components/ItemList/ItemList';
import { useEffect } from 'react';
import { fetchAllCampers } from "../../redux/campers/operations";
import Loader from "../../components/Loader/Loader";
import { FavoritesContainer, FavoritesSection } from "./FavoritesPage.styled";


const FavoritesPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavoriteCampers);

  useEffect(() => {
    if (!campers.length) {
      dispatch(fetchAllCampers());
    }
  }, [dispatch, campers.length]);

  const camperItems = campers?.items || [];
  const favoriteItems = camperItems.filter(camper => favorites.includes(camper.id));
 
 return (<MainContent>
    <FavoritesSection>
      <FavoritesContainer>
    {isLoading ? (
          <Loader/>
        ) : favoriteItems.length > 0 ? (
          <ItemList campers={favoriteItems} />
        ) : (
          <p>No favorites added yet.</p>
        )}
        </FavoritesContainer>
    </FavoritesSection>
    </MainContent>);
};

export default FavoritesPage;

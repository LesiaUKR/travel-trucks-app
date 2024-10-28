import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ItemList from "@/components/ItemList/ItemList";
import Loader from "@/components/Loader/Loader";
import {
  FavoritesContainer,
  FavoritesSection,
  MainFavoritesContent,
  NoFavoritesText,
} from "./FavoritesPage.styled";

import { fetchAllCampers } from "@/redux/campers/operations";
import {
  selectCampers,
  selectFavoriteCampers,
  selectIsLoading,
} from "@/redux/campers/selectors";

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavoriteCampers);

  useEffect(() => {
    if (campers.length === 0) {
      dispatch(fetchAllCampers());
    }
  }, [dispatch, campers.length]);

  const favoriteItems = campers.filter((camper) =>
    favorites.includes(camper.id)
  );

  return (
    <MainFavoritesContent>
      <FavoritesSection>
        <FavoritesContainer>
          {isLoading ? (
            <Loader />
          ) : favoriteItems.length > 0 ? (
            <ItemList campers={favoriteItems} />
          ) : (
            <NoFavoritesText>No favorites added yet</NoFavoritesText>
          )}
        </FavoritesContainer>
      </FavoritesSection>
    </MainFavoritesContent>
  );
}

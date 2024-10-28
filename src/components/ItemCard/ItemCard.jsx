import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

import DefaultBtn from "../DefaultBtn/DefaultBtn";
import Icon from "../Icon/Icon";
import CategoryList from "../CategoryList/CategoryList";
import ReviewBox from "../ReviewBox/ReviewBox";
import LocationBox from "../LocationBox/LocationBox";

import { formattedPrice } from "@/helpers/formattedPrice";
import { getCategories } from "@/helpers/categoryList";

import {
  CardDescription,
  CardInfo,
  CardReviewLocationBox,
  CardTitleBox,
  ItemCardContainer,
} from "./ItemCard.styled";

import { selectFavoriteCampers } from "@/redux/campers/selectors";
import { toggleFavorite } from "@/redux/campers/slice";

export default function ItemCard({ advert }) {
  const { id, name, price, rating, location, description, gallery, reviews } =
    advert;

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoriteCampers);
  const isFavorite = favorites.includes(id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  const handleShowMoreBtn = () => {
    navigate(`/catalog/${id}`);
  };
  const categories = getCategories(advert);
  const cardImage = gallery[0].thumb;
  return (
    <ItemCardContainer>
      <div className="card-img-box">
        <img src={cardImage} alt={name} />
      </div>
      <CardInfo>
        <CardTitleBox>
          <h2 className="card-title">{name}</h2>
          <div className="card-price-box">
            <p className="card-price">{formattedPrice(price)}</p>
            <button
              type="button"
              className="reset-btn"
              onClick={handleToggleFavorite}
            >
              <Icon
                name="heart-default"
                stroke={isFavorite ? theme.buttonColor : theme.iconColorFirst}
              />
            </button>
          </div>
        </CardTitleBox>
        <CardReviewLocationBox>
          <ReviewBox rating={rating} reviews={reviews} theme={theme} id={id} />
          <LocationBox location={location} theme={theme} />
        </CardReviewLocationBox>
        <CardDescription>{description}</CardDescription>
        <CategoryList categories={categories} />
        <DefaultBtn
          onClick={handleShowMoreBtn}
          type="button"
          text="Show more"
          className="show-more-btn"
        />
      </CardInfo>
    </ItemCardContainer>
  );
}

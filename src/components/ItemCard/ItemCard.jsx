import DefaultBtn from "../DefaultBtn/DefaultBtn";
import Icon from "../Icon/Icon";
import { formattedLocation } from "../../helpers/formattedLocation";
import { formattedPrice } from "../../helpers/formattedPrice";

import {
  CardDescription,
  CardInfo,
  CardReviewLocationBox,
  CardText,
  CardTitleBox,
  ItemCardContainer,
} from "./ItemCard.styled";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../helpers/categoryList";
import CategoryList from "../CategoryList/CategoryList";


const ItemCard = ({ advert }) => {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews,
  } = advert;

  const theme = useTheme();
  const navigate = useNavigate();

  const categories = getCategories(advert);
  const cardImage = gallery[0].thumb;

  const handleShowMoreBtn = () => {
navigate(`/catalog/${id}`);
  }

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
            <button type="button" className="reset-btn">
              <Icon name="heart-default" />
            </button>
          </div>
        </CardTitleBox>
        <CardReviewLocationBox>
          <div className="review-box">
            <span className="icon-box">
              <Icon
                name="star"
                stroke={theme.iconStarColor}
                fill={theme.iconStarColor}
              />
            </span>
            <button type="button" className="reset-btn review-btn">
              <CardText>
                {rating}({reviews.length} Reviews)
              </CardText>
            </button>
          </div>
          <div className="location-box">
            <span className="icon-box location-icon">
              <Icon name="map" stroke={theme.iconColorFirst} />
            </span>
            <CardText>{formattedLocation(location)}</CardText>
          </div>
        </CardReviewLocationBox>
        <CardDescription>{description}</CardDescription>
       <CategoryList categories={categories}/>
        <DefaultBtn onClick={handleShowMoreBtn} type="button" text="Show more" className="show-more-btn" />
      </CardInfo>
    </ItemCardContainer>
  );
};

export default ItemCard;

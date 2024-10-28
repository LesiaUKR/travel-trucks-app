import { useTheme } from "styled-components";
import Icon from "../Icon/Icon";
import { ReviewLink, ReviewText, ReviewWrapper } from "./ReviewBox.styled";

export default function ReviewBox({ rating, reviews, id }) {
  const theme = useTheme();

  return (
    <ReviewWrapper>
      <span className="icon-box">
        <Icon
          name="star"
          stroke={theme.iconStarColor}
          fill={theme.iconStarColor}
        />
      </span>
      <ReviewLink to={`/catalog/${id}/reviews`}>
        <ReviewText>
          {rating} ({reviews.length} Reviews)
        </ReviewText>
      </ReviewLink>
    </ReviewWrapper>
  );
}

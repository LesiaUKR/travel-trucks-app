import { Avatar, Comment, Info, Name, NoReviews, Rating, ReviewsHeader, ReviewsItem, ReviewsList, StarWrapper } from './Reviews.styled';
import Icon from "../Icon/Icon";


export default function Reviews({ camper }) {
  const { reviews } = camper;

  if (!reviews?.length) return <NoReviews>No reviews</NoReviews>;
  
  const renderStars = (rating) => {
   return Array.from({ length: 5 }, (_, index) => (
     <StarWrapper key={index}>
       <Icon
         name="star"
         style={{ fill: index < rating ? "#FFC531" : "#F2F4F7" }}
         width="20"
         height="20"
       />
     </StarWrapper>
   ));
 };


  return (
   <ReviewsList>
   {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
     <ReviewsItem key={reviewer_name}>
       <ReviewsHeader>
         <Avatar>{reviewer_name[0].toUpperCase()}</Avatar>
         <Info>
           <Name>{reviewer_name}</Name>
           <Rating>{renderStars(reviewer_rating)}</Rating>
         </Info>
       </ReviewsHeader>
       <Comment>{comment}</Comment>
     </ReviewsItem>
   ))}
 </ReviewsList>
  );
};

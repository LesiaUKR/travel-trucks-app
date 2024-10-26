import { Outlet, useParams } from "react-router-dom";
import { MainContent } from "../../components/SharedLayout/SharedLayout.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectSelectedCamper,
} from "../../redux/campers/selectors";
import {
  DetailsContainer,
  DetailsWrapper,
  DetailsTabsList,
  DetailsSection,
  DetailsTabsLink,
  CamperTitle,
  ReviewLocationWrapper,
  CamperPrice,
  CamperDescription,
  CamperImagesList,
  CamperImagesItem,
  CamperImage,
} from "./CamperDetailsPage.styled";
import BookCamperForm from "./../../components/BookCamperForm/BookCamperForm";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import LocationBox from "../../components/LocationBox/LocationBox";
import { formattedPrice } from "../../helpers/formattedPrice";

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector(selectSelectedCamper);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (isLoading) return <p>Loading camper details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!camper) return <p>Loading camper details...</p>;

  const { name, rating, reviews, location, price, description, gallery } = camper;

   const isFeaturesActive = location.pathname === `/catalog/${id}` || location.pathname === `/catalog/${id}/features`;

  return (
    <MainContent>
      <DetailsSection>
        <DetailsContainer>
          <CamperTitle>{name}</CamperTitle>
          <ReviewLocationWrapper>
        <ReviewBox rating={rating} reviews={reviews} id={id}/>
        <LocationBox location={location} />
        </ReviewLocationWrapper>
        <CamperPrice className="card-price">{formattedPrice(price)}</CamperPrice>
          
          <CamperImagesList>
{gallery.map(({thumb}, index) => (
  <CamperImagesItem key={index}>
    <CamperImage src={thumb} alt={name} />
  </CamperImagesItem>
))}

          </CamperImagesList>
        <CamperDescription>{description}</CamperDescription>
          
          <DetailsTabsList>
            <li>
              <DetailsTabsLink
                to="features"
                className={isFeaturesActive ? "active" : ""}
              >
                Features
              </DetailsTabsLink>
            </li>
            <li>
              <DetailsTabsLink
                to="reviews"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Reviews
              </DetailsTabsLink>
            </li>
          </DetailsTabsList>
          <DetailsWrapper>
          <Outlet context={{ camper }} />
            <BookCamperForm />
          </DetailsWrapper>
        </DetailsContainer>
      </DetailsSection>
    </MainContent>
  );
}
import { useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BookCamperForm from "@/components/BookCamperForm/BookCamperForm";
import ReviewBox from "@/components/ReviewBox/ReviewBox";
import LocationBox from "@/components/LocationBox/LocationBox";
import Loader from "@/components/Loader/Loader";
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
  DetailsMainContent,
  LoaderWrapper,
} from "./CamperDetailsPage.styled";

import { formattedPrice } from "@/helpers/formattedPrice";
import { fetchCamperById } from "@/redux/campers/operations";
import {
  selectError,
  selectIsLoading,
  selectSelectedCamper,
} from "@/redux/campers/selectors";

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const camper = useSelector(selectSelectedCamper);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

    if (isLoading || !camper) {
      return (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      );
    }
  
    if (error) return <p>Error: {error}</p>;

  const { name, rating, reviews, location, price, description, gallery } =
    camper;

  const isFeaturesActive =
    pathname === `/catalog/${id}` || pathname === `/catalog/${id}/features`;

    return (
      <DetailsMainContent>
        <DetailsSection>
          <DetailsContainer>
            <CamperTitle>{name}</CamperTitle>
            <ReviewLocationWrapper>
              <ReviewBox rating={rating} reviews={reviews} id={id} />
              <LocationBox location={location} />
            </ReviewLocationWrapper>
            <CamperPrice className="card-price">
              {formattedPrice(price)}
            </CamperPrice>
  
            <CamperImagesList>
              {gallery.map(({ thumb }, index) => (
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
      </DetailsMainContent>
    );
  }
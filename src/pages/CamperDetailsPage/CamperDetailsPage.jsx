import { useParams } from "react-router-dom";
import { MainContent } from "../../components/SharedLayout/SharedLayout.styled";
import Features from "../../components/Features/Features";
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
  DetailsTabsBtn,
} from "./CamperDetailsPage.styled";
import BookCamperForm from "./../../components/BookCamperForm/BookCamperForm";
import { useEffect, useState } from "react";
import { fetchCamperById } from "../../redux/campers/operations";
import Reviews from "../../components/Reviews/Reviews";

export default function CamperDetailsPage() {
  const [activeTab, setActiveTab] = useState("features");

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (!camper) return <p>Loading camper details...</p>;

  return (
    <MainContent>
      <DetailsSection>
        <DetailsContainer>
          <DetailsTabsList>
            <li>
              <DetailsTabsBtn
                className={activeTab === "features" ? "active" : ""}
                onClick={() => handleTabClick("features")}
              >
                Features
              </DetailsTabsBtn>
            </li>
            <li>
              <DetailsTabsBtn
                className={activeTab === "reviews" ? "active" : ""}
                onClick={() => handleTabClick("reviews")}
              >
                Reviews
              </DetailsTabsBtn>
            </li>
          </DetailsTabsList>
          <DetailsWrapper>
            {activeTab === "features" && <Features camper={camper} />}
            {activeTab === "reviews" && <Reviews camper={camper} />}
            <BookCamperForm />
          </DetailsWrapper>
        </DetailsContainer>
      </DetailsSection>
    </MainContent>
  );
}

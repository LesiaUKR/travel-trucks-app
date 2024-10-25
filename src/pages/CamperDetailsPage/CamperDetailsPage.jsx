import { useParams } from 'react-router-dom';
import { MainContent } from '../../components/SharedLayout/SharedLayout.styled';
import Features from '../../components/Features/Features';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import { DetailsContainer, DetailsWrapper, DetailsTabsList, DetailsSection, DetailsTabsBtn } from './CamperDetailsPage.styled';
import BookCamperForm from './../../components/BookCamperForm/BookCamperForm';
import { useState } from 'react';

export default function CamperDetailsPage() {
  const { id } = useParams(); 
  const campers = useSelector(selectCampers);
  const camperItems = campers?.items || [];
  const camper = camperItems.find(camper => camper.id === id);
  console.log("camper", camper);

  const [activeTab, setActiveTab] = useState("features");

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Оновлюємо стан активної вкладки
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
            onClick={() => handleTabClick("features")}>Features</DetailsTabsBtn>
            </li>
          <li><DetailsTabsBtn
              className={activeTab === "reviews" ? "active" : ""}
              onClick={() => handleTabClick("reviews")}
          >Reviews</DetailsTabsBtn></li>
        </DetailsTabsList>
        <DetailsWrapper>
    <Features camper={camper}/>
    <BookCamperForm/>
     </DetailsWrapper>
     </DetailsContainer>
     </DetailsSection>

   </MainContent>
 )
}

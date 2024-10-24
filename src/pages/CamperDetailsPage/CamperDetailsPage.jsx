import { useParams } from 'react-router-dom';
import BookCamperForm from '../../components/BookCamperForm/BookCamperForm';
import { MainContent } from '../../components/SharedLayout/SharedLayout.styled';
import Features from '../../components/Features/Features';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';

export default function CamperDetailsPage() {
  const { id } = useParams(); 
  console.log("id", id);
  const campers = useSelector(selectCampers);
  const camperItems = campers?.items || [];
  console.log("camperItems", camperItems);
  const camper = camperItems.find(camper => camper.id === id);
  console.log("camper", camper);

 return (
   <MainContent>
    <Features/>
     <BookCamperForm/>
   </MainContent>
 )
}

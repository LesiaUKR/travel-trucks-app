import { useParams } from 'react-router-dom';
import BookCamperForm from '../../components/BookCamperForm/BookCamperForm';

export default function CamperDetailsPage() {
  const { id } = useParams(); 
  console.log(id);
 return (
   <div>
     <BookCamperForm/>
   </div>
 )
}

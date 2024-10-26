import CategoryList from "../CategoryList/CategoryList";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import { getCategories } from '../../helpers/categoryList';
import { FeaturesWrapper } from "./Features.styled";
import { useOutletContext } from "react-router-dom";

export default function Features() {
  const { camper } = useOutletContext();
  const categories = getCategories(camper);
  return (
    <FeaturesWrapper>
      <CategoryList categories={categories} />
      <VehicleDetails camper={camper}/>
    </FeaturesWrapper>
  )
}

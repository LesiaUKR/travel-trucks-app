import { useOutletContext } from "react-router-dom";

import CategoryList from "../CategoryList/CategoryList";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import { FeaturesWrapper } from "./Features.styled";

import { getCategories } from '@/helpers/categoryList';

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

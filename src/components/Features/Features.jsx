import CategoryList from "../CategoryList/CategoryList";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import { getCategories } from '../../helpers/categoryList';
import { FeaturesWrapper } from "./Features.styled";

export default function Features({camper}) {
  console.log("FeaturesCamper", camper);
  const categories = getCategories(camper);
  return (
    <FeaturesWrapper>
      <CategoryList categories={categories} />
      <VehicleDetails camper={camper}/>
    </FeaturesWrapper>
  )
}

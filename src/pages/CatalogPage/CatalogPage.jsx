import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchAllCampers } from "../../redux/campers/operations";


const CatalogPage = () => {
const dispatch = useDispatch(); 
const campers = useSelector(selectCampers);

useEffect(() => {
  dispatch(fetchAllCampers());
}, [dispatch]);

console.log("campers", campers);
const camperItems = campers?.items || [];
console.log("camperItems", camperItems);

  return (

  <>
   CatalogPage
    </>
  );
};

export default CatalogPage;

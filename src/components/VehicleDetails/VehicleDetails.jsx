import { getVehicleDeatils } from "../../helpers/vehicleDetails";
import { VehicleDetailsItem, VehicleDetailsList, VehicleDetailsTitle, VehicleDetailsWrapper } from "./VehicleDetails.styled";

export default function VehicleDetails({camper}) {
  console.log("VehicleDetailsCamper", camper);
const vehicleDeatils = getVehicleDeatils(camper);
console.log("VehicleDetails", vehicleDeatils);
  return (
    <VehicleDetailsWrapper>
      <VehicleDetailsTitle>Vehicle Details</VehicleDetailsTitle>
    <VehicleDetailsList>
      {vehicleDeatils.map((detail)=>(
        <VehicleDetailsItem key={detail.key}>
          <span>{detail.label}</span>
          <span>{detail.text}</span>
        </VehicleDetailsItem>
      ))}
    </VehicleDetailsList>
    </VehicleDetailsWrapper>
  )
}

import { getVehicleDeatils } from "../../helpers/vehicleDetails";
import { VehicleDetailsItem, VehicleDetailsList, VehicleDetailsTitle, VehicleDetailsWrapper } from "./VehicleDetails.styled";

export default function VehicleDetails({camper}) {
const vehicleDeatils = getVehicleDeatils(camper);
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

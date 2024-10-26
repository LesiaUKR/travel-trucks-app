import Icon from "../Icon/Icon";
import { formattedLocation } from "../../helpers/formattedLocation";
import { LocationText, LocationWrapper } from "./LocationBox.styled";
import { useTheme } from "styled-components";

const LocationBox = ({ location}) => {
  const theme = useTheme();
  
  return(
  <LocationWrapper>
    <span className="icon-box">
      <Icon name="map" stroke={theme.iconColorFirst} />
    </span>
    <LocationText>{formattedLocation(location)}</LocationText>
  </LocationWrapper>
)};

export default LocationBox;
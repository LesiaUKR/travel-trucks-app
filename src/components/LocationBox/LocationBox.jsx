import { useTheme } from "styled-components";

import Icon from "../Icon/Icon";
import { LocationText, LocationWrapper } from "./LocationBox.styled";

import { formattedLocation } from "@/helpers/formattedLocation";

export default function LocationBox({ location }) {
  const theme = useTheme();

  return (
    <LocationWrapper>
      <span className="icon-box">
        <Icon name="map" stroke={theme.iconColorFirst} />
      </span>
      <LocationText>{formattedLocation(location)}</LocationText>
    </LocationWrapper>
  );
}

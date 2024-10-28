import { useTheme } from "styled-components";
import { ThreeCircles } from "react-loader-spinner";

import { LoaderWrapper } from "./Loader.styled";

export default function Loader() {
  const theme = useTheme();
  return (
    <LoaderWrapper>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color={theme.buttonColor}
        ariaLabel="three-circles-loading"
      />
    </LoaderWrapper>
  );
}

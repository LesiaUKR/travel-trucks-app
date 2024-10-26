import { useTheme } from "styled-components";
import { LoaderWrapper } from "./Loader.styled";
import { ThreeCircles } from 'react-loader-spinner';

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

import { useState } from "react";
import {
  StyledSwitchInput,
  ThemeWrapper,
  ToggleSwitchLabel,
  ToggleSwitchSpan,
} from "./ThemeToggle.styled";
import { useTheme } from "styled-components";
import Icon from "../Icon/Icon";

function ThemeToggle({ toggleTheme }) {
  const theme = useTheme();
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <ThemeWrapper>
      <Icon name="sun"  width = "20"
  height = "20"/>
      <ToggleSwitchLabel>
        <StyledSwitchInput
          type="checkbox"
          checked={isToggled}
          onChange={onToggle}
        />
        <ToggleSwitchSpan />
      </ToggleSwitchLabel>
      <Icon name="moon" stroke={theme.iconColorFirst} fill={theme.iconColorFirst} width = "20"
  height = "20" />
    </ThemeWrapper>
  );
}
export default ThemeToggle;

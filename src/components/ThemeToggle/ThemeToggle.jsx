import { useState } from "react";
import { useTheme } from "styled-components";

import Icon from "../Icon/Icon";

import {
  StyledSwitchInput,
  ThemeWrapper,
  ToggleSwitchLabel,
  ToggleSwitchSpan,
} from "./ThemeToggle.styled";

export default function ThemeToggle({ toggleTheme }) {
  const theme = useTheme();
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <ThemeWrapper>
      <Icon name="sun" width="20" height="20" stroke="#ffa500" fill="#ffff00" />
      <ToggleSwitchLabel>
        <StyledSwitchInput
          type="checkbox"
          checked={isToggled}
          onChange={onToggle}
        />
        <ToggleSwitchSpan />
      </ToggleSwitchLabel>
      <Icon
        name="moon"
        stroke={theme.iconColorFirst}
        fill={theme.iconColorFirst}
        width="20"
        height="20"
      />
    </ThemeWrapper>
  );
}

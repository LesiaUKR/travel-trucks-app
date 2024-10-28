import { Fragment } from "react";
import Icon from "../Icon/Icon";
import { CategoryNameWrapper, IconWrapper } from "./CategoryBadge.styled";

export default function CategoryBadge({ icon, feature, featureQuantity }) {
  return (
    <Fragment>
      <IconWrapper>
        <Icon name={icon} fill="#101828" stroke="#101828" />
      </IconWrapper>
      <CategoryNameWrapper>
        {featureQuantity} {feature}
      </CategoryNameWrapper>
    </Fragment>
  );
}

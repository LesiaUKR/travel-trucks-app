import React, { Fragment } from "react";
import Icon from "../Icon/Icon";
import { CategoryNameWrapper, IconWrapper } from "./CategoryBadge.styled";

const CategoryBadge = ({ icon, feature, featureQuantity }) => {

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
};

export default CategoryBadge;

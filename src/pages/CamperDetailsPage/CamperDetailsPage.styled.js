import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const DetailsMainContent = styled.main`
  padding-top: 72px;
`;

export const DetailsSection = styled.section`
  padding: 48px 0px;
`;
export const DetailsContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0px 64px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const CamperTitle = styled.h2`
  margin-bottom: 8px;

  color: ${(props) => props.theme.textColorPrimary};

  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
`;
export const ReviewLocationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`;
export const CamperPrice = styled.p`
  margin-bottom: 28px;
  color: ${({ theme }) => theme.textColorPrimary};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
`;

export const CamperImagesList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-bottom: 28px;
  justify-content: space-between;
`;

export const CamperImagesItem = styled.li`
  width: calc((100% - 2 * 48px) / 3);
  border-radius: 10px;
  overflow: hidden;
`;
export const CamperImage = styled.img`
  width: 100%;
  height: 312px;

  object-fit: cover;
  border-radius: 10px;
`;
export const CamperDescription = styled.p`
  margin-bottom: 60px;

  color: ${({ theme }) => theme.textColorSecondary};

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
`;
export const DetailsTabsList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 40px;

  margin-bottom: 44px;
  border-bottom: 1px solid ${(props) => props.theme.bookFormBorder};
`;

export const DetailsTabsLink = styled(NavLink)`
  position: relative;
  display: inline-block;

  padding: 0;
  padding-bottom: 24px;

  color: ${(props) => props.theme.textColorPrimary};
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  border: none;
  background: none;

  &.active::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 5px;
    background: #e44848;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
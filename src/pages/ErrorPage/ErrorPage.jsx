import { useNavigate } from "react-router-dom";
import { MainContent } from "@/components/SharedLayout/SharedLayout.styled";
import {
  BackToCatalogBtn,
  ErrorPageContainer,
  ErrorText,
  ErrorTitle,
} from "./ErrorPage.styled";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleGoToCatalog = () => {
    navigate("/catalog");
  };
  return (
    <MainContent>
      <ErrorPageContainer>
        <ErrorTitle>404 - Page Not Found</ErrorTitle>
        <ErrorText>
          Sorry, the page you are looking for could not be found
        </ErrorText>
        <BackToCatalogBtn onClick={handleGoToCatalog} text="Back to Catalog" />
      </ErrorPageContainer>
    </MainContent>
  );
}


import { HeroContainer, HomeSection, HeroTitle, HeroLink, HeroText } from "./HomePage.styled";



const HomePage = () => {
  return <HomeSection>
    <HeroContainer>

      <HeroTitle>Campers of your dreams</HeroTitle>
      <HeroText>You can find everything you want in our catalog</HeroText>
    <HeroLink to="/catalog">View Now</HeroLink>
    </HeroContainer>
      </HomeSection>;
};

export default HomePage;

import SocialIcons from "../SocialIcons/SocialIcons";


import { Container } from "../Styled/StyledContainer";
import { Flex } from "../Styled/FlexStyled";
import { StyledFooter } from "../Styled/StyledFooter";


const Footer = () => {
  return (
        <StyledFooter>
      <Container>
      <img src='./images/logo.svg' alt=""/>

      <Flex>
        <ul>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, facilis, dolores voluptatum quas maxime officia, labore ratione tenetur cum cumque obcaecati.</li>
            <li>+40726208727</li>
            <li>example@huddle.com</li>
        </ul>

        <ul>
            <li>About Us</li>
            <li>What we do</li>
            <li>FAQ</li>
        </ul>

        <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
        </ul>
        <SocialIcons/>
      </Flex>

      <p>&copy; 2023 Huddle, All rights reserved</p>
    </Container>
    </StyledFooter>
  )
}

export default Footer

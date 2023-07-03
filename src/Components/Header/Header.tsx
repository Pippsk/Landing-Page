



import { StyledHeader, Nav, Logo, Image } from '../Styled/StyledHeader'
import Button from '../Button/Button'
import { Container } from '../Styled/StyledContainer'
import { Flex } from '../Styled/FlexStyled'




const Header = () => {
  return (
    <StyledHeader>
      <Container >
      <Nav>
        <Logo src='./images/logo.svg' alt='logo'/>
        <Button >Try it for free</Button>
      </Nav>

      <Flex>
        <div>
          <h1>
            Build the community all fans will love
          </h1>
          <p>Huddle re-imagine the way we build communities.You have a voice bot so does your audience.Create connections with your users  as you engage  in genuine discution</p>

          <Button bg='#ff0099' color='#fff'>Get Started for Free</Button>
        </div>

        <Image src='./images/illustration-mockups.svg' alt='mockups'/>
      </Flex>
      </Container >
    </StyledHeader>
  )
}

export default Header

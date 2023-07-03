import { ThemeProvider } from 'styled-components'

import Header from "./Components/Header/Header";
import { Container } from "./Components/Styled/StyledContainer";
import Content from './Content';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';

import GlobalStyles from './GlobalStyles/GlobalStyles';


const theme = {
  colors:{
    header:'#ebfbff',
    body:'#fff', 
    footer: `#003333`
  },

  mobile:'768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
    <Header/>
    <Container>
      {Content.map((item, index) => (
        <Card key={index} item={item}/>
      ))}
    </Container>
    <Footer/>
    </>
    </ThemeProvider>
  );
}

export default App;

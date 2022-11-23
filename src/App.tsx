import Header from './components/header'
import PageNews from './view/pageNews'
import * as S from './styles/styleApi'
import GlobalStyle from './styles/globalstyle'
const App = ()=> {
  return (
    <S.Container>
      <GlobalStyle />
      <Header />
      <PageNews />
    </S.Container>
  );
}

export default App;

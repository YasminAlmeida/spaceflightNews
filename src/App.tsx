import Header from './components/header'
import PageNews from './view/pageNews'
import * as S from './styles/styleApi'
const App = ()=> {
  return (
    <S.Container>
      <Header />
      <PageNews />
    </S.Container>
  );
}

export default App;

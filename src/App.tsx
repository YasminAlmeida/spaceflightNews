import Header from './components/header'
import News from './components/news'

import * as S from './styles/styleApi'
const App = ()=> {
  return (
    <S.Container>
      <Header />
      <News />
    </S.Container>
  );
}

export default App;

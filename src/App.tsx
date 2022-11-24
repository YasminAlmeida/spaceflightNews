// import Header from './components/header'
// import NewPage from './view/newsPage'
import RoutesList from './routes'

import * as S from './styles/styleApi'
import GlobalStyle from './styles/globalstyle'

const App = () => {
  return (
    <S.Container>
      <GlobalStyle />
      <RoutesList />
    </S.Container>
  )
}

export default App

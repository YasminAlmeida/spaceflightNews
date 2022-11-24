import * as S from './style'
import Rocket from '../../assets/rocket.gif'
import { Link } from 'react-router-dom'

type Props = {
  roteNews: string
  roteBlog: string
}

const Header = ({ roteNews, roteBlog }: Props): JSX.Element => {
  return (
    <S.HeaderContainer>
      <S.Title>SpaceFlight News</S.Title>
      <S.RightSide>
        <S.Navigation>
          <S.List>
            <Link to="/">{roteNews}</Link>
          </S.List>
          <S.List>
            <Link to="/blog">{roteBlog}</Link>
          </S.List>
        </S.Navigation>

        <S.Icon src={Rocket} alt="rocket" />
      </S.RightSide>
    </S.HeaderContainer>
  )
}
export default Header

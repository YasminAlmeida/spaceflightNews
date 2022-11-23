import * as S from './style'
import Rocket from '../../assets/rocket.gif'

const Header = () =>{
  return(
    <S.HeaderContainer>
      <S.Icon src={Rocket} alt='rocket'/>
      <S.Title>SpaceFkight News</S.Title>
    </S.HeaderContainer>
    
  )
}
export default Header;
import styled from "styled-components";

export const HeaderContainer = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@600&display=swap');
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 8%) 0 1px;
  font-family: 'Noto Sans', sans-serif;
  @media (max-width: 768px) {
    justify-content: center;
  }
`
export const Icon = styled.img`
  width: 45px;
  @media (max-width: 768px) {
    display: none;
  }
`
export const Title = styled.h1`
  font-size: 1.2rem;
  color: #000;
  margin-right: 5px;
  
`
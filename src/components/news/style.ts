import styled from "styled-components";

export const NewsContainer = styled.section`
  padding: 10px;
  margin-top: 10px;
  max-width: 1500px;
  align-items: center;
`
export const NewsItem = styled.article`
  display: grid;
  background-color: #f8f9fa;
  margin-bottom: 20px;
  border-radius: 2rem; grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const ContainerInformation = styled.div`
  padding: 10px;
`
export const NewsTitle = styled.h2`
  font-size: 1.2rem;
`

export const NewsDescription = styled.p`
  @media (max-width: 768px) {
    font-size: .8rem;
  }
`

export const NewsImage = styled.img`
  border-radius: 2rem;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ContainerExtra = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Data = styled.span``
export const BtnReadMore = styled.a`
  text-decoration: none;
  background-color: #dee2e6;
  color: #000;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 2rem;
  @media (max-width: 768px) {
    font-size: .8rem;
  }
`
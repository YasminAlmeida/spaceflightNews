import styled from "styled-components";

export const ContainerBlogs = styled.section`
  padding: 10px;
  margin-top: 10px;
  display: grid;
  max-width: 1500px;
  padding-right: 50px;
  padding-left: 50px;
`

interface IBlog {
  index: number,
}
export const BlogItem = styled.article<IBlog>`
  display: flex;
  flex-direction: ${({index}) => index % 2 === 0 ? 'row' : 'row-reverse'};
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 2rem; 
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const BlogTitle = styled.h2`
  font-weight: 600;
  line-height: 1.2;
  color: #1a1a1a;
`
export const BlogDescription = styled.p`
  width: 50%;
  @media (max-width: 768px) {
    font-size: .98rem;
    width: 100%;
  }
`
export const BlogLink = styled.section`
`
export const ContainerInformation = styled.div`
  display: flex;
  margin: 0px auto;
  padding: 10px;
  width: 80%;
  padding: 1rem 1.5rem;
  text-align: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Date = styled.span``
export const ContainerImg = styled.div`
  position: relative;
`
export const BlogImage = styled.img`
  border-radius: 2rem;
  width: 350px;
  border-radius: 10%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const SiteName = styled.span`
  position: absolute;
  background-color: #dee2e6;
  font-size: 0.7rem;
  border-radius: 4rem;
  padding: 5px;
  width: 110px;
  top: 0;
  text-align: center;
  left: 1px;
`
export const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  a{
    text-decoration: none;
    background-color: #111;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    &:hover{
      background-color: #b2b2b2;
      color: #000;
    }
    @media (max-width: 768px) {
    font-size: .8rem;
  }
  }
`
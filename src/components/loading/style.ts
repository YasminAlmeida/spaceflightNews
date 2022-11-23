import styled from "styled-components";

export const ContainerBalls = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2){
  animation-delay: 0.2s;
  }
  span:nth-child(3){
  animation-delay: 0.3s;
  }
`
export const Loading = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #2D4452;
  margin: 4px;
  animation: dots 0.6s cubic-bezier(0.6,0.1,1,0.4) infinite alternate;
  @keyframes dots {
  from{
    transform: translate3d(0, 0, 0);
  }
  to{
    transform: translate3d(0, 30px, 0);
  }
  }
`
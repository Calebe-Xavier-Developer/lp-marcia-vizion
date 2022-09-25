import styled from "styled-components";

export const MainContainerBody = styled.main`
  position: relative;
  box-sizing: border-box;
`;

export const MainInviteContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  height: 100vh;
  background-color: #0C161F;
  padding-top: 80px;
  overflow: hidden;

  @media only screen and (max-width: 1000px) {
    height: 100%;
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  background-color: transparent;
  box-sizing: border-box;

  @media only screen and (max-width: 1000px) {
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const PictureArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: transparent;

  div{
    width: 100%;

    img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
      vertical-align: middle;
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
    min-height: 200px;
  }
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  box-sizing: border-box;
  background-color: transparent;

  p{
    font-size: 20px;
    color: white;
    font-weight: 400;
    
    &.p-one{
      margin: 0;
      color: #FFF402;
    }
    a{
      color: white;

      &:hover{
        color: #FFF402;
      }
    }
  }
  span{
    color: #FFF402;
    font-weight: 700;

    &.span-none{
      color: white;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  h2{
    font-size: 32px;
    color: white;
    font-weight: 700;

    &.h-one{
      margin: 0;
    }
    &.h-mg-top{
      margin-top: 26.5px;
    }
    &.h-mg-bottom{
      margin-bottom: 26.5px;
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
     align-items: center;
    p{
      font-size: 14px;
      text-align: center;
    }
    h2{
      font-size: 22px;
      text-align: center;
    }
  }
`;

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  width: 356px;
  height: 45px;
  padding: 8px;

  cursor: pointer;
  border: none;
  border-radius: 8px;
  background-color: #FFF402;

  text-transform: uppercase;
  word-break: keep-all;
  font-size: 20px;
  font-weight: 800;
  transition: 0.3s linear;

  &:hover{
    background-color: #e1ac0f;
    color: white;
  }

  @media only screen and (max-width: 1000px) {
    position: fixed;
    width: 100%;
    bottom: 0;
  }
`;

export const CopyContent = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #0C161F;
  padding-top: 80px;

  p{
    color: #2f3031;
    text-align: center;
    width: 50%;
  }
   @media only screen and (max-width: 1000px) {
    width: 100%;
    p{
      font-size: 12px;
      width: 80%;
    }
    padding-bottom: 50px;
   }
`;

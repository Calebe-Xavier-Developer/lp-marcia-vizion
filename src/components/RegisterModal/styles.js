import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(38, 36, 37, 0.95);


  @media only screen and (max-width: 1000px) {
    div{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50%;

  width: 500px;
  padding: 15px;

  border: 1px solid #2f3031;
  background-color: white;
  border-radius: 8px;

  div{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    
    .btn-cancel{
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
      color: #7b7d7f;
    }
  }

  form{
    width: 100%;
  }


  p{
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 8px;
    color: #7b7d7f;
    text-align: center;

    &.footer-msg{
      font-size: 14px;
      color: #7b7d7f;
    }

    span{
      font-weight: 800;
      color: #9b9b9b;
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 90%;
    max-width: 500px;
  }

`;

export const ModalLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 4px;
  color: #9b9b9b;
`;

export const ModalInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid rgba(14, 223, 199, 0.8);
  border-radius: 4px;

  &:focus{
    border: 2px solid  rgba(14, 223, 255, 0.8);
    outline: none;
  }
  &::placeholder{
    color: #7b7d7f;
  }

`;

export const RegisterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  width: 100%;
  height: 50px;
  padding: 8px;

  cursor: pointer;
  border: none;
  border-radius: 8px;
  background-color: #FFF402;

  text-transform: uppercase;
  word-break: keep-all;
  font-size: 18px;
  font-weight: 600;
  transition: 0.3s linear;

  &:hover{
    background-color: #e1ac0f;
    color: white;
  }
  &:focus{
    outline: none;
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
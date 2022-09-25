import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { ModalContainer, ModalInput, ModalLabel, ModalOverlay, RegisterButton } from './styles';
import OutsideClickHandler from 'react-outside-click-handler';


export const RegisterModal = ({ modalOpen, setModalOpen }) => {
  const [inputValue, setInputValue] = useState('');

  const renderModal = () => {
    if (!modalOpen) return <></>;

    return (
      <ModalOverlay>
        <OutsideClickHandler onOutsideClick={() => setModalOpen(false)}>
          <ModalContainer>
            <div>
              <div role="presentation" className='btn-cancel' onClick={() => setModalOpen(false)}>x</div>
            </div>
            <p>
              <span>Deixe seu melhor e-mail</span> para te avisarmos quando começar e receber o acesso:
            </p>
            <form
              id='J2um8aB'
              method="post"
              action="//handler.klicksend.com.br/subscription/J2um8aB"
            >
              <ModalLabel htmlFor='email'>E-mail</ModalLabel>
              <ModalInput
                id="email"
                type="email"
                name="email"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder='Digite aqui seu e-mail'
                pattern="[^ @]*@[^ @]*"
                required
              />
              <RegisterButton
                type='submit'
                value="submit"
              >
                ENTRAR NO GRUPO
              </RegisterButton>
            </form>
            <p className='footer-msg'>
              Essa é uma inscrição ao evento online oferecido por Márcia Gonçalves. Ao clicar no botão, você concorda com os Termos de Uso e Política de Privacidade da Márcia Gonçalves, incluindo o uso de cookies e o envio de comunicações, necessários para o acesso às aulas.
            </p>
          </ModalContainer>
        </OutsideClickHandler>
      </ModalOverlay>
    )
  }


  return (
    <>
      {renderModal()}
    </>
  )
};

RegisterModal.propTypes = {
  modalOpen: PropTypes.bool,
  setModalOpen: PropTypes.func,
}
RegisterModal.defaultProp = {
  modalOpen: false,
  setModalOpen: () => { },
}

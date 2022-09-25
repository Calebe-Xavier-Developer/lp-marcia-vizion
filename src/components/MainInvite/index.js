import React, { useState } from 'react';
import mainFace from '../../assets/images/marcia.png';
import { RegisterModal } from '../RegisterModal';
import { ContentArea, CopyContent, MainContainerBody, MainContent, MainInviteContainer, PictureArea, SendButton } from './styles';

const MainInvite = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainContainerBody>
      <MainInviteContainer modalOpen={isOpen}>
        <MainContent>
          <PictureArea>
            <div>
              <img src={mainFace} alt="Marcia" />
            </div>
          </PictureArea>
          <ContentArea>
            <p className='p-one'>Cansada de não saber o caminho para a prosperidade?</p>

            <p className='p-one'>Cansada de desperdiçar sua vida e sua liberdade por um medo?</p>

            <h2 className='h-one h-mg-top'>
              CHEGOU A HORA DE CONECTAR-SE COM
            </h2>
            <h2 className='h-one h-mg-bottom'>
              A PROSPERIDADE
            </h2>

            <p>
              Eu vou te dar
              <span> em 7 dias </span>
              um novo
              <span> caminho </span>
              para prosperidade.
              {' '}
              <span>
                DE GRAÇA.
              </span>
            </p>

            <p className='p-one'>
              ESTOU TE CONVIDANDO PARA A SEMANA DA CONEXÃO COM A PROSPERIDADE. SEM CUSTOS. SEM PEGADINHAS.
            </p>

            <p>
              A Semana vai acontecer dos dias
              <span> 24/10 à 30/10 às 19H59</span>,
              então já aproveita e marque em sua agenda, na porta da geladeira, na parede do quarto.
            </p>

            <p>
              <span className='span-none' onClick={() => setIsOpen(true)}>CADASTRE-SE</span>
              {' '}
              E ENTRE NO GRUPO
            </p>
            <SendButton onClick={() => setIsOpen(true)}>INSCREVA-SE AQUI</SendButton>
          </ContentArea>
        </MainContent>
      </MainInviteContainer>
      <CopyContent>
        <p>Copyright © 2022</p>
        <p>
          Essa é uma inscrição ao evento online oferecido por Márcia Gonçalves. Ao clicar no botão, você concorda com os Termos de Uso e Política de Privacidade da Márcia Gonçalves, incluindo o uso de cookies e o envio de comunicações, necessários para o acesso às aulas.
        </p>
      </CopyContent>
      <RegisterModal modalOpen={isOpen} setModalOpen={i => setIsOpen(i)} />
    </MainContainerBody>
  )
}

export default MainInvite;
import React from 'react';
// import mainFace from '../../assets/images/marcia.png';
import { CopyContent, MainContainerBody, MainContainer } from './styles';

const MainGroup = () => {

  return (
    <MainContainerBody>
      <MainContainer >
        <div>
          <h1>Grupo Liberado!</h1>
          <p>
            <span>1º</span> Para entrar no nosso grupo do WhatsApp,
            {' '}
            <a
              target="_blank"
              rel="noreferrer"
              href='https://chat.whatsapp.com/IoDH5Q952UqC3fd6ZHmgxt'
            >
              CLIQUE AQUI
            </a>
            {' '}
            lá vamos te enviar o acesso exclusivo para a nossa Semana da Conexão com a Prosperidade.
          </p>
          <p>
            <span>2º</span> Ainda não se inscreveu no nosso canal do YouTube?
            {' '}
            <a
              target="_blank"
              rel="noreferrer"
              href='https://www.youtube.com/channel/UCVUS30X2zwD81CpPLmE7q6w?sub_confirmation=1'
            >
              CLIQUE AQUI
            </a>
            {' '}
            e inscreva-se, toda semana um vídeo novo.
          </p>
        </div>
      </MainContainer>
      <CopyContent>
        <p>Copyright © 2022</p>
        <p>
          Essa é uma inscrição ao evento online oferecido por Márcia Gonçalves. Ao clicar no botão, você concorda com os Termos de Uso e Política de Privacidade da Márcia Gonçalves, incluindo o uso de cookies e o envio de comunicações, necessários para o acesso às aulas.
        </p>
      </CopyContent>
    </MainContainerBody>
  )
}

export default MainGroup;
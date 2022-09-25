import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainInvite from '../../components/MainInvite';

const MainPage = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inscreva-se-na-semana" exact element={<MainInvite />} />
        <Route path="*" element={<Navigate replace to="/inscreva-se-na-semana" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainPage;
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainGroup from '../../components/MainGroup';

const MainPage = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainGroup />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainPage;
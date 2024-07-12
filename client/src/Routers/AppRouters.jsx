import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Ingreso from '../Pages/Ingreso';
import Listado from '../Pages/Listado';
import AlumnoDetail from '../Components/AlumnoDetail';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ingreso" element={<Ingreso />} />
                <Route path="/listado" element={<Listado />} />
                <Route path="/alumno/:id" element={<AlumnoDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;

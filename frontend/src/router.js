import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Cadastrar from './pages/cadastrar';
import Consultar from './pages/consultar';


export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/cadastrar' element={ <Cadastrar />} />
                <Route path='/consultar/:id' element={ <Cadastrar />} />
        
        
                <Route path='/' element={ <Consultar />} />
            </Routes>
        </BrowserRouter>
    );
}
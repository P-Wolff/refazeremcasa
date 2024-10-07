import './index.scss'
import axios from 'axios'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Consultar() {
    const [ listaCanal, setListaCanal ] = useState([]);


    async function buscar() {
        const url = 'http://localhost:3000/listaDeCanal/';
        let resp = await axios.get(url);

        setListaCanal(resp.data);
    }

    return (
        <div className="pagina_consultar pagina">
            

            <div className="container"></div>
        </div>
    )
}
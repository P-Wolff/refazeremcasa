import './index.scss'
import axios from 'axios'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Cadastrar() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [aberto, setAberto] = useState(false);

    const {id} = useParams();

    async function salvar() {
        let paramCorpo = {
            "nome": nome,
            "numero": numero,
            "aberto": aberto
        }

        console.log(paramCorpo);


        if ( id == undefined) {
            const url = 'http://localhost:3000/listaDeCanal';
            let resp = await axios.post(url, paramCorpo);

            alert(`Canal adicionada na lista. Id: ${resp.data.novoId}`);
        } else {
            const url = `http://localhost:3000/listaDeCanal/${id}`;
            let resp = await axios.put(url, paramCorpo);

            alert(`Canal alterado na lista`);
        }
    }


    async function buscar() {
        const url = `http://localhost:3000/listaDeCanal/${id}`;
        let resp = await axios.put(url);

        console.log(resp.data);

        setNome(resp.data.nome)
        setNumero(resp.data.numero)
        setAberto(resp.data.aberto)
    }

    useEffect(() => {
        buscar()
    }, [])

    return (
        <div className="pagina-cadastrar pagina">
            

            <div className="container">
                <h1>Canal</h1>

                <div className="form">
                    <div>
                        <label>Nome do canal:</label>
                        <input type="text" value={nome} onChange={ e => setNome( e.target.value )} />
                    </div>

                    <div>
                        <label>Número do canal:</label>
                        <input type="text" value={numero} onChange={ e => setNumero( e.target.value )} />
                    </div>

                    <div>
                        <label>É aberto?</label>
                        <input type="text" value={nome} onChange={ e => setAberto( e.target.checked )} />
                    </div>
                </div>

                <button onClick={salvar}> cadastrar </button>
            </div>
            
        </div>
    );
}
import * as db from '../repository/listaDeProgramasRepository.js';
import { Router } from "express";


const endpoints = Router();

endpoints.get('/listaDePrograma/', async ( req, resp ) => {

    try {
        let registros = await db.consultarListaDePrograma();

        resp.send( registros );
    } catch( err ) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/listaDePrograma/:id', async ( req, resp ) => {

    try {
        let id = req.params.id
        let registros = await db.consultarListaDeProgramaPorId( id );

        resp.send( registros[0] );
    } catch( err ) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.post('/listaDePrograma/', async ( req, resp ) => {
    
    try {
        let canal = req.body;

        let id = await db.inserirListaDePrograma( canal )

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/listaDePrograma/:id', async ( req, resp ) => {

    try {
        let id = req.params.id;
        let canal = req.body;

        let linhasAfetadas = await db.alterarListaDePrograma( id, canal );

        if ( linhasAfetadas >= 1 ) {
            resp.send();
        } else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete('/listaDePrograma/', async ( req, resp ) => {

    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerListaDePrograma( id );

        if (linhasAfetadas >= 1 ) {
            resp.send()
        } else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })

        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default endpoints;
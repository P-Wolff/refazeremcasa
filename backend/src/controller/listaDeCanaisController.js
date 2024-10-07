import * as db from '../repository/listaDeCanaisRepository.js';
import { Router } from "express";


const endpoints = Router();

endpoints.get('/listaDeCanal/', async ( req, resp ) => {

    try {
        let registros = await db.consultarListaDeCanal();

        resp.send( registros );
    } catch( err ) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/listaDeCanal/:id', async ( req, resp ) => {

    try {
        let id = req.params.id
        let registros = await db.consultarListaDeCanalPorId( id );

        resp.send( registros[0] );
    } catch( err ) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.post('/listaDeCanal/', async ( req, resp ) => {
    
    try {
        let canal = req.body;

        let id = await db.inserirListaDeCanal( canal )

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/listaDeCanal/:id', async ( req, resp ) => {

    try {
        let id = req.params.id;
        let canal = req.body;

        let linhasAfetadas = await db.alterarListaDeCanal( id, canal );

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


endpoints.delete('/listaDeCanal/:id', async ( req, resp ) => {

    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerListaDeCanal( id );

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
import * as db from '../repository/listaDeUsuarioRepository.js';
import { Router } from "express";


const endpoints = Router();

endpoints.get('/usuario/', async ( req, resp ) => {

    try {
        let registros = await db.consultarListaDeUsuario();

        resp.send( registros );
    } catch( err ) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/usuario/:id', async ( req, resp ) => {

    try {
        let id = req.params.id
        let registros = await db.consultarListaDeUsuarioPorId( id );

        resp.send( registros[0] );
    } catch( err ) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.post('/usuario/', async ( req, resp ) => {
    
    try {
        let usuario = req.body;

        let id = await db.inserirListaDeUsuario( usuario )

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/usuario/:id', async ( req, resp ) => {

    try {
        let id = req.params.id;
        let canal = req.body;

        let linhasAfetadas = await db.alterarListaDeUsuario( id, canal );

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


endpoints.delete('/usuario/:id', async ( req, resp ) => {

    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerListaDeUsuario( id );

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
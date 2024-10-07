import * as db from '../repository/listaDeFavoritosRepository.js';
import { Router } from "express";


const endpoints = Router();

endpoints.get('/listaFavorito/', async ( req, resp ) => {

    try {
        let registros = await db.consultarListaDeFavorito();

        resp.send( registros );
    } catch( err ) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/listaFavorito/:id', async ( req, resp ) => {

    try {
        let id = req.params.id
        let registros = await db.consultarListaDeFavoritoPorId( id );

        resp.send( registros[0] );
    } catch( err ) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.post('/listaFavorito/', async ( req, resp ) => {
    
    try {
        let favorito = req.body;

        let id = await db.inserirListaDeFavorito( favorito );

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/listaFavorito/:id', async ( req, resp ) => {

    try {
        let id = req.params.id;
        let favorito = req.body;

        let linhasAfetadas = await db.alterarListaDeFavorito( is, favorito );

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


endpoints.delete('/listaFavorito/:id', async ( req, resp ) => {

    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerListaDeFavorito( id );

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
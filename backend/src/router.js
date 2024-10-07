import listaDeCanais from './controller/listaDeCanaisController.js'
import listaDeFavorito from './controller/listaDeFavoritosController.js'
import listaDeProgramas from './controller/listaDeProgramasController.js'
import listaDeUsuario from './controller/listaDeUsuariosController.js'


export default function addRotas(servidor) {
    servidor.use(listaDeCanais);
    servidor.use(listaDeFavorito);
    servidor.use(listaDeProgramas);
    servidor.use(listaDeUsuario);
}
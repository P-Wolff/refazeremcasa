import con from './connection.js'

export async function inserirListaDeFavorito( favorito ) {
    const comando = `
        insert into tb_programa_favorito ( id_usuario, id_canal_programa, vl_avaliacao )
                                values	 ( ?, ?, ? );
    `;

    console.log( favorito );


    let resposta = await con.query( comando, [ favorito.usuario, favorito.programa, favorito.avaliacao ]);
    let info = resposta[0];

    return info.insertId;
}


export async function consultarListaDeFavorito() {
    const comando = `
        select  id_usuario          idUsuario, 
                id_canal_programa   idPrograma, 
                vl_avaliacao        avaliacao
        from tb_programa_favorito;
    `;


    let resposta = await con.query( comando );
    let registros = resposta[0];

    return registros;
}


export async function consultarListaDeFavoritoPorId( id ) {
    const comando = `
        select  id_usuario          idUsuario, 
                id_canal_programa   idPrograma, 
                vl_avaliacao        avaliacao
        from tb_programa_favorito;
        where id_programa_favorito = ?
    `;

    
    let resposta = await con.query( comando, [ id ]);
    let registros = resposta[0];

    return registros;
}


export async function alterarListaDeFavorito( id, favorito ) {
    const comando = `
        update tb_programa_favorito 
        set 	id_usuario = ?,
                id_canal_programa = ?, 
                vl_avaliacao = ?
        where 	id_programa_favorito = ?;
    `;

    
    let resposta = await con.query( comando, [ favorito.usuario, favorito.programa, favorito.avaliacao, id ]);
    let info = resposta[0];

    return info.affectedRows;
}


export async function removerListaDeFavorito( id ) {
    const comando = `
        delete from tb_programa_favorito
        where id_programa_favorito = ?;
    
    `;


    let resposta = await con.query( comando, [ id ]);
    let info = resposta[0];

    return info.affectedRows;
}
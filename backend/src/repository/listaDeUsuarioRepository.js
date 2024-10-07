import con from './connection.js'

export async function inserirListaDeUsuario( pessoa ) {
    const comando = `
        insert into programaAberto.tb_usuario ( nm_usuario )
                                    values	  ( ? )
    `;

    console.log( pessoa );


    let resposta = await con.query( comando, [ pessoa.nome ]);
    let info = resposta[0];

    return info.insertId;
}


export async function consultarListaDeUsuario() {
    const comando = `
        select  nm_usuario  usuario
        from tb_usuario;
    `;


    let resposta = await con.query( comando );
    let registros = resposta[0];

    return registros;
}


export async function consultarListaDeUsuarioPorId( id ) {
    const comando = `
        select  nm_usuario  usuario
        from tb_usuario;
        where id_usuario = ?
    `;

    
    let resposta = await con.query( comando, [ id ]);
    let registros = resposta[0];

    return registros;
}


export async function alterarListaDeUsuario( id, canal ) {
    const comando = `
        update  tb_usuario 
        set     nm_usuario = ?
        where 	id_usuario = ?;
    `;

    
    let resposta = await con.query( comando, [ canal.nome, canal.numero, canal.aberto, id ]);
    let info = resposta[0];

    return info.affectedRows;
}


export async function removerListaDeUsuario( id ) {
    const comando = `
        delete from tb_usuario
        where id_usuario = ?;
    `;


    let resposta = await con.query( comando, [ id ]);
    let info = resposta[0];

    return info.affectedRows;
}
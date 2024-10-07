import con from './connection.js'

export async function inserirListaDePrograma(programa) {
    const comando = `
        insert into programaAberto.tb_canal_programa ( id_canal, nm_programa, ds_genero, hr_programa )
                                            values	 ( ?, ?, ?, ? );
    `;

    console.log(programa);


    let resposta = await con.query( comando, [ programa.canal, programa.nome, programa.genero, programa.horario ]);
    let info = resposta[0];

    return info.insertId;
}


export async function consultarListaDePrograma() {
    const comando = `
        select  id_canal_programa   id,
                id_canal            canal, 
                nm_programa         nome, 
                ds_genero           genero, 
                hr_programa         horario
        from    tb_canal_programa
    `;


    let resposta = await con.query( comando );
    let registros = resposta[0];

    return registros;
}


export async function consultarListaDeProgramaPorId( id ) {
    const comando = `
        select  id_canal_programa   id,
                id_canal            canal, 
                nm_programa         nome, 
                ds_genero           genero, 
                hr_programa         horario
        from    tb_canal_programa
        where   id_canal_programa = ?
    `;

    
    let resposta = await con.query( comando, [ id ]);
    let registros = resposta[0];

    return registros;
}


export async function alterarListaDePrograma( id, programa ) {
    const comando = `
        update tb_canal_programa 
        set 	id_canal = ?,
                nm_programa = ?, 
                ds_genero = ?, 
                hr_programa = ? 
        where 	id_canal_programa = ?;
    `;

    
    let resposta = await con.query( comando, [ programa.canal, programa.nome, programa.genero, programa.horario, id ]);
    let info = resposta[0];

    return info.affectedRows;
}


export async function removerListaDePrograma( id ) {
    const comando = `
        delete from tb_canal_programa
        where id_canal_programa = ?;
    `;


    let resposta = await con.query( comando, [ id ]);
    let info = resposta[0];

    return info.affectedRows;
}
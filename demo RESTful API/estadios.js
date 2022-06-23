const bd = require ('./bd.js');

async function inclua (estadio)
{
    const conexao = await bd.getConexao ();
    if (conexao==null) return null;

    try
    {
        const sql     = `INSERT INTO estadios (cep,numero,telefone,nome,complemento) VALUES (${estadio.cep},${estadio.numero},${estadio.telefone},'${estadio.nome}','${estadio.complemento}' )`;
        await conexao.query (sql);
        return true;
    }
    catch (excecao)
    {
        return false;
    }
}

async function atualize (estadio)
{
    const conexao = await bd.getConexao ();
    if (conexao==null) return null;

    try
    {
        const sql   = `UPDATE estadios SET nome=$1,numero=$2,telefone=$3, complemento=$4 WHERE id=$cep`;
        const dados = [estadio.nome, estadio.numero, estadio.telefone, estadio.complemento, estadio.cep,];
        await conexao.query (sql,dados);
        return true;
    }
    catch (excecao)
    {
        return false;
    }
}
    
async function remova (cep)
{
    const conexao = await bd.getConexao ();
    if (conexao==null) return null;

    try
    {
        const sql   = `DELETE FROM estadios WHERE cep=${cep}`;
        await conexao.query (sql);
        return true;
    }
    catch (excecao)
    {
        return false;
    }
}

async function recupereUm (cep)
{
    const conexao = await bd.getConexao();
    if (conexao==null) return null;

    try
    {
        const  sql     = `SELECT * FROM estadios WHERE cep=${cep}`;
        const linhas = (await conexao.query(sql)).rows;
        return linhas[0];
    }
    catch (excecao)
    {
        return false;
    }
}

async function recupereTodos ()
{
    const conexao = await bd.getConexao();
    if (conexao==null) return null;

    try
    {
        const  sql     = 'SELECT * FROM estadios';
        const linhas = (await conexao.query(sql)).rows;
        return linhas;
    }
    
    catch (excecao)
    {
        return false;
    }
}

module.exports = {inclua, atualize, remova, recupereUm, recupereTodos}




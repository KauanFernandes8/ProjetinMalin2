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
        const sql   = 'UPDATE estadios SET numero=?,telefone=?,nome=?,complemento=? WHERE cep=?';
        const dados = [estadio.nome,estadio.preco,estadio.cep];
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
        const sql   = 'DELETE FROM estadios WHERE cep=?';
        const dados = [cep];
        await conexao.query (sql,dados);
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
        const  sql     = 'SELECT * FROM estadios WHERE cep=?';
        const  dados   = [cep];
        const [linhas] = await conexao.execute(sql,dados);
        return linhas;
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




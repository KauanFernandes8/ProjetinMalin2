require('dotenv').config();
const { Client } = require('pg');


const cliente = new Client({
    connectionString: process.env.HERUKO_DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

cliente.connect();

async function getConexao() {
    if (global.conexao && global.conexao.state !== 'disconnected')
        return global.conexao;

    try 
    {
        const conexao = cliente;
        global.conexao = conexao;
        return conexao;
    }
    catch (erro) {
        return null;
    }
}

async function estrutureSe() 
{
    const conexao = await getConexao();
    if (conexao == undefined) return null;

    const sql = 'CREATE TABLE IF NOT EXISTS estadios (cep INT PRIMARY KEY , numero INT NOT NULL, telefone INT, nome VARCHAR(60) NOT NULL, complemento varchar(120))';

    try 
    {
        console.log(sql)
        await conexao.query(sql);
        return true;
    }

    catch (erro) 
    {
        return false;
    }
}

module.exports = { getConexao, estrutureSe }

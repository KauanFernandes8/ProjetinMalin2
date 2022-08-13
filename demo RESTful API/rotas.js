const Estadios   = require ('./estadios.js');
const Estadio    = require ('./estadio.js');
const Comunicado = require ('./comunicado.js');

// para a rota de CREATE
async function inclusao (req, res)
{
    console.log(req.body)
    if (Object.values(req.body).length!=5 || !req.body.cep || !req.body.numero || !req.body.telefone || !req.body.nome || !req.body.complemento)
    {
        const erro = Comunicado.novo('DdI','Dados inesperados','Não foram fornecidos exatamente as 3 informações esperadas de um cep (cep, nome e preço)').object;
        return res.status(422).json(erro);
    }

    let estadio;
    try
    {
        estadio = Estadio.novo (req.body.cep,req.body.numero, req.body.telefone, req.body.nome, req.body.complemento);
    }

    catch (excecao)
    {
        const erro = Comunicado.novo('TDE','Dados de tipos errados','cep deve ser um numero natural positivo, nome deve ser um texto não vazio e preço deve ser um número real positivo').object;
        return res.status(422).json(erro);
    }

    const ret = await Estadios.inclua(estadio);

    if (ret===null)
    {
        const  erro = Comunicado.novo('CBD','Sem conexão com o BD','Não foi possível estabelecer conexão com o banco de dados').object;
        return res.status(500).json(erro);
    }

    if (ret===false)
    {
        const  erro = Comunicado.novo('EJE','Estádio já existe','Já há estádio cadastrado com o código informado').object;
        return res.status(409).json(erro);
    }

  //if (ret===true)
  //{
        const  sucesso = Comunicado.novo('IBS','Inclusão bem sucedida','O estádio foi incluído com sucesso').object;
        return res.status(201).json(sucesso);
  //}
}

// para a rota de UPDATE
async function atualizacao (req, res)
{
    if (Object.values(req.body).length!=5 || !req.body.cep || !req.body.numero || !req.body.telefone || !req.body.nome || !req.body.complemento)
    {
        const erro = Comunicado.novo('DdI','Dados inesperados','Não foram fornecidos exatamente as 5 informações esperadas de um estádio (cep, novo número, novo telefone, novo nome, novo complemento)').object;
        return res.status(422).json(erro);
    }
    
    let estadio;
    try
    {
        estadio = Estadio.novo (req.body.cep,req.body.numero, req.body.telefone, req.body.nome, req.body.complemento);
    }
    catch (excecao)
    {
        const erro = Comunicado.novo('TDE','Dados de tipos errados','Cep, número e telefone devem ser um numero natural positivo; nome e complemento devem ser um texto não vazio; e preço deve ser um número real positivo').object;
        return res.status(422).json(erro);
    }

    const cep = req.params.cep;

    if (cep!=estadio.cep)
    {
        const erro = Comunicado.novo('TMC','Mudança de código','Tentativa de mudar o código do estádio').object;
        return res.status(400).json(erro);    
    }
    
    let ret = await Estadios.recupereUm(cep);

    if (ret===null)
    {
        const  erro = Comunicado.novo('CBD','Sem conexão com o BD','Não foi possível estabelecer conexão com o banco de dados').object;
        return res.status(500).json(erro);
    }

    if (ret===false)
    {
        const  erro = Comunicado.novo('FNC','Falha no comando SQL','O comando SQL apresenta algum erro').object;
        return res.status(409).json(erro);
    }

    if (ret.length==0)
    {
        const erro = Comunicado.novo('LNE','estadio inexistente','Não há estadio cadastrado com o código informado').object;
        return res.status(404).json(erro);
    }

    ret = await Estadios.atualize(estadio);

    if (ret===null)
    {
        const  erro = Comunicado.novo('CBD','Sem conexão com o BD','Não foi possível estabelecer conexão com o banco de dados').object;
        return res.status(500).json(erro);
    }

    if (ret===false)
    {
        const  erro = Comunicado.novo('FNC','Falha no comando SQL','O comando SQL apresenta algum erro').object;
        return res.status(409).json(erro);
    }

  //if (ret===true)
  //{
        const sucesso = Comunicado.novo('ABS','Alteração bem sucedida','O estadio foi atualizado com sucesso').object;
        return res.status(201).json(sucesso);
  //}
}

// para a rota de DELETE
async function remocao (req, res)
{
    if (Object.values(req.body).length!=0)
    {
        const erro = Comunicado.novo('DSP','Fornecimento de dados sem propósito','Foram fornecidos dados sem necessidade no corpo da requisição').object;
        return res.status(422).json(erro);
    }
    
    const cep = req.params.cep;
    let ret = await Estadios.recupereUm(cep);

    if (ret===null)
    {
        const  erro = Comunicado.novo('CBD','Sem conexão com o BD','Não foi possível estabelecer conexão com o banco de dados').object;
        return res.status(500).json(erro);
    }

    if (ret===false)
    {
        const  erro = Comunicado.novo('FNC','Falha no comando SQL','O comando SQL apresenta algum erro').object;
        return res.status(409).json(erro);
    }

    if (ret.length==0)
    {
        const erro = Comunicado.novo('LNE','Estádio inexistente','Não há estádio cadastrado com o código informado').object;
        return res.status(404).json(erro);
    }

    ret = await Estadios.remova(cep);

    if (ret===null)
    {
        const  erro = Comunicado.novo('CBD','Sem conexão com o BD','Não foi possível estabelecer conexão com o banco de dados').object;
        return res.status(500).json(erro);
    }

    if (ret===false)
    {
        const  erro = Comunicado.novo('FNC','Falha no comando SQL','O comando SQL apresenta algum erro').object;
        return res.status(409).json(erro);
    }

  //if (ret===true)
  //{
        const sucesso = Comunicado.novo('RBS','Remoção bem sucedida','O estádio foi removido com sucesso').object;
        return res.status(200).json(sucesso);
  //}    
}

// para a segunda rota de READ (um)
async function recuperacaoDeUm (req, res)
{
    if (Object.values(req.body).length!=0)
    {
        const erro = Comunicado.novo('DSP','Fornecimento de dados sem propósito','Foram fornecidos dados sem necessidade no corpo da requisição').object;
        return res.status(422).json(erro);
    }

    const cep = req.params.cep;

    const ret = await Estadios.recupereUm(cep);

    if (ret===null)
    {
        const  erro = Comunicado.novo('CBD','Sem conexão com o BD','Não foi possível estabelecer conexão com o banco de dados').object;
        return res.status(500).json(erro);
    }

    if (ret===false)
    {
        const  erro = Comunicado.novo('FNC','Falha no comando SQL','O comando SQL apresenta algum erro').object;
        return res.status(409).json(erro);
    }

    if (ret.length==0)
    {
        const erro = Comunicado.novo('LNE','Estádio inexistente','Não há estádio cadastrado com o código informado').object;
        return res.status(404).json(erro);
    }

    return res.status(200).json(ret);
}

// para a primeira rota de READ (todos)
async function recuperacaoDeTodos (req, res)
{
    if (Object.values(req.body).length!=0)
    {
        const erro = Comunicado.novo('DSP','Fornecimento de dados sem propósito','Foram fornecidos dados sem necessidade no corpo da requisição').object;
        return res.status(422).json(erro);
    }

    const ret = await Estadios.recupereTodos();

    if (ret===null)
    {
        const  erro = Comunicado.novo('CBD','Sem conexão com o BD','Não foi possível estabelecer conexão com o banco de dados').object;
        return res.status(500).json(erro);
    }

    if (ret===false)
    {
        const  erro = Comunicado.novo('FNC','Falha no comando SQL','O comando SQL apresenta algum erro').object;
        return res.status(409).json(erro);
    }

    return res.status(200).json(ret);
}

module.exports = {inclusao, atualizacao, remocao, recuperacaoDeUm, recuperacaoDeTodos}
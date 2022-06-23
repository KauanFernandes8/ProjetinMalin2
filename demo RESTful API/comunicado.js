class Comunicado
{
    #sigla
    #mensagem
    #descricao

    constructor (sigla, mensagem, descricao)
    {
        this.sigla=sigla;
        this.mensagem=mensagem;
        this.descricao=descricao;
    }

    get sigla ()
    {
        return this.#sigla
    }

    get mensagem ()
    {
        return this.#mensagem
    }

    get descricao ()
    {
        return this.#descricao
    }

    set sigla (sigla)
    {
        if (sigla===undefined || typeof sigla !== 'string' || sigla==="")
            throw ('Sigla inválida');

        this.#sigla = sigla;
    }

    set mensagem (mensagem)
    {
        if (mensagem===undefined || typeof mensagem !== 'string' || mensagem==="")
            throw ('Mensagem inválida');

        this.#mensagem = mensagem;
    }

    set descricao (descricao)
    {
        if (descricao===undefined || typeof descricao !== 'string' || descricao==="")
            throw ('Descrição inválida');

        this.#descricao = descricao;
    }

    get object ()
    {
        return {sigla:this.#sigla,mensagem:this.#mensagem,descricao:this.#descricao};
    }
}

function novo (sigla,mensagem,descricao)
{
    return new Comunicado (sigla,mensagem,descricao);
}

module.exports = {novo}

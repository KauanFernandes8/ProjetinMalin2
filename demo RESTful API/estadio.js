class Estadio
{
    #cep
    #numero
    #telefone
    #nome
    #complemento

    constructor (cep, numero, telefone, nome, complemento)
    {
        this.cep=cep;
        this.numero=numero;
        this.telefone=telefone;
        this.nome=nome;
        this.complemento=complemento;
    }

    get cep ()
    {
        return this.#cep
    }

    get numero ()
    {
        return this.#numero
    }

    get telefone ()
    {
        return this.#telefone
    }

    get nome ()
    {
        return this.#nome
    }

    get complemento ()
    {
        return this.#complemento
    }

    set cep (cep)
    {
        if (cep===undefined || typeof cep !== 'number' || isNaN(cep) || cep!==parseInt(cep) || cep<=0)
            throw ('Cep inválido');

        this.#cep = cep;
    }
 
    set numero (numero)
    {
        if (numero===undefined || typeof numero !== 'number' || isNaN(numero) || numero<=0)
            throw ('numero inválido');

        this.#numero = numero;
    }

    set telefone (telefone)
    {
        if (telefone===undefined || typeof telefone !== 'number' || isNaN(telefone) || telefone<=0)
            throw ('telefone inválido');

        this.#telefone = telefone;
    }

    set nome (nome)
    {
        if (nome===undefined || typeof nome !== 'string' || nome=="")
            throw ('Nome inválido');

        this.#nome = nome;
    }

    set complemento (complemento)
    {
        if (complemento===undefined || typeof complemento !== 'string' || complemento=="")
            throw ('complemento inválido');

        this.#complemento = complemento;
    }
}

function novo (cep,numero,telefone, nome, complemento)
{
    console.log(cep, numero, telefone, nome, complemento)
    return new Estadio (cep,numero,telefone, nome, complemento);
}

module.exports = {novo}

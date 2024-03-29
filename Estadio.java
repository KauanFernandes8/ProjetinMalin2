import java.io.*;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)

public class Estadio
{
    int numero;

    public int getTelefone() {
        return telefone;
    }

    public void setTelefone(int telefone) {
        this.telefone = telefone;
    }

    int telefone;
    int cep ;
    String nome, complemento;

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public int getCep() {
        return cep;
    }

    public void setCep(int cep) {
        this.cep = cep;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    private final int tamNome = 20;
    private final int tamTelefone = 10;
    private final int tamCep= 9;

    public Estadio(int cep, int numero, int telefone, String nome, String complemento)
    {
        this.cep=cep;
        this.numero=numero;
        this.telefone=telefone;
        this.nome=nome;
        this.complemento=complemento;
    }

    public Estadio()
    {}

    public String toString()
    {
        return "\nC.E.P.: "+
                this.cep+
                "\nComplemento: "+
                this.complemento+
                "\nNumero.....: "+
                this.numero+
                "\nTelefone.....: "+
                this.telefone+
                "\nNome.....: "+
                this.nome;
    }
} 

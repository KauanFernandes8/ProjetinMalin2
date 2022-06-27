public class Programa
{
    public static void main (String[] args)
    {
        int cep;
        int numero;
        int telefone;
        String nome;
        String complemento;

        int opcao;

        Teclado teclado = new Teclado();
        for(;;)
        {
            try
            {
                System.out.println("\n Seletor de Opções. Faça sua escolha: ");
                System.out.println("0 - Sair ");
                System.out.println("1 - Incluir ");
                System.out.println("2 - Excluir");
                System.out.println("3 - Atualizar");
                System.out.println("4 - Pesquisar");
                System.out.println("5 - Ver todos");

                opcao = teclado.getUmInt();
                switch(opcao)
                {
                    case 0:
                        System.exit(0);
                        break;

                    case 1:
                    {
                        try
                        {
                            System.out.print("Digite o cep do estádio: ");
                             cep = Teclado.getUmInt();

                            System.out.print("Digite o numero do estádio: ");
                             numero = Teclado.getUmInt();

                            System.out.print("Digite o telefone do estádio: ");
                             telefone = Teclado.getUmInt();

                            System.out.print("Digite o nome do estádio: ");
                             nome = Teclado.getUmString();

                            System.out.print("Complemento aqui: ");
                             complemento = Teclado.getUmString();

                             var estadio = new Estadio(cep, numero, telefone, nome, complemento);
                             ClienteWS.postObjeto(estadio, estadio.getClass(), "http://localhost:3000/estadios");
                        }

                        catch (Exception erro)
                        {
                            System.out.println("Dando erro aqui!!");
                            break;
                        }
                    }
                    case 2:
                    {
                        try
                        {
                            System.out.print("Digite o cep do estádio\n");
                            System.out.print("cep: ");

                            cep = Teclado.getUmInt() ;

                            String cep1 = String.valueOf(cep);

                            System.out.println(ClienteWS.getObjeto(Estadio.class, "http://localhost:3000/estadios",cep1));

                        }
                        catch (Exception erro)
                        {
                            System.out.println("Dando erro aqui!!");
                        }
                    }
                }
            }
             catch (Exception erro)
             {
                System.out.println(erro.getMessage());
             }
        }
    }
}

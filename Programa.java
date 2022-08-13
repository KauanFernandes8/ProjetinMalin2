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
                System.out.println("1 - Incluir ");
                System.out.println("2 - Pesquisar"); //o certo é pesquisar
                System.out.println("3 - Atualizar"); //
                System.out.println("4 - Excluir");
                System.out.println("5 - Pesquisar todos");


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
                             break;
                        }

                        catch (Exception erro)
                        {
                            System.out.println("Problemas internos! Tente novamente mais tarde");
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
                            break;
                        }
                        catch (Exception erro)
                        {
                            System.out.println("Dando erro aqui!!");
                            break;
                        }
                    }
                    case 3:
                    {
                        try
                        {
                            System.out.print("Digite o cep do estádio;\n");
                            cep = Teclado.getUmInt();
                            System.out.print("Digite o numero do estádio;\n");
                            numero = Teclado.getUmInt();
                            System.out.print("Digite o telefone do estádio;\n");
                            telefone = Teclado.getUmInt();
                            System.out.print("Digite o nome do estádio;\n");
                            nome = Teclado.getUmString();
                            System.out.print("Complemento do estádio;\n");
                            complemento = Teclado.getUmString();

                            var estadio = new Estadio(cep, numero, telefone, nome, complemento);
                            ClienteWS.putObjeto(Estadio.class, estadio, "http://localhost:3000/estadios", Integer.toString(cep));

                            break;
                        }
                        catch (Exception erro)
                        {
                            System.out.println("Problemas internos! Tente novamente mais tarde");
                            break;
                        }
                    }
                    case 4:
                    {
                        try
                        {
                            System.out.print("Digite o cep do estádio que deseja excluir\n");
                            System.out.print("cep: ");

                            cep = Teclado.getUmInt() ;

                            String cep1 = String.valueOf(cep);



                            System.out.println(ClienteWS.deleteObjeto(Estadio.class, "http://localhost:3000/estadios",cep1));

                            break;
                        }
                        catch (Exception erro)
                        {
                            System.out.println("Dando erro aqui!!");
                            break;
                        }
                    }
                    case 5:
                    {
                        try
                        {
                            ClienteWS.getObjetos(Estadio.class, "http://localhost:3000/estadios").forEach((o) -> System.out.println(o));
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

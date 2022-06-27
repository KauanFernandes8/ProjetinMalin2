import static java.lang.Integer.parseInt;
import java.io.*;
public class Programa
{
    public static void main (String[] args)
    {
        int escolha;
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

                escolha = teclado.getUmInt();
                switch(escolha)
                {
                    case 0:
                        System.exit(0);
                        break;

                    case 1:
                    {
                        try
                        {
                            System.out.print("Digite o cep do estádio: ");
                            int cep = Teclado.getUmInt();

                            System.out.print("Digite o nome do estádio: ");
                            String nome = Teclado.getUmString();

                            System.out.print("Digite o nome do estádio: ");
                            String nome = Teclado.getUmString();
                        }
                    }
                }
            }
            catch (error)
            {

            }
        }
    }
}

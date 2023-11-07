import random

palavras = set()
acertos = set()
erros = set()

def configurar_jogo():
    while True:
        palavra = input("Digite uma palavra (ou 'SAIR' para encerrar a configuração): ").strip().lower()
        if palavra == 'sair':
            break
        palavra_criptografada = criptografar_palavra(palavra)
        if palavra_criptografada not in palavras:
            palavras.add(palavra_criptografada)
        else:
            print("Essa palavra já foi inserida. Digite outra palavra.")

def criptografar_palavra(palavra):
    return ''.join(reversed(palavra))

def descriptografar_palavra(palavra_criptografada):
    return ''.join(reversed(palavra_criptografada))

def jogar():
    if not palavras:
        print("Você precisa configurar o jogo primeiro.")
        return

    palavra_secreta_criptografada = random.choice(list(palavras))
    palavras.remove(palavra_secreta_criptografada)
    palavra_secreta = descriptografar_palavra(palavra_secreta_criptografada)
    tentativas = 3

    print(f"A palavra a ser adivinhada tem {len(palavra_secreta)} caracteres.")

    while tentativas > 0:
        tentativa = input(f"Você tem {tentativas} tentativa(s) restante(s). Tente adivinhar a palavra: ").strip().lower()

        if tentativa == palavra_secreta:
            print("Parabéns! Você acertou a palavra.")
            acertos.add(palavra_secreta)
            break
        else:
            tentativas -= 1
            if tentativas > 0:
                print("Tentativa incorreta. Tente novamente.")

    if tentativas == 0:
        print(f"Suas tentativas se esgotaram. A palavra era '{palavra_secreta}'.")
        erros.add(palavra_secreta)

def menu():
    while True:
        print("\nMenu:")
        print("1) CONFIGURAR JOGO")
        print("2) JOGAR")
        print("3) SAIR")
        opcao = input("Escolha uma opção: ").strip()

        if opcao == '1':
            configurar_jogo()
        elif opcao == '2':
            jogar()
        elif opcao == '3':
            print("\nFim do jogo!")
            print("Palavras corretamente adivinhadas:", acertos)
            print("Palavras erradas:", erros)
            break
        else:
            print("Opção inválida. Escolha uma opção válida (1, 2 ou 3).")

menu()

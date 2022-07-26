"""
- Dada uma lista de números, retorne o maior número da lista.

>>Raciocínio:
Maior número de [] = [] ou None
Maior número de [1] = 1
Maior número de [2, 1] = 2
...

>> Caso base:
Lista foi percorrida e não há mais números para comparar.

>> Alteração de estado:
Verifica se o número no índice atual é maior que o atual número na memória.

>> Recursão:
Retorna o número que está na memória.

"""

def auxiliar_biggest(list, length):
    if length == 1:
        return list[0]
    biggest = auxiliar_biggest(list, length - 1)
    if biggest > list[length - 1]:
        return biggest
    return list[length - 1]

def recursive_biggest(list):
    length = len(list)
    return auxiliar_biggest(list, length)

while True:
    try:
        numbers_list = list(map(int, input("Entre com uma lista de números(0 para sair): ").split()))
        if numbers_list == [0]:
            break
        print(f"O maior número em {numbers_list} é: {recursive_biggest(numbers_list)}")
    except ValueError:
        print("Por favor, entre com uma lista de números")

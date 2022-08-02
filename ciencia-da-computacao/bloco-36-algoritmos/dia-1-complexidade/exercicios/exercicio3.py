# Gerar um array de 100 números (100 repetições)
# Cada 1 dos 100 números é igual à média de n números gerados aleatóriamente
# Passos:
#   recebe um número inteiro (n)
#       repete n vezes:
#           gera um número aleatório
#               adiciona o número à lista
#       calcula a média dos números da lista
#       imprime a média
#       armazena a média calculada na lista de 100 médias
#       imprime a lista de 100 médias
import random

def generate_one_hundred_of_averages(randoms_length):
    one_hundred_averages = []
    iterations = 0
    for _ in range(100):
        random_numbers = []

        for _ in range(randoms_length):
            random_numbers.append(random.randint(1, 100))
            iterations += 1
        one_hundred_averages.append(sum(random_numbers) / len(random_numbers))

    print(f'ARRAY: {one_hundred_averages}')
    print(f'Tamanho do array: {len(one_hundred_averages)}')
    print(f'{iterations} iterações no total!')
    return one_hundred_averages

generate_one_hundred_of_averages(5)
generate_one_hundred_of_averages(10)
generate_one_hundred_of_averages(20)
generate_one_hundred_of_averages(8)

# Complexidade de tempo: O(n), pois o loop é executado 100 vezes e cada vez é executado n vezes.
# Isto gera um crescimento linear de complexidade baseado em n
# Complexidade de espaço: O(1), pois para qualquer valor de entrada, o retorno será um array de 100 elementos.
# Entradas inválidas não foram consideradas ou tratadas aqui e não aumentariam a complexidade, visto que seria retornada uma execeção.

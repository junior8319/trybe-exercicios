list = []

while True:
    number = input("Digite um número ('s' para sair): ")
    if number == 's':
        break
    list.append(float(number))
    print(list)


def average(list):
    average = sum(list) / len(list)
    print(f"A média para {list} é {average}")
    return average


average(list)

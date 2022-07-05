def biggest_name(names):
    return max(names, key=lambda name: len(name))


names = []

while True:
    name = input("Digite um nome ('0' para sair): ")
    if name == '0':
        print(f"O maior nome em {names} é {biggest_name(names)}, obrigado!")
        break
    names.append(name)
    print(f"O maior nome em {names} é {biggest_name(names)}")

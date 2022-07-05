def draw(n):
    for i in range(n):
        print('*' * n)


while True:
    n = input("Digite um número para desenhar: ")
    if not n.isnumeric():
        break
    draw(int(n))

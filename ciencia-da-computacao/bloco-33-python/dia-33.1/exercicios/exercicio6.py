def is_triangle(a, b, c):
    if a + b <= c or a + c <= b or b + c <= a:
        return False
    else:
        return True


def is_equilateral(a, b, c):
    if a == b == c:
        return True
    else:
        return False


def is_isoceles(a, b, c):
    if a == b or a == c or b == c:
        return True
    else:
        return False


while True:
    a = input("Digite o primeiro lado: ")
    if not a.isnumeric():
        print(f"{a} não é um número, encerrando...")
        break
    b = input("Digite o segundo lado: ")
    if not b.isnumeric():
        print(f"{b} não é um número, encerrando...")
        break
    c = input("Digite o terceiro lado: ")
    if not c.isnumeric():
        print(f"{c} não é um número, encerrando...")
        break
    if is_triangle(float(a), float(b), float(c)):
        if (float(a) ** 2) + (float(b) ** 2) == (float(c) ** 2):
            print("É um triângulo retângulo")
        if is_equilateral(float(a), float(b), float(c)):
            print("É um triângulo equilátero")
        if is_isoceles(float(a), float(b), float(c)):
            print("É um triângulo isósceles")
        else:
            print("É um triângulo escaleno")
    else:
        print("Não é um triângulo")

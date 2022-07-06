def fizz_buzz_number(number):
    if number % 3 == 0 and number % 5 == 0:
        return "FizzBuzz"
    elif number % 3 == 0:
        return "Fizz"
    elif number % 5 == 0:
        return "Buzz"
    else:
        return number


def fizz_buzz(number):
    list = [
        fizz_buzz_number(number)
        for number in range(number + 1)
    ]
    print(list)
    return list


while True:
    number = input("Enter a number('s' para sair): ")
    if number == 's':
        break
    fizz_buzz(int(number))

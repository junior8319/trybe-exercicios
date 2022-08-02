def recursive_evens(number):
    if number == 0:
        return 0
    elif number % 2 == 0:
        print(f"{number} is even")
        return 1 + recursive_evens(number - 1)
    else:
        return recursive_evens(number - 1)

while True:
    try:
        number = int(input("Enter a number(0 to quit):"))
        if number == 0:
            break
        evens = recursive_evens(number)
        print(f"There are {evens} even numbers between 0 and {number}")
    except ValueError:
        print("Please enter a number")

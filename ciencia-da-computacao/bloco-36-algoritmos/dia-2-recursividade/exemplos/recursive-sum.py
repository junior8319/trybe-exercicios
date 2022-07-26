def recursive_sum(number):
    if number == 0:
        return 0
    else:
        print(number)
        return number + recursive_sum(number - 1)
    
while True:
    try:
        number = int(input("Enter a number (0, to stop): "))
        if number == 0:
            break
        print(f"Recursive Sum of {number}: {recursive_sum(number)}")
    except ValueError:
        print("Invalid number!")

def factorial(number):
    if number == 1:
        return 1  # base case
    else:
        print(number)
        return number * factorial(number - 1)  # recursive case
  
print(f"Fatorial de 5: {factorial(5)}")
print(f"Fatorial de 10: {factorial(10)}")
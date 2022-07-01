def biggest_number(num1, num2):
    if num1 > num2:
        return f"({num1}) é maior que ({num2})"
    elif num2 == num1:
        return f"({num1}) é igual a ({num2})"
    else:
        return f"({num2}) é maior que ({num1})"


print(biggest_number(5, 10))
print(biggest_number(5, 5))
print(biggest_number(10, 5))

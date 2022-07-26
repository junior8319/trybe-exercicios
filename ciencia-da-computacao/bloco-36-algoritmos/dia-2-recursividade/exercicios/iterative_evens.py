def iterative_evens(number):
  evens = 0
  for i in range(number + 1):
    if i % 2 == 0:
      print(f"{i} is even")
      evens += 1
  return evens

while True:
  try:
    number = int(input("Enter a number(0 to quit):"))
    if number == 0:
      break
    print(f"There are {iterative_evens(number)} even numbers between 0 and {number}")
  except ValueError:
    print("Please enter a number")
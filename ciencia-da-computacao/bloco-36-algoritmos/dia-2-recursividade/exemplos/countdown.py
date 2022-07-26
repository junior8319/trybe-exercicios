def countdown(number):
    print("Countdown:")
    if number == 0:
        print("END!")
    else:
        print(number)
        countdown(number - 1)

countdown(10)
countdown(5)

# beware of the infinite loop
# the if statement above break the loop at the expected end.
# when number == 0, in this case.
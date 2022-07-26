def recursive_mdc(a, b):
    if b == 0:
        return a
    return recursive_mdc(b, a % b)

print(recursive_mdc(7, 28))
print(recursive_mdc(26, 28))
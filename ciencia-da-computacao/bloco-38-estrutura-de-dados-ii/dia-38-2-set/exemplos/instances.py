from conjunto import Conjunto

conjunto = Conjunto()

for item in [0, 10, 100, 1000]:
    conjunto.add(item)

print(conjunto)
print(conjunto.last_element)
print(conjunto.__str__())

conjunto2 = Conjunto()
print(conjunto2.set)
for item in [1, 2, 3, 4]:
    conjunto2.add(item)

print(conjunto2.last_element)
print(conjunto2.__str__())
print(1 in conjunto2)
print(0 in conjunto2)
print(conjunto2.set)

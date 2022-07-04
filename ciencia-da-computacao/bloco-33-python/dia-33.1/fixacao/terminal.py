a = 4
b = 5
hours = 6
minutes = hours * 60
seconds = minutes * 60
fruits = ["apple", "banana", "orange", "pear"]


if a > b:
    print("A é maior que B")
else:
    print("B é maior que A")


print(a)


print(b)


print(hours)
print(minutes)


print(seconds)


print(type(a))


print(fruits[-1])


print(a + b)
# ; makes an interruption on execution


restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]


filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

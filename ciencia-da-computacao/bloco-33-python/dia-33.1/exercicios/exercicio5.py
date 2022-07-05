from math import ceil

meters_per_liter = 3
liters_per_can = 18
meters_per_can = meters_per_liter * liters_per_can
can_price = 80.00


def calculate_consumption(square_meters):
    cans = square_meters / meters_per_can
    print(square_meters)
    print(meters_per_can)
    print(f'{(cans):.2f}')
    cans = ceil(cans)
    print(f"{square_meters}m² são {cans} latas de tinta")
    print(f"Preço total: R${cans * can_price}")
    return cans


while True:
    square_meters = input(
        "Digite a quantidade de metros quadrados ('s' para SAIR): "
    )
    if square_meters == 's':
        break
    if not square_meters.isnumeric():
        break
    calculate_consumption(float(square_meters))

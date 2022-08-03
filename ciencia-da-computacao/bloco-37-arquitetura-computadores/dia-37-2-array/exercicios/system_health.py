# percorre a lista e, se encontra o valor 1, soma 1 ao accumulator
#  se o próximo valor também for 1, soma 1 ao accumulator
# caso contrário, adiciona o valor do acumulador a uma lista de controle
#  em seguida, zera o accumulator e repete o processo
# após percorrer toda a lista, retorna o maior valor da lista de controle

# My reasoning:
def verify_stability_time(states):
    accumulator = 0
    control_list = []
    # Complexidade for this loop: O(n)
    for index in range(len(states)):
        if states[index] == 0:
            control_list.append(accumulator)
            accumulator = 0
        if states[index] == 1:
            accumulator += 1
        control_list.append(accumulator)
        print(f"No índice: {index}, Acumulador: {accumulator}, lista de controle: {control_list}")
  # Complexity of max: O(n)
    return max(control_list)
# Complexity of this function: O(n + n)
# 

# Course's reasoning:
# def verify_stability_time(states):
#     max_stability_time = 0
#     current_stability_time = 0
    
#     for value in states:
#         if value == 1:
#             current_stability_time += 1
#         else:
#             current_stability_time = 0
#         if current_stability_time > max_stability_time:
#             max_stability_time = current_stability_time
#     return max_stability_time
# Complexity of this function: O(n)

def test_stability_time():
    assert verify_stability_time([0, 1, 1, 1, 0, 0, 1, 1]) == 3
    assert verify_stability_time([1, 1, 1, 1, 0, 0, 1, 1]) == 4
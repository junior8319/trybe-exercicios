from Stopwatch import Stopwatch

def bubble_sort(array):
    length = len(array)
    
    for ordered_elements in range(length - 1):
        for item in range(0, length - 1 - ordered_elements):
            if array[item] > array[item + 1]:
                current_item = array[item]
                array[item] = array[item + 1]
                array[item + 1] = current_item
                
    return array

array = ["zebra", "macaco", "elefante", "arara", "javali"]
print(bubble_sort(array))

# Primeira iteração:
# 1. zebra > macaco: [macaco, zebra, elefante, arara, javali]
# 2. zebra > elefante: [macaco, elefante, zebra, arara, javali]
# 3. zebra > arara: [macaco, elefante, arara, zebra, javali]
# 4. zebra > javali: [macaco, elefante, arara, javali, zebra]
# 
# Segunda iteração:
# 1. macaco > elefante: [elefante, macaco, arara, javali, zebra]
# 2. macaco > arara: [elefante, arara, macaco, javali, zebra]
# 3. macaco > javali: [elefante, arara, javali, macaco, zebra]
# 4. macaco < zebra: [elefante, arara, javali, macaco, zebra]

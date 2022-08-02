def merge_sort (array, start=0, end=None):
    if end is None:
        end = len(array)
    if (end - start) > 1:
        middle = (start + end) // 2
        merge_sort(array, start, middle)
        merge_sort(array, middle, end)
        merge(array, start, middle, end)

def merge(array, start, middle, end):
    left = array[start:middle]
    right = array[middle:end]
    
    left_index, right_index = 0, 0
    
    for general_index in range(start, end):
        if left_index >= len(left):
            array[general_index] = right[right_index]
            right_index = right_index + 1
        elif right_index >= len(right):
            array[general_index] = left[left_index]
            left_index = left_index + 1
        elif left[left_index] < right[right_index]:
            array[general_index] = left[left_index]
            left_index = left_index + 1
        else:
            array[general_index] = right[right_index]
            right_index = right_index + 1

numbers_list = [7, 3, 5, 4, 1, 2, 6]
merge_sort(numbers_list, 0, len(numbers_list))
print(numbers_list)
def quick_sort(letters, start=0, end=None):
    if end == None:
        end = len(letters) - 1
    
    if start < end:
        partitioned = partition(letters, start, end)
        quick_sort(letters, start, partitioned - 1)
        quick_sort(letters, partitioned + 1, end)

def partition(letters, start, end):
    pivot = letters[end]
    delimiter = start - 1
    
    for index in range(start, end):
        if letters[index] <= pivot:
            delimiter = delimiter + 1
            letters[index], letters[delimiter] = letters[delimiter], letters[index]
    letters[delimiter + 1], letters[end] = letters[end], letters[delimiter + 1]
    
    return delimiter + 1

word = 'alegria'
in_list_word = list(word.lower())
print(in_list_word)
quick_sort(in_list_word)
print(in_list_word)
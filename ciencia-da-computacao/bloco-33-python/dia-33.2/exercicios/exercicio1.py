def removing_letters(word):
    counter = len(word)
    for qty_letters_removing in range(counter):
        for index in range(counter - qty_letters_removing):
            print(word[index], end='')
        print()


while True:
    word = input("Escreva uma palavra (0 para sair): ")
    if word == "0":
        break
    removing_letters(word)

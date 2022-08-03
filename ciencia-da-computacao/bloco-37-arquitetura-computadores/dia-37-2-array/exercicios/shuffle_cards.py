def shuffle_cards(deck):
    middle = len(deck) // 2
    initial_part = deck[:middle]
    complementary_part = deck[middle:]
    
    print(f"Parte inicial: {initial_part}")
    print(f"Parte complementar: {complementary_part}")
    
shuffle_cards([1, 2, 3, 4, 5])

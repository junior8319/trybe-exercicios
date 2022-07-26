def play_naval_battle(grid, line, column):
    if grid[line][column] == 1:
        print("ACERTOU!")
        return True

    print("ÁGUA")
    return False


play_naval_battle(
    [[0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 1, 0]], 0, 4
)
play_naval_battle(
    [[0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 1, 0]], 1, 1
)
play_naval_battle(
    [[0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 1, 0]], 0, 0
)
play_naval_battle(
    [[0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 1, 0]], 1, 0
)
play_naval_battle(
    [[0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 1, 0]], 0, 2
)
play_naval_battle(
    [[0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 1, 0]], 2, 3
)

# Complexidade: O(1), pois a função é de retorno constante (True ou False).

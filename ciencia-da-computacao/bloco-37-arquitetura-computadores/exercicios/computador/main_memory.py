class MainMemory:
    def __init__(self):
        self.clean()
        self.loaded_memory = []

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        return self.loaded_memory[index]

    def clean(self):
        self.loaded_memory = []
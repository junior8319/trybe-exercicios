class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = "{"
        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "
        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def union(self, other):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] or other.set[index]:
                new_set.add(index)
        return new_set

    def intersection(self, other):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] and other.set[index]:
                new_set.add(index)
        return new_set

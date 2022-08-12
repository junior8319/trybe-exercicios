class HashMap:
    def __init__(self):
        self._buckets = [
            []
            for index in range(10)
        ]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    def get_bucket_index(self, id_num):
        if self.has_this_address(id_num):
            address = self.get_address(id_num)
            positions_number = len(self._buckets[address])
            for index in range(positions_number):
                if self._buckets[address][index].id_num == id_num:
                    return index
                print(f"Não encontrado o id {id_num}")
                return None

    # def get_employee_name(self, id_num):
        # address = self.get_address(id_num)
        # return self._buckets[address].name

    def has_this_address(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, employee):
        print(f"Nome a ser atualizado: {self.get_value(employee.id_num)}")
        index = self.get_bucket_index(employee.id_num)
        address = self.get_address(employee.id_num)
        if index is not None and address is not None:
            self._buckets[address][index].name = employee.name
            print("Nome atualizado com sucesso!")

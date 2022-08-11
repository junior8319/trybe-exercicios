class HashMap:
    def __init__(self):
        self._buckets = [
            None
            for index in range(10)
        ]


    def get_address(self, id_num):
        return id_num % 10


    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_employee_name(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name


    def has_this_address(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None
    
    
    def update_value(self, employee):
        print(f"Nome a ser atualizado: {self.get_employee_name(employee.id_num)}")
        address = self.get_address(employee.id_num)
        if self.has_this_address(employee.id_num):
            self._buckets[address].name = employee.name
            print("Nome atualizado com sucesso!")

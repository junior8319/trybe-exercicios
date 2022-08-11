from Employee import Employee
from HashMap import HashMap

employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

hash_map = HashMap() 

for employee_id, employee_name in employees:
    employee = Employee(employee_id, employee_name)
    hash_map.insert(employee)
    print(f"Nome: {hash_map.get_value(employee_id)}")
    print(f"Registrado no endereço? {hash_map.has_this_address(employee_id)}")
    print(f"Endereço: {hash_map.get_address(employee_id)}")

print(f"Tem o endereço para o id_num 10? {hash_map.has_this_address(10)}")

to_update = Employee(10, "name30")
hash_map.update_value(to_update)
print(f"Nome: {hash_map.get_value(10)}")

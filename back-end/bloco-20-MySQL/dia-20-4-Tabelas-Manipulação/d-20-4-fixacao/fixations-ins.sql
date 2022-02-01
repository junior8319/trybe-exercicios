/* este roteiro utiliza o banco de dados sakila para suas inquirições */
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, email, active, username, password)
VALUES ('ANTONIO', 'JUNIOR', 1, 1, 'ANTONIO@JUNIOR.COM', 0, 'antonio_junior', '12345678');

SELECT * FROM sakila.staff;
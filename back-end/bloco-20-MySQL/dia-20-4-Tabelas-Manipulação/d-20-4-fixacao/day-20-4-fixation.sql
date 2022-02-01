/* este roteiro utiliza o banco de dados sakila para suas inquirições */
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, email, active, username, password)
VALUES ('ANTONIO', 'JUNIOR', 1, 1, 'ANTONIO@JUNIOR.COM', 0, 'antonio_junior', '12345678');

SELECT * FROM sakila.staff;

INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, email, active, username, password) VALUES
('JOSE', 'DAS QUANTAS', 2, 2, 'JOSE@DAS.QUANTAS.COM', 0, 'jose_das_quantas', '12345678'),
('FULANA', 'DE TAL', 1, 1, 'FULANA@DE.TAL.COM', 0, 'fulana_de_tal', '12345678');

INSERT INTO sakila.category (name) VALUES
('K-POP'),
('FAKE-NEWS'),
('HARD THINGS');


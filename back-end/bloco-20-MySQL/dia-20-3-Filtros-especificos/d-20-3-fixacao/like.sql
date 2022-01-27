/* Este roteiro(script) de inquirição(query) demanda o banco de dados sakila estar ativo */
USE sakila;
SELECT * FROM film
	WHERE title LIKE '%ace%';
SELECT * FROM film
	WHERE description LIKE '%china';
SELECT * from film
	WHERE description LIKE '%girl%'
    AND title LIKE '%lord'
    LIMIT 2; 
-- não seria necessário limite de 2 porque o resultado foi de apenas 2 registros, porém o enunciado pede 2 filmes
-- então é bom estar estabelecido caso os dados do banco sejam alterados no futuro.
SELECT * FROM film
	WHERE title LIKE '___gon%'
    LIMIT 2;
SELECT * FROM film
	WHERE title LIKE '___gon%'
    AND description LIKE '%Documentary%';
SELECT * FROM film
	WHERE title LIKE '%academy'
    OR title LIKE 'mosquito%';
SELECT * FROM film
	WHERE description LIKE '%monkey%'
    AND description LIKE '%sumo%';

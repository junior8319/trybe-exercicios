USE sakila;
SELECT * FROM actor;
SELECT DISTINCT last_name from actor;
SELECT * FROM actor ORDER BY last_name, first_name DESC;
SELECT name FROM language WHERE name!='Italian' LIMIT 10;
SELECT title, release_year, length, rating, replacement_cost FROM film
	ORDER BY length DESC, replacement_cost
    LIMIT 20;

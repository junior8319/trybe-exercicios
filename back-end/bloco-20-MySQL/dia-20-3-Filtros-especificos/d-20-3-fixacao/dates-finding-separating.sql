/* este roteiro utiliza o banco de dados sakila para suas inquirições */
SELECT COUNT(*) AS pagamentos FROM sakila.payment
WHERE date(payment_date) = '2005-05-25';

SELECT COUNT(*) FROM sakila.payment
WHERE date(payment_date)
BETWEEN '2005-07-01' AND '2005-08-22'; -- resultado 11799(?)
-- WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22'; -- resultado 11173(?)/esta é a resposta do gabarito

SELECT
	year(rental_date) AS ano,
    month(rental_date) AS mês,
    day(rental_date) AS dia,
    hour(rental_date) AS hora,
    minute(rental_date) AS minutos,
    second(rental_date) AS segundos FROM sakila.rental
WHERE rental_id = 10330;

SELECT * FROM sakila.payment
WHERE date(payment_date) = '2005-07-28'
AND hour(payment_date) >= 22
ORDER BY hour(payment_date) ,minute(payment_date), second(payment_date);
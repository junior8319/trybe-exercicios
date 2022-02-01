SELECT
	m.title,
	(bo.domestic_sales + bo.international_sales) AS vendas
FROM Movies AS m
INNER JOIN BoxOffice AS bo
ON bo.movie_id = m.id
WHERE bo.international_sales > bo.domestic_sales
ORDER BY m.title;

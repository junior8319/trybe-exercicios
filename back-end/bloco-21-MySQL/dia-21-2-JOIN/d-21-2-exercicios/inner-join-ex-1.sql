SELECT m.title, bo.domestic_sales, bo.international_sales
FROM BoxOffice AS bo
INNER JOIN Movies AS m
ON bo.movie_id = m.id
ORDER BY m.title;

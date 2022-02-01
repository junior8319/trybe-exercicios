SELECT m.title, bo.rating
FROM Movies AS m
INNER JOIN BoxOffice AS bo
ON bo.movie_id = m.id
ORDER BY bo.rating DESC;

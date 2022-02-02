SELECT
	-- t.name,
    -- t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.id,
    bo.rating
-- FROM Theater AS t
FROM Movies AS m
-- INNER JOIN Movies AS m
INNER JOIN BoxOffice AS bo
-- ON t.id = m.theater_id
-- AND m.id = bo.movie_id
ON m.id = bo.movie_id
WHERE bo.rating > 8;
-- ORDER BY t.name;
-- the commented lines make the query includes data from theaters

SELECT
	t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.id
FROM Theater AS t
RIGHT JOIN Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

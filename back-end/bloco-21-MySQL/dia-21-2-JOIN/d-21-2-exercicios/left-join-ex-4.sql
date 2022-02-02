SELECT
	t.name,
    t.location,
    m.title,
    m.director,
    m.year
FROM Theater AS t
LEFT JOIN Movies as m
ON t.id = m.theater_id
ORDER BY t.name;

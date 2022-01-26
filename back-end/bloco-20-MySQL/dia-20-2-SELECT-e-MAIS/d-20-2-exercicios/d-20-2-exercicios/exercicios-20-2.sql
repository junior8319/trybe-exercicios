/* Para que estas inquirições funcionem, deve ser executado o script './Scientists.sql' */
USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
SELECT	01 as number_one,
		02 as number_two,
        03 as number_three;
SELECT 10 + 15;
SELECT (20 * 8) / (8 * 20);
SELECT * FROM Scientists;
SELECT	Name AS 'Nome do Projeto',
		Hours AS 'Tempo de Trabalho'
        FROM Projects;
SELECT * FROM Scientists ORDER BY Name; /* Crescente ou Decrescente? Deixei crescente*/
SELECT * FROM Projects ORDER BY Name DESC;
SELECT CONCAT(
	'O projeto ',
	Name,
	' precisou de ',
	Hours,
	' horas para ser concluído')
    AS resultado
	FROM Projects;
SELECT Name, Hours FROM Projects ORDER BY Hours DESC;
SELECT DISTINCT Project FROM AssignedTo;
SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name, Hours FROM Projects ORDER BY Hours LIMIT 1 OFFSET 1;
SELECT * FROM Projects ORDER BY Hours LIMIT 5;
SELECT CONCAT("Existem ", COUNT(DISTINCT Name), " cientistas na tabela Scientists") FROM Scientists;
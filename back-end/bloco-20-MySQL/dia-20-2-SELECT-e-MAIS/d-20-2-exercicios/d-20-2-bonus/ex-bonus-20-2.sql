/* Para o funcionamento destas inquirições(queries), deve ser executado antes o arquivo(script) './PiecesProviders.sql' */
USE PiecesProvider;
SELECT Piece, Price FROM Provides
	WHERE Provider='RBT';
SELECT * FROM Provides
	ORDER BY Price DESC LIMIT 5;
SELECT Provider, Price FROM Provides
	ORDER BY Price DESC LIMIT 4;
SELECT * FROM Provides
	WHERE Provider='HAL'
    ORDER BY Price DESC;
SELECT COUNT(DISTINCT Provider) FROM Provides
	WHERE Piece=1;
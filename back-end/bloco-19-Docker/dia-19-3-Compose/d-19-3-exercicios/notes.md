Exercise 1.2
Resolution:
-> docker run -d --name container-ex-one-apache -p 4545:80 -v $(pwd):/usr/local/apache2/htdocs/  httpd:2.4
Resolutions:
Exercise 1.2
-> docker run -d --name container-ex-one-apache -p 4545:80 -v $(pwd):/usr/local/apache2/htdocs/  httpd:2.4
Exercise 1.3
Just to access the localhost:4545/missao_trybe.html on the browser.
Exercise 1.4
Add a new paragraph.
Exercise 1.5
-> docker container ls -a
ID: 326f14a5a7e1
Exercise 1.6
-> docker container inspect 326
Result:
  "Mounts": [
            {
                "Type": "bind",
                "Source": "/home/junior/estudos/trybe-exercicios/back-end/bloco-19-Docker/dia-19-3-Compose/d-19-3-exercicios",
                "Destination": "/usr/local/apache2/htdocs",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
Exercise 1.7
-> docker container stop 326
Exercise 1.8
-> docker container rm 326
Exercise 1.9
Result: file still exists.
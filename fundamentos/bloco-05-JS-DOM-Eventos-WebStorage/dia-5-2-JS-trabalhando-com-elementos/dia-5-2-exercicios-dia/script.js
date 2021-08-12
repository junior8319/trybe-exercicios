let newH1 = document.createElement('h1')
newH1.innerText = "Exercício 5.2 - JavaScript DOM"
newH1.id = "page-title"
document.body.appendChild(newH1)

let main = document.createElement('main')
main.className = "main-content"

document.body.appendChild(main)

let sectionCenter = document.createElement('section')
sectionCenter.className = "center-content"

main.appendChild(sectionCenter)



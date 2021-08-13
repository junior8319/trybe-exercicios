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

let sectionLeft = document.createElement('section')
sectionLeft.className = "left-content"

main.appendChild(sectionLeft)

let sectionRight = document.createElement('section')
sectionRight.className = "right-content"

main.appendChild(sectionRight)

let newParagraph = document.createElement('p')
newParagraph.innerText = "Algum texto"

sectionCenter.appendChild(newParagraph)

let newImage = document.createElement('img')
newImage.src = "https://picsum.photos/200"
newImage.className = "small-image"

sectionLeft.appendChild(newImage)

let newUl = document.createElement('ul')
sectionRight.appendChild(newUl)

let numbersList = [];
for (let index = 0; index < 10; index += 1) {
  switch (index) {
    case 0:
      numbersList.push("um")
      break
    case 1:
      numbersList.push("dois")
      break
    case 2:
      numbersList.push("três")
      break
    case 3:
      numbersList.push("quatro")
      break
    case 4:
      numbersList.push("cinco")
      break
    case 5:
      numbersList.push("seis")
      break
    case 6:
      numbersList.push("sete")
      break
    case 7:
      numbersList.push("oito")
      break
    case 8:
      numbersList.push("nove")
      break
    case 9:
      numbersList.push("dez")
      break
  }
}

for (let index = 0; index < numbersList.length; index += 1) {
  let newLi = document.createElement('li')
  newLi.innerText = numbersList[index]
  newLi.className = "textualNumbers"
  newUl.appendChild(newLi)
}

let firstH3 = document.createElement('h3')
firstH3.id = 'first-main-subtitle'
main.appendChild(firstH3)

let secondH3 = document.createElement('h3')
secondH3.id = 'second-main-subtitle'
main.appendChild(secondH3)

let thirdH3 = document.createElement('h3')
thirdH3.id = 'third-main-subtitle'
main.appendChild(thirdH3)

firstH3.innerText = "Primeiro subtítulo"
secondH3.innerText = "Segundo subtítulo"
thirdH3.innerText = "Terceiro subtítulo"
newH1.className = "title"
firstH3.className = "description"
secondH3.className = "description"
thirdH3.className = "description"

main.removeChild(sectionLeft)
sectionRight.style.margin = "auto"

sectionCenter.parentElement.style.backgroundColor = "green"

let listElements = document.querySelectorAll('.textualNumbers')
for (let index = 0; index < listElements.length; index += 1) {
  (index >= listElements.length - 2) ? listElements[index].remove() : false  
}
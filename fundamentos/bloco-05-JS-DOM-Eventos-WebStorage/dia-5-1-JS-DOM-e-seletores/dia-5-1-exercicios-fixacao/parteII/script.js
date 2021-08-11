const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

let pageTitle = document.getElementById("page-title");
pageTitle.innerText = 'Rocky';

let subtitle = document.getElementById("subtitle");
subtitle.innerText = "Viva o Kahoooooot!";
subtitle.style.color = "#CFC5B0";
subtitle.style.backgroundColor = "#978353";
subtitle.style.padding = "80px";
subtitle.style.fontSize = "40px";
subtitle.style.margin = "0";


let secondParagraph = document.getElementById("second-paragraph");
secondParagraph.innerText = "Hoje, 09/08/2021, eu fiquei em segundo lugar no kahoot da aula ao vivo da Trybe e fiquei muito contente!";
secondParagraph.style.color = "#CFC5B0";
secondParagraph.style.backgroundColor = "#827C6F";
secondParagraph.style.padding = "50px";
secondParagraph.style.fontSize = "25px";
secondParagraph.style.margin = "0";

let paragrafos = document.getElementsByTagName("p");
for (let index = 0; index < paragrafos.length; index += 1) {
  paragrafos[index].className = 'paragraphs';
}

let classParagraphs = document.getElementsByClassName("paragraphs");
classParagraphs[0].style.fontSize = "20px";
classParagraphs[0].style.fontFamily = "sans-serif";

let theSubtitle = document.getElementsByTagName("h4");
theSubtitle[0].style.color = "white";


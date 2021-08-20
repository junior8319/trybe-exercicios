const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso? */

function addClassTech (receivedEvent) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  receivedEvent.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', addClassTech);
secondLi.addEventListener('click', addClassTech);
thirdLi.addEventListener('click', addClassTech);

/*
3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech'; */

function handleInputs (receivedEvent) {
  const techSelected = document.querySelector('.tech');
  techSelected.innerText = receivedEvent.target.value;
}

input.addEventListener('keyup', handleInputs);

/*
4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio? */

function myTopRedirect () {
  window.location.replace('https://github.com/junior8319');
}

myWebpage.addEventListener('dblclick', myTopRedirect);

/*
5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo; */

function changeColor (receivedEvent) {
 const objectToChange = receivedEvent.target;
 console.log(objectToChange);
 objectToChange.style.color = "crimson";
}

function backColor (receivedEvent) {
  const objectToBack = receivedEvent.target;
  objectToBack.style.color = "";
}

myWebpage.addEventListener('mouseenter', changeColor);
myWebpage.addEventListener('mouseleave', backColor);

/*
Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
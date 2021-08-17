function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfMonth () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysUl = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const theDay = dezDaysList[index];
    const theDayListItem = document.createElement('li');
    theDayListItem.classList.add('day');
    theDayListItem.innerText = theDay;
    if(theDay === 24 || theDay === 31) {
      theDayListItem.classList.add('holiday');
    } else if (theDay === 4 || theDay === 11 || theDay === 18) {
      theDayListItem.classList.add('friday');
    } else if (theDay === 25) {
      theDayListItem.classList.add('holiday');
      theDayListItem.classList.add('friday');
    }
    daysUl.appendChild(theDayListItem);
  }
}

createDaysOfMonth();

function toggleHolidaysColor() {
  const holidays = document.getElementsByClassName('holiday');
  for (let index = 0; index < holidays.length; index +=1) {
    const currentColor = getComputedStyle(holidays[index]).getPropertyValue('color');
    (currentColor !== 'rgb(134, 43, 214)') ? holidays[index].style.color = 'rgb(134, 43, 214)' : holidays[index].style.color = 'rgb(119, 119, 119)';
  }
}



function toggleFridayText() {
  const fridays = document.getElementsByClassName('friday');
  const fridaysArray = [];
  for (let index = 0; index < fridays.length; index += 1) {
    fridaysArray.push(fridays[index].innerText);
  }
  const fridayButton = document.querySelector('.btn-friday');
  let newText = 'xablau';
  fridayButton.addEventListener('click', function () {
    for (let index = 0; index < fridays.length; index +=1) {
      (fridays[index].innerHTML !== newText) ? fridays[index].innerHTML = newText : fridays[index].innerHTML = fridaysArray[index];
    }
  })
};


function createHolidaysButton (holidaysString) {
  const selectParent = document.querySelector('div.buttons-container');
  const theButton = document.createElement('button');
  theButton.classList.add('btn-holiday');
  theButton.innerText = holidaysString;
  selectParent.appendChild(theButton);
}

createHolidaysButton('Feriados');

function createFridayButton (fridayString) {
  const selectParent = document.querySelector('div.buttons-container');
  const theButton = document.createElement('button');
  theButton.classList.add('btn-friday');
  theButton.innerText = fridayString;
  selectParent.appendChild(theButton);
}

createFridayButton('Sexta-feira');

function createTaskSpan (spanString) {
  const selectTaskParent = document.querySelector('div.my-tasks');
  const theSpan = document.createElement('span');
  theSpan.innerHTML = spanString;
  selectTaskParent.appendChild(theSpan);
}

createTaskSpan('Teste:');
toggleFridayText();

const holidayButton = document.querySelector('.btn-holiday');
holidayButton.addEventListener('click', toggleHolidaysColor);

const days = document.getElementsByClassName('day');
for (let index = 0; index < days.length; index += 1) {
  days[index].addEventListener('mouseenter', toggleZoomInDays);
  days[index].addEventListener('mouseleave', toggleZoomInDays);
  days[index].addEventListener('click', markDayForTask);
}
function toggleZoomInDays (receivedEvent) {
  const receivedElement = receivedEvent.target;
  const type = receivedEvent.type;

  if (type === 'mouseenter') {
    receivedElement.style.fontSize = "25px";
    receivedElement.style.fontWeight = "600";
  }
  
  if (type === 'mouseleave') {
    receivedElement.style.fontSize = "";
    receivedElement.style.fontWeight = "";
  }

}

function createTaskDiv(receivedColor) {
  const taskContainer = document.querySelector('.my-tasks');
  const newTaskDiv = document.createElement('div');
  newTaskDiv.classList.add('task');
  newTaskDiv.style.backgroundColor = receivedColor;
  taskContainer.appendChild(newTaskDiv);
}

createTaskDiv('rgb(255, 160, 150)');

function toggleSelectedColor() {
  const taskSelected = document.getElementsByClassName('task selected');
  const myTasksContainer = document.querySelector('.task');

  myTasksContainer.addEventListener('click', function(receivedEvent) {
    if (taskSelected.length === 0) {
      receivedEvent.target.className = 'task selected';
    } else {
      receivedEvent.target.className = 'task';
    }
  })
};

toggleSelectedColor();

function markDayForTask (receivedEvent) {
  const task = document.querySelector('.task.selected');
  const colorOfTask = getComputedStyle(task).getPropertyValue('background-color');
  const markedDay = receivedEvent.target;
  const colorOfMarkedDay = getComputedStyle(markedDay).getPropertyValue('color');
  (colorOfMarkedDay !== colorOfTask) ? markedDay.style.color = colorOfTask : markedDay.style.color = '';
}

function makeAppointments(receivedEvent) {
  const receivedValue = receivedEvent.target.value;
  const receivedKey = receivedEvent.which;
  console.log(receivedKey, receivedValue);
  if (receivedKey === 13) {
    if (receivedValue.length === 0) {
      window.alert('Erro ao tentar adicionar campo vazio.')
    } else {
      const taskList = document.querySelector('.task-list');
      const newAppointment = document.createElement('li');
      newAppointment.innerHTML = receivedValue;
      taskList.appendChild(newAppointment);
    }
  }  
  // if (buttonPressed) {
  //   if (receivedValue.length === 0) {
  //     window.alert('Erro ao tentar adicionar campo vazio.')
  //   } else {
  //     const taskList = document.querySelector('.task-list');
  //     const newAppointment = document.createElement('li');
  //     newAppointment.innerHTML = receivedValue;
  //     taskList.appendChild(newAppointment);
  //   }
  // }  
}

const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('btn-add');
taskInput.addEventListener('keyup', makeAppointments);
addButton.addEventListener('click', makeAppointments);

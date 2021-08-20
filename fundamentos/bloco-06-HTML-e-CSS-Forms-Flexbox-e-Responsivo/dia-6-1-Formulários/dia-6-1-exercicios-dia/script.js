window.onload = function () {
  loadFedUnits();
  submitResumee();
  isValidDate();
  makeTitlesDisplay3();
  makeLeads();
  const initDate = document.getElementById('input-init-date').DatePickerX.init({format: 'dd/mm/yyyy'});
}

function loadFedUnits () {
  /**
   * Array com nomes dos estados brasileiros obtido em:
   * https://gist.github.com/kavalcante/16106796c430c1711a71c5ba1213cee5
   */
  const fedUnits = { 
      initials: ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'],
      state:['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goías', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraíma', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
  };
  const selectStatesList = document.getElementById('federation-units');
  for (let index = 0; index < fedUnits.initials.length; index += 1) {
    const theUnity = document.createElement('option');
    theUnity.innerText = fedUnits.initials[index] + ' - ' + fedUnits.state[index];
    selectStatesList.appendChild(theUnity);
  }
}


function submitResumee () {
  const buttonSubmit = document.getElementById('btn-submit');
  
  buttonSubmit.addEventListener('click', (receivedEvent) => {
    // receivedEvent.preventDefault();
    console.log('Dados enviados.');
  });
}

function isValidDate () {
  const receivedInput = document.getElementById('input-init-date');
  const buttonSubmit = document.getElementById('btn-submit');

  buttonSubmit.addEventListener('click', () => {
    if (receivedInput.value.length === 0) {
      window.alert('É necessário informar uma data.');
    } else {
      console.log(receivedInput.value);
      const splitedDate = splitDate(receivedInput.value);
      if (!(splitedDate.day > 0 && splitedDate.day <= 31)) {
        window.alert('Dia precisa estar entre 1 e 31.')
      }
      if (!(splitedDate.month > 0 && splitedDate.month <=12)) {
        window.alert('Mês precisa estar em um intervalo entre 1 e 12.');
      }
      if (!(splitedDate.year >0)) {
        window.alert('Ano precisar ser um número maior que 0.')
      }
    }
    
  });
}

function splitDate (date) {
  const splitedDate = date.split('/');
  const day = splitedDate[0];
  const month = splitedDate[1];
  const year = splitedDate[2];
  return {day, month, year};
}


function makeTitlesDisplay3 () {
  const theTitles = document.getElementsByTagName('h1');
  if(theTitles !== null) {
    for(let index = 0; index < theTitles.length; index += 1) {
      theTitles[index].classList.add('display-3');
    }
  }else {
    theTitles = [];
  }
}

function makeLeads () {
  const theParagraphs = document.getElementsByTagName('p');
  if(theParagraphs !== null) {
    for(let index = 0; index < theParagraphs.length; index += 1) {
      (theParagraphs[index].previousElementSibling.tagName === 'H1') ? theParagraphs[index].classList.add('lead') : false;
    }
  } else {
    theParagraphs = [];
  }
}
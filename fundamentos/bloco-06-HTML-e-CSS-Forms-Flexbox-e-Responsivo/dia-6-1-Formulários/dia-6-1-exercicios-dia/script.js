/**
 * Array com nomes dos estados brasileiros obtido em:
 * https://gist.github.com/kavalcante/16106796c430c1711a71c5ba1213cee5
 */

const fedUnitys = { 
    initials: ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'],
    state:['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goías', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraíma', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
};
const selectStatesList = document.getElementById('federation-unitys');
for (let index = 0; index < fedUnitys.initials.length; index += 1) {
  const theUnity = document.createElement('option');
  theUnity.innerText = fedUnitys.initials[index] + ' - ' + fedUnitys.state[index];
  selectStatesList.appendChild(theUnity);
}
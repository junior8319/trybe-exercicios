const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  });

  const  filterSimpsons = async () => {
    const simpsonsList = await fs
      .readFile('./simpsons.json', 'utf-8')
      .then((fileContent) => JSON.parse(fileContent));
    
    const filteredSimpsons = simpsonsList.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    console.log(filteredSimpsons);
    await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpsons));
  };

  filterSimpsons();

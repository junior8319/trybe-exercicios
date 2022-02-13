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
    await fs.appendFile('./filteredSimpsons.json', JSON.stringify(filteredSimpsons));
  };

  const simpsonsFamily = async () => {
    const simpsonsList = await fs
      .readFile('./simpsons.json', 'utf-8')
      .then((fileContent) => JSON.parse(fileContent));

      const familySelected = simpsonsList.filter((simpson) => simpson.name.includes('Simpson'));
      console.log(familySelected);
      await fs.appendFile('./simpsonsFamily.json', JSON.stringify(familySelected));
  };

  const addNelsonToFamily = async () => {
    const simpsonsList = await fs
      .readFile('./simpsons.json', 'utf-8')
      .then((fileContent) => JSON.parse(fileContent));

      const findNelson = simpsonsList.find((simpson) => simpson.name.includes('Nelson Muntz'));
      console.log(findNelson);

      await fs.appendFile('./simpsonsFamily.json', JSON.stringify(findNelson));
  };

  filterSimpsons();
  simpsonsFamily();
  addNelsonToFamily();

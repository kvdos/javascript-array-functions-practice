const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map(character => character.name);
console.log(names);

//2. Get array of all heights
const heights = characters.map(character => character.height);
console.log(heights);

//3. Get array of objects with just name and height properties
const mapTres = characters.map(character => ({
  name: character.name,
  height: character.height,
}));
console.log(mapTres);

//4. Get array of all first names
const firstName = characters.map(
  character =>
    //   character.name.slice(0, character.name.indexOf(' ')));
    character.name.split(' ')[0]
);
console.log(firstName);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + +cur.mass, 0);
console.log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + +cur.height, 0);
console.log(totalHeight);

//3. Get total number of characters by eye color
const totalCha = characters.reduce((acc, cur) => {
  const color = cur.eye_color;
  if (acc[color]) acc[color]++;
  else acc[color] = 1;
  return acc;
}, {});

console.log(totalCha);

//4. Get total number of characters in all the character names
const totalLet = characters.reduce((acc, cur) => acc + cur.name.length, 0);
console.log(totalLet);

//***FILTER***
//1. Get characters with mass greater than 100
const massGreater = characters.filter(character => character.mass > 100);
console.log(massGreater);

//2. Get characters with height less than 200
const massLess = characters.filter(character => character.mass < 200);
console.log(massLess);

//3. Get all male characters
const males = characters.filter(character => character.gender === 'male');
console.log(males);

//4. Get all female characters
const females = characters.filter(character => character.gender === 'female');
console.log(females);

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b) => b.mass - a.mass);
console.log(byMass);

//2. Sort by height
const byHeight = characters.sort((a, b) => b.height - a.height);
console.log(byHeight);

//3. Sort by name
const byName = characters.sort((a, b) => (a.name < b.name ? -1 : 1));
console.log(byName);

//4. Sort by gender
const byGender = characters.sort((a, b) => (a.gender < b.gender ? -1 : 1));
console.log(byGender);

//***EVERY***
//1. Does every character have blue eyes?
const checkEyes = characters.every(character => character.eye_color === 'blue');
console.log(checkEyes);

//2. Does every character have mass more than 40?
const checkMass = characters.every(character => character.mass > 40);
console.log(checkMass);

//3. Is every character shorter than 200?
const checkHeight = characters.every(character => character.height < 200);
console.log(checkHeight);

//4. Is every character male?
const checkGender = characters.every(character => character.gender === 'male');
console.log(checkGender);

//***SOME***
//1. Is there at least one male character?
const anyMale = characters.some(character => character.gender === 'male');
console.log(anyMale);

//2. Is there at least one character with blue eyes?
const anyEyes = characters.some(character => character.eye_color === 'blue');
console.log(anyEyes);

//3. Is there at least one character taller than 210?
const anyHeight = characters.some(character => character.height > 210);
console.log(anyHeight);

//4. Is there at least one character that has mass less than 50?
const anyMass = characters.some(character => character.mass < 50);
console.log(anyMass);

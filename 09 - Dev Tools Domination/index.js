const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hi');

// Interpolated
console.log('hi i am %s string!', 'bobobobo');

// Styled
console.log('%c i am a great text', 'font-size:50px; background:red;');

// warning!
console.warn('eita');

// Error :|
console.error('epaa');

// Info
console.info('vc sabia ');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`)

})

// counting
console.count('top');
console.count('top');
console.count('top');
console.count('top');
console.count('top');

// timing
console.time('fetching data');

fetch('http://api.github.com/users/felipesoares6')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  })

// table
console.table(dogs);

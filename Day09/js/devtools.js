const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');
function makeGreen() {
  p.style.color = '#BADA55';
}

// clearing
console.clear();

//table
console.log('\n\n **Table console.table();');
console.table(dogs);

// Regular
console.log('\n\n **Regular console.log();');
console.log("Hello World!");

// Interpolated
console.log('\n\n **Multiple form to interpolate');

let name = 'Daniel'
console.log("I'm %s !", name);
console.log("I'm " + name + " !");
console.log(`I'm ${name} !`);

// Styled
console.log('\n\n **Styled');
console.log('%c Styled Text!', 'font-size: 20px; color: red; background: blue;');

// warning!
console.log('\n\n **Warning');
console.warn('Vish!');

// Error :|
console.log('\n\n **Error');
console.error('Shit!');

// Info
console.log('\n\n **Info');
console.info('Banging your head against a wall burns 150 calories an hour.');

// Testing
console.log('\n\n **Testing');
console.assert(1 === 2, 'This is wrong!');

// Viewing DOM Elements
console.log('\n\n **Viewing DOM Elements');
console.log(p);
console.dir(p);

// Grouping together
console.log('\n\n **Grouping together');
dogs.forEach(dog => {
    console.groupCollapsed(dog.name);
        console.log(`Name: ${dog.name}`);
        console.log(`He is ${dog.age} years old`);
        console.log(`He is ${dog.age * 7} dogs years old`);
    console.groupEnd(dog.name);
});

// counting
console.log('\n\n **Counting');
console.count('Xin');
console.count('daniel');
console.count('daniel');
console.count('Xin');
console.count('Xin');
console.count('daniel');
console.count('daniel');
console.count('Xin');

// timing
console.log('\n\n **timing');
console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });
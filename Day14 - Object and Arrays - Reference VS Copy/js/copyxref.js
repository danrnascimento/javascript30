// start with strings, numbers and booleans
console.log('\nStart with strings, numbers and booleans')

let age = 20;
let age2 = age;
console.log("Age: " + age + " - Age2: " + age2);
age = 21
console.log("Age: " + age + " - Age2: " + age2);

let name = "Daniel";
let name2 = name;
console.log("Name: " + name + " - Name2: " + name2);
name = "Danilo";
console.log("Name: " + name + " - Name2: " + name2);



// Let's say we have an array
console.log("\nLet's say we have an array");

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log(players);

// and we want to make a copy of it
console.log('and we want to make a copy of it');
const team = players;

console.log("Players: " + players + "\nTeam: " + team);


// You might think we can just do something like this:
console.log('You might think we can just do something like this:');

team[3] = "Lux";

console.log("Players: " + players + "\nTeam: " + team);
console.log('oh no - we have edited the original array too!');
console.log("Why? It's because that is an array reference, not an array copy. They both point to the same array!");
console.log('So, how do we fix this? We take a copy instead!');
console.log('\nOne Way:');
// one way
console.log('const team2 = players.slice();');
const team2 = players.slice();

console.log('\nor create a new array and concat the old one in');

console.log('const.team3 = [].concat(players);');
const team3 = [].concat(players);


console.log('\nor use the new ES6 Spread');

console.log('const team4 = [...players];');
const team4 = [...players];

console.log('\nor');

console.log('const team5 = Array.from(players);');
const team5 = Array.from(players);

// The same thing goes for objects, let's say we have a person object
console.log("\n\n The same thing goes for objects, let's say we have a person object");

const person = {
    name: "Daniel",
    age: 20
};

console.log('\nhow do we take a copy instead?');
console.log('const captain = Object.assign({}, person);');
const captain = Object.assign({}, person);

console.log('\n\nThings to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.');

const daniel = {
    name: 'Daniel',
    age: 20,
    social: {
        facebook: 'danielrnmg',
        instagram: 'danielrnmg'
    }
}

console.log('\nBetter way');
console.log('const dev = JSON.parse(JSON.stringify(daniel));');
const dev = JSON.parse(JSON.stringify(daniel));
// ## Array Cardio Day 2
const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 }
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
];

console.log('List of people');
console.table(people);

console.log('\nList of comments');
console.table(comments);


console.log('\n\n================== Some and Every Checks');
// Array.prototype.some() // is at least one person 19 or older?
console.log('\nIs at least one person 19 or older? ( Array.prototype.some() )')
const isAdult = people.some(person => {
	const currentDate = ((new Date()).getFullYear());
	return currentDate - person.year >= 19;
});
console.log(isAdult); //answer as an object ({variable}) 

// Array.prototype.every() // is everyone 19 or older?
console.log('\nIs everyone 19 or older?? ( Array.prototype.every() )')
const allAdults = people.every(person => {
	const currentDate = ((new Date()).getFullYear());
	return currentDate - person.year >= 19;
});
console.log({allAdults});

console.log('\n\n================== Find and FindIndex Checks');

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
console.log('\n\nFind is like filter, but instead returns just the one you are looking for ( Array.prototype.find() )');
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
console.log('\n\nFind the index of comment with this ID ( Array.prototype.findIndex() )');
const index = comments.findIndex(comment => comment.id === 823423 );
console.log(index);

//Delete the comment with the ID of 823423
console.log('\nDelete the comment with the ID of 823423');
const newComments = comments;
newComments.splice(1, index);
console.table(newComments);

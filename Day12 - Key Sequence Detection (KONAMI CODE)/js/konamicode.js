const pressed = [];
const secretCode = "unicornio";
window.addEventListener('keyup', function (e) {
	pressed.push(e.key);
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); //(-length, diff secretCode)
	if(pressed.join('').includes(secretCode)){
		cornify_add();
	} 
})
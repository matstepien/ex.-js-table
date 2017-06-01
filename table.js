var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
	allNames = femaleNames.concat(maleNames),
	newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
	var newAllNames = allNames.push(newName);
	}
else {
	var newAllNames = newName + ' is already on the list';
	}
console.log(newAllNames);
console.log(allNames);
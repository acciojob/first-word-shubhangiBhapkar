function firstWord(s) {
  // your code here
	let first = s.splice(" ");
	return first[0];
}

// Do not change the code below

const s = prompt("Enter String:"); 
alert(firstWord(s));

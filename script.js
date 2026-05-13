function firstWord(s) {
  // your code here
	if(s = " "){
		return s;
	}
	const first = s.match(/^\w+/)?.[0];
	return first;
}

// Do not change the code below

const s = prompt("Enter String:"); 
alert(firstWord(s));

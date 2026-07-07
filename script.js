function firstWord(s) {
  // your code here
	if (!s) {
    return s;
  }
	const trimmed = s.trim();
	if (!trimmed.includes(" ")) {
    return trimmed;
  }
	const first = s.match(/^\w+/)?.[0];
	return first;
}

// Do not change the code below

const s = prompt("Enter String:"); 
alert(firstWord(s));

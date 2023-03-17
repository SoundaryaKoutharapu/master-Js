// slice() extracts the section of a string and returns it as a new string
// without modifying the original string.

let fullName = "Hima Soundarya Koutharapu";

let lastNmae;
let firstName;

firstName = console.log(fullName.slice(0,15));
lastNmae = console.log(fullName.slice(15,25));

// using indexOf()

lastNmae = console.log (fullName.slice(fullName.indexOf(" ")+10));

firstName = console.log (fullName.slice(fullName.indexOf(" ")+1));





let userName = " SounDarya ";

userName.length;

console.log(userName);
console.log(userName.charAt(6));
console.log(userName.substring(0,3))
console.log(userName.lastIndexOf('a'));
console.log(userName.indexOf('n'))

userName = userName.toUpperCase();
console.log(userName);

userName = userName.toLowerCase();
console.log(userName);

console.log(userName.trim());

let phNumber = "888-672-8490";
phNumber = phNumber.replaceAll("8", "7");
console.log(phNumber);

userName = userName.replace("o", "a");
console.log(userName);


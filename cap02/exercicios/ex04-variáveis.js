/*let varA = "A";
let varB = "B";
let varC = "C";

const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

//Ou

let vaA = "A";
let vaB = "B";
let vaC = "C";

[vaA, vaB, vaC] = [vaB, vaC, vaA];

console.log(vaA, vaB, vaC);
*/

let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

let varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

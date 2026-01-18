let generatePasswords = document.querySelector('.btn');
let outputOne = document.getElementById('output');
let outputTwo = document.getElementById('output-Two');
const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h",
"/"
];

function generatePass() {
   let passWordLength = 15;
   let passWordOne = ""
   let passWordTwo = ""
   for(let i = 0; i < passWordLength; i++) {
    let randomChar = Math.floor(Math.random() * characters.length); 
    passWordOne += characters[randomChar];
    let randomCharTwo = Math.floor(Math.random() * characters.length);
    passWordTwo += characters[randomCharTwo];
      outputOne.value = passWordOne; 
      outputTwo.value = passWordTwo; 
   }
}


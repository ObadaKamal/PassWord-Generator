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

function copyToClipboardOne() {
    outputOne.select();
    outputOne.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputOne.value);
     if(!outputOne.value ==""){
     text = document.querySelector('.text');
    text.innerText = "Password Copied!";
    }

}
function copyToClipboardTwo(){
    outputTwo.select();
    outputTwo.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputTwo.value);
    if(!outputTwo.value ==""){
     text = document.querySelector('.text');
    text.innerText = "Password Copied!";
    }
    
}

let darkMode = document.querySelector('.dark');
let container = document.querySelector('.container');
let svg = document.getElementById('svg');

function darkmodeToggle() {
    container.classList.toggle('dark-mode');
    if(container.classList.contains('dark-mode')){
        svg.style.fill = "#000000";
    } else {
        svg.style.fill = "#ffffff";
    }       
    svg.classList.toggle('dark-svg');
}
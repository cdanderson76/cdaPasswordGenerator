document.addEventListener('DOMContentLoaded', function () {

//START CODE BELOW

  const btnEl = document.getElementById('btn')

  const outputOneEl = document.getElementById('outputOne')
  const outputTwoEl = document.getElementById('outputTwo')

  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"]

//GENERATE PASSWORD

function generatePassword() {

  let password = ''
  
  for( let i = 0; i < 15; i++ ) {
    const randNum = Math.floor(Math.random() * characters.length)
    password += characters[randNum]
  }
}

  //EVENT LISTENER

btnEl.addEventListener('click', function() {
  outputOneEl.textContent = generatePassword()
  outputTwoEl.textContent = generatePassword()
})

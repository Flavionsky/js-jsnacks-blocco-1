//JSnack 1A creazione oggetto palla

var newBall = {
  'nome' : 'palla',
  'peso' : '10'
}

console.log(newBall);
//JSnack 1B prompt che modifica il peso della palla

newBall.peso = prompt("inserisci nuovo peso della palla: ");

console.log(newBall);

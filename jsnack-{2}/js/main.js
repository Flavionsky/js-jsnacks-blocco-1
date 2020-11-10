var bici = [
  {
    'nome' : 'cross',
    'peso' : '18'
  },
  {
    'nome' : 'rider',
    'peso' : '25'
  },
  {
    'nome' : 'mountain',
    'peso' : '30'
  },
  {
    'nome' : 'electric',
    'peso' : '50'
  }
];

console.log(bici);

var pesoLeggero = bici[0];

for(var i=0; i< bici.length; i++){

  if(bici[i].peso < pesoLeggero.peso){

    pesoLeggero = bici[i];
  }
}

console.log("la bici con il peso minore è : ");
console.log(pesoLeggero);

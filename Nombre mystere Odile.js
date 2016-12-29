nbreMyst=Math.floor (Math.random () * 10);
for(var i = 0 ; i <4 ; i++){
  var number=prompt("Entrez un chiffre de 0 à 9");
  if (nbreMyst<number){alert("votre nombre est trop grand");}
  else if(nbreMyst>number){alert("votre nombre est trop petit");}
  else if(nbreMyst==number){alert("Vous avez gagné !") break;}
}
console.log(nbreMyst);
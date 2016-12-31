nbreMyst=Math.floor (Math.random () * 10);
for(var i = 0 ; i <4 ; i++){
  var number=prompt("Entrez un chiffre de 0 à 9");
  if (nbreMyst<number){alert("votre chiffre est trop grand");}
  else if(nbreMyst>number){alert("votre chiffre est trop petit");}
  else if(nbreMyst==number)
  {console.log("Vous avez gagné !  le nombre mystère est : " +  nbreMyst); break}
  
}
if(i=4,number!=nbreMyst){console.log("Désolé vous avez perdu ! le nombre mystère est : " +  nbreMyst);}

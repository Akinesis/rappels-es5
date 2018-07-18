console.log("01 - Fonctions");

var cl = console.log


var nombe1 = 10
var nombre2 = 20

function additionner(nb1, nb2){
    return nb1+nb2
}

cl(additionner(nombe1,nombre2))

var somme = additionner

var resultat2 = somme(nombe1,nombre2)

cl(resultat2)

function multiplication(nb1, nb2){
    return nb1*nb2
}

var multip = multiplication

var resultat3 = multiplication(nombe1,nombre2)

cl(resultat3)

function afficherOperation(nomOperation, operation, nb1, nb2){
    return nomOperation+"("+nb1+","+nb2+") = "+operation(nb1, nb2)
}

cl(afficherOperation("Somme", somme, 20, 40))

cl(afficherOperation("multiplication", multip, 10, 20))

cl(afficherOperation("Soustraction", function(nb1, nb2){
    return nb1-nb2
}
, 15, 5))
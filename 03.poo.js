var cl = console.log

function personne(nom, prenom, pseudo){
    this.nom = nom
    this.prenom = prenom
    this.pseudo = pseudo
    this.getNomComplet = function(){
        return this.prenom + " " + this.nom +" "+ this.pseudo
    }
}

function afficherPersonne(arg){
    cl(arg.nom +" "+ arg.prenom +" "+ arg.pseudo)
}

var jules = new personne("LEMAIRE", "Jules", "jules77")
var paul = new personne("LEMAIRE", "Paul", "paul44")


cl(jules.getNomComplet())

jules.pseudo = "jules44"
cl(jules.getNomComplet())

cl(jules.age)

personne.prototype.age = "NON RENSEIGNE"

cl(jules.age)

jules.age = 30

cl(jules.age)

var robert = {nom:"Leprefet", prenom:"Robert", getNomComplet:function(){
    return this.prenom + " " + this.nom +" "+ this.pseudo
}}
robert.pseudo = "robert77"

afficherPersonne(robert)

function client(numeroClient, nom, prenom, pseudo){
    personne.call(this, nom, prenom, pseudo);

    this.numeroClient = numeroClient

    this.getInfos = function(){
        return this.numeroClient +" "+ this.nom +" "+ this.prenom
    }

}

var steve = new client("A01","LUCAS", "Steve","steve44")

cl(steve.getInfos())
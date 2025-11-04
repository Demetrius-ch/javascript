//let listeDePays = ["France", "Allemagne", "Italie", "Espagne", "Portugal"];

/*listeDePays.forEach(function (pays) {
  console.log(pays);
});*/

//listeDePays.forEach(pays => console.log(pays));
/* let informations = ["lg", "25", "Homme"];

let [prenom, age, sexe] = informations;
console.log(prenom);
console.log(age);
console.log(sexe);

let nombres = [1, 2, 5,80,5];
let copie = nombres.splice()
console.log(copie)
let nombres2 = new Set(nombres)
nombres2.add(80)
nombres2.delete(1)
console.log(nombres2)*/

/*let monMap = new Map([
  ["prenom", "Chandler"],
  ["nom", "Demetrius"],
  ["age", 15],
]);
monMap.set("Poste", "PDG de Facebook");
monMap.set("Chandler", {
  email: "le.com",
});
console.log(monMap);
let objet = {
  nom: "Demetrius",
};*/

/*function addition(...nombres) {
  let resultat = 0;
  nombres.forEach((nombre) => {
    resultat += nombre;
  });
  console.log(resultat);
}
addition(14, 25, 35, 47, 110);*/
/*const nombre = [1, 2, 3, 4, 5];

function double() {
  let resultat = 0;
  let doubles = nombre.forEach((n) => {
    let resultat = resultat + n ;
  });
  console.log(resultat);
  let doubles2 = nombre.map((n) => {
    let resultat = resultat+ n;

  });
  console.log(resultat)
}
console.log(double);
double();*/
//console.log(history)
/*document.querySelector("#a-supprimer").remove();
let header = document.createElement("header");
let div = document.createElement("div");
let p = document.createElement("p");
header.textContent = "Bienvenue";
document.body.append(header);
div.textContent = "Acceuil / une autre page";
document.body.append(div);

header.style.backgroundColor = " #e3b04b";
header.style.padding = "15px";
header.style.color = "white";
header.style.textAlign = "center";
header.style.fontSize = "20px";
div.style.backgroundColor = "#f1d6ab";
div.style.paddingBottom = "40px";
p.textContent = "Ceci est un paragraphe";
document.body.append(p);
let a = document.querySelector("a");
let button = document.querySelector("button");

a.onclick = () => {
  if (confirm("Êtes-vous sûr ?")) {
    location.href = "https:believemy.com";
  }
};
button.onmouseover = () => {
  document.body.style.backgroundColor = "orange";
};
button.onmouseout = () => {
  document.body.style.backgroundColor = "white";
};
a.addEventListener("click", () => {
  if (confirm("Êtes-vous sûr ?")) {
    location.href = "https://github.com";
  } else {
    document.write("Bye");
  }
});
button.addEventListener("mouseover", () => (document.body.style.backgroundColor = "orange"));
button.addEventListener("mouseout", () => (document.body.style.backgroundColor = "white"));*/
/*let intervall;
let secondes = 5;
let btn = document.querySelector("button");
btn.addEventListener("click", start);
function start() {
  intervall = setInterval(decompte, 1000);
}
function decompte() {
  if (secondes == 0) {
    stop();
  } else {
    document.body.innerHTML += secondes + "</br>";
  }
  secondes--;
}
function stop() {
  clearInterval(intervall);
  document.body.innerHTML +="Stop !";
}*/

/*let btn = document.querySelector("button");
let div = document.querySelector("div");
div.style.display = "none";
let hidden = true;

btn.addEventListener("click", () => {
  if (hidden) {
    btn.textContent = "Caché";
    div.style.display = "block";
    hidden = false;
  } else {
    btn.textContent = "Afficher";
    div.style.display = "none";
    hidden = true;
  }
});*/

// Tableau de citations
/* let citations = [
  [
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
    "Gandhi",
  ],
  ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
  ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
  ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
  [
    "A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.",
    "Mark Twain",
  ],
  [
    "Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.",
    "T.S Elliot",
  ],
  ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
  [
    "Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.",
    "Mark Twain",
  ],
  [
    "Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.",
    "Brian Tracy",
  ],
  [
    "Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.",
    "P.T. Barnum",
  ],
  [
    "Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.",
    "Brian Sher",
  ],
  [
    "Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.",
    "Anita Roddick",
  ],
  [
    "Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.",
    "Robert Louis Stevenson",
  ],
  ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
  [
    "Le succès, c’est se promener d’échecs en échecs tout en restant motivé.",
    "Winston Churchill",
  ],
  [
    "Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.",
    "Robert T. Kiyosaki",
  ],
  [
    "Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.",
    "Zig Ziglar",
  ],
  [
    "Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.",
    "Brian Tracy",
  ],
  [
    "Les gagnants trouvent des moyens, les perdants des excuses…",
    "F. D. Roosevelt",
  ],
  [
    "Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.",
    "C.S. Lewis",
  ],
  [
    "Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.",
    "Winston Churchill",
  ],
  [
    "La seule chose que nous ayons à craindre, c'est la peur elle-même",
    "Demetrius",
  ],
  [
    "Ne vous demandez pas ce que votre pays peut faire pour vous, mais ce que vous pouvez faire pour votre pays.",
    "chandler",
  ],
];

let citation = document.querySelector("#citation");
let auteur = document.querySelector("#auteur");
let nouveau = document.querySelector("#nouveau");

let dernier = 0;
let nombre = citation.textContent(citations.length[0]);

nouveau.addEventListener("click", (
  
) => {

});

/*let prenom = { titre: "Demetrius" };

function DireBonjour() {
  console.log("Bonjour je suis "+this.titre);
}
DireBonjour.call(prenom);*/

/*class Utilisateur {
  constructor(prenom, nom, email) {
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
  }
  sePresenter() {
    console.log(
      "Bonjour je suis " +
        this.prenom +
        " " +
        this.nom +
        " Vous pouvez m'écire à l'adresse suivante " +
        this.email
    );
  }
}
var triphelin = new Utilisateur("Demetrius", "chandler", "triphelin@gmail.com");

triphelin.sePresenter();*/

/*class Animal {
  constructor(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes;
    this.poids = poids;
  }
  sePresenter() {
    console.log(
      "J'ai " + this.nombreDePattes + " pattes et je pèse " + this.poids + " Kg"
    );
  }
}
class Oiseau extends Animal {
  constructor(nombreDePattes, poids, longueurDesAiles) {
    super(nombreDePattes, poids);
    this.longueurDesAiles = longueurDesAiles;
  }
  voler() {
    console.log("L'oiseau vole !");
  }
}
var petit = new Oiseau(2, 20, "grandes");
console.log(petit)*/

class Personnage {
  constructor(pseudo, classe, sante, attaque) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }

  get informations() {
    return (
      this.pseudo +
      " (" +
      this.classe +
      ") a " +
      this.sante +
      " points de vie et est au niveau " +
      this.niveau +
      "."
    );
  }

  evoluer() {
    this.niveau++;
    console.log(this.pseudo + " passe au niveau " + this.niveau + " !");
  }

  verifierSante() {
    if (this.sante <= 0) {
      this.sante = 0;
      console.log(this.pseudo + " a perdu !");
    }
  }
}

class Magicien extends Personnage {
  constructor(pseudo) {
    super(pseudo, "magicien", 170, 90);
  }

  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " en lançant un sort (" +
        this.attaque +
        " dégâts)"
    );

    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque avec son coup spécial puissance des arcanes " +
        personnage.pseudo +
        " (" +
        this.attaque * 5 +
        " dégâts)"
    );
    personnage.verifierSante();
  }
}

class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, "guerrier", 350, 50);
  }

  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " avec son épée (" +
        this.attaque +
        " dégâts)"
    );

    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque avec son coup spécial haches de guerre " +
        personnage.pseudo +
        " (" +
        this.attaque * 5 +
        " dégâts)"
    );
    personnage.verifierSante();
  }
}

var gandalf = new Magicien("Gandalf");
var thor = new Guerrier("Thor");
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);

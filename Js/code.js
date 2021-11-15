// Création des 4 fonctions de calcul
function addition(nombreA, nombreB) {
  return nombreA + nombreB;
}

function multiplication(nombreA, nombreB) {
  return nombreA * nombreB;
}

function soustraction(nombreA, nombreB) {
  return nombreA - nombreB;
}

function division(nombreA, nombreB) {
  if (nombreB == 0) {
    throw new Error(`C'est impossible de diviser par 0`);
  }
  return nombreA / nombreB;
}

// Création du menu de choix de calcul pour l'utilisateur.
let choix;
do {
  choix = Number(
    //Number devant le prompt permet de convertir le choix de l'utilisateur en nombre
    prompt(
      `Que souhaitez-vous faire ?\n
    1. Addition
    2. Multiplication
    3. Soustraction
    4. Division`
    )
  );
  // Pour le while, si la valeur de la variable n'est strictement pas le 1, 2, 3, ou 4
  // (!= "diférent de la valeur")
  // alors le prompt n'est pas validé et la valeur n'est pas stockée.
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

// Demander deux nombres à calculer
let premierNombre;
let deuxiemeNombre;
do {
  premierNombre = Number(prompt(`Veuillez indiquer votre premier nombre:`));
  deuxiemeNombre = Number(prompt(`Veuillez indiquer votre deuxème nombre:`));
  // Pour le while, la fonction isNan avec le nom de la variable en paramètre est un booléen
  // qui indique True si c'est un nombre qui est rentré dans la variable,
  // si False, alors le prompt n'est pas validé et la valeur n'est pas stockée.
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

// Appeler la fonction à utiliser
try {
  let resultat;
  switch (choix) {
    case 1:
      resultat = addition(premierNombre, deuxiemeNombre);
      break;
    case 2:
      resultat = multiplication(premierNombre, deuxiemeNombre);
      break;
    case 3:
      resultat = soustraction(premierNombre, deuxiemeNombre);
      break;
    case 4:
      resultat = division(premierNombre, deuxiemeNombre);
      break;
    default:
      throw new Error(`Une erreur est survenue.`);
  }
  // Affichage du résultat
  alert(`Le résultat de votre calcul est: ` + resultat);
} catch (error) {
  alert(error);
}

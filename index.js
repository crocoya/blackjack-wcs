/* le joueur pioche une première carte
le joueur pioche une seconde carte
totalJoueur = carte1 + carte2

le dealer pioche une première carte
le dealer pioche une seconde carte
totalDealer = carte1 + carte2

tant que le joueur ne dépasse pas 21
  demander au joueur s'il souhaite piocher une nouvelle carte
  si oui :
    le joueur pioche une carte
    totalJoueur = totalJoueur + nouvelleCarte
  sinon :
    arrêter de lui poser la question
  fin si
fin tant que */

// La base du jeu
let player = null
let playerScore = 0;
let playerResult = null

let dealer = null
let dealerScore = null
let dealerResult = null
let dealerReponse = null

let carte1 = 0;
let carte2 = null

// recuperation des element html (score)
let card1player = document.getElementById('carte1player');
let card2player = document.getElementById('carte2player');
let totalcarteplayer = document.getElementById('totalplayer');

card1player.textContent = carte1 ;
card2player.textC

// Fonction pour les cartes
function drawCard () {
    return Math.floor(Math.random() * 10) + 1;
}

// Fonction Réponse du Dealer
function reponseDealer () {
    dealerReponse = Math.floor(Math.random() * 2) + 1;

    if (dealerReponse === 1) {
        dealerReponse = 'yes'
    } else {
        dealerReponse = 'no'
    }
    return dealerReponse  
}

// fonction choix as
function as(card) {
    if (card === 1){
      let reponse = parseInt(prompt(' voulez vous que la carte AS vaux 11 ou 1 ? (tapez le chiffre souhaitez) '));
      return reponse;  
    } else {
      return card
    }
}

// Début de la partie (pour le joueur)
carte1 = as(drawCard())
carte2 = as(drawCard())
console.log('Player: ' + carte1 + ", " + carte2)

let resultat = carte1 + carte2
playerScore += resultat
console.log("Player score: " + playerScore)

// Début de la partie (pour le dealer)
drawCard ()
const carte1Dealer = drawCard ();
console.log('Dealer: ' + carte1Dealer)


resultat = carte1Dealer
dealerScore += resultat
console.log("Dealer score: " + resultat)

// Draw Card for Player
while (playerScore <= 21) {
  player = prompt(' Voulez vous tirez une nouvelle carte ?')

  if (player === 'yes') {
    carte1 = drawCard ()
    console.log('Player: ' + carte1)

    let resultat = carte1
    playerScore += resultat
    console.log("Player score: " + playerScore)
    
  } else {
    console.log("C'est au tour du dealer !! ")
    break
  }
}

// Draw Card for Dealer
while (dealerScore < 17) {
  
    carte1 = drawCard()
    console.log('Dealer: ' + carte1)

    resultat = carte1
    dealerScore += resultat
    console.log("Dealer score: " + dealerScore)
    //window.alert('Le dealer a fait ' + dealerScore);
}

if ( dealerScore >= 17) {
// Conditions résultats
if ( playerScore > dealerScore && playerScore < 21) {
  console.log('Vous avez gagné !!! ')
} else if ( playerScore < dealerScore && dealer < 21) {
  console.log('Vous avez perdu, victoire du dealer !!! ')
} else if ( playerScore > 21 || dealerScore > 21) {
  console.log('Egalité, pas de vainqueur !!!')
} 
}
// PARTIE TEST
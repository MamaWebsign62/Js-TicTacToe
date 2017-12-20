// var morpion = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1);
var player = 1;


function play(id){ //J'appelle la fonction play
  if(player == 1){  // Si c'est le joueur 1 qui a cliqué
    document.getElementById(id).classList.add("player1"); //Alors on ajoute la classe pour placer le signe
    player = 2;  // C'est au tour du joueur 2

  }else if(player == 2){  // Si c'est le joueur 2 qui a cliqué
    document.getElementById(id).classList.add("player2"); //Alors on ajoute la classe pour placer le signe
    player=1;  // C'est au tour du joueur 1
  }
  document.getElementById('player').innerHTML = 'Joueur '+player; //Affiche dans le HTML quel joueur doit jouer
}


// function placerSigne(idCase)
// {
//   if(morpion[idCase] == -1)
//   {
//   var image = (toPlayer1) ? 0:1;
//   document.getElementById(idCase).innerHTML = '<img src="img/croix.png" alt="image" />';
//   morpion[idCase] = "1";
//   }
//   else
//   {
//   alert("La case n'est plus disponible, essayez ailleurs !!!");
//   }
//
//   if(toPlayer1 == false)
//     {
//     toPlayer1 = true;
//     }
//     else
//     {
//     toPlayer1 = false;
//     }
// }
// function resetGame()
// {
//   for(var i=0;i<9;i++)
//   {
//   morpion[i] = "";
//   }
// }
// function reglesJeu()
// {
// alert("Voici les règles du morpion Tic Tac Toe : \n Le but du jeu est d'aligner trois croix ou trois rond. Le premier qui réussit à aligner trois de ses signes remporte la manche.\n Il y a autant de manches que vous désirez. Il suffit de réinitialiser la grille à la fin de la manche en cliquant sur le lien ou d'attendre qu'elle se réinitialise toute seule (15 sec)");
// }

var morpion = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1);
var toPlayer1 = true;

function placerSigne(idCase)
{
  if(morpion[idCase] == -1)
  {
  var image = (toPlayer1) ? 0:1;
  document.getElementById(idCase).innerHTML = '<img src="img/croix.png" alt="image" />';
  morpion[idCase] = "1";
  }
  else
  {
  alert("La case n'est plus disponible, essayez ailleurs !!!");
  }

  if(toPlayer1 == false)
    {
    toPlayer1 = true;
    }
    else
    {
    toPlayer1 = false;
    }
}
function resetGame()
{
  for(var i=0;i<9;i++)
  {
  morpion[i] = "";
  }
}
function reglesJeu()
{
alert("Voici les règles du morpion Tic Tac Toe : \n Le but du jeu est d'aligner trois croix ou trois rond. Le premier qui réussit à aligner trois de ses signes remporte la manche.\n Il y a autant de manches que vous désirez. Il suffit de réinitialiser la grille à la fin de la manche en cliquant sur le lien ou d'attendre qu'elle se réinitialise toute seule (15 sec)");
}

// var morpion = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1);
var player = 1;
var table = new Array(9);
for (var i = 0; i < table.length; i++) {  // i=0; si i est plus petit que la longueur du tableau; i++ agrémente i de 1 à chaque fois
  table[i] = 0;
}

var compteTour = 0;

function play(id){ //J'appelle la fonction play
  console.log(id + " " + player); //J'affiche quel joueur joue
    compteTour++;  // Je compte les tours
  if(player == 1){  // Si c'est le joueur 1 qui a cliqué
    document.getElementById(id).classList.add("player1"); //Alors on ajoute la classe pour placer le signe
    table[id] = player;
    testVictoire();  // Je teste la victoire
    player = 2;  // C'est au tour du joueur 2
    console.log(compteTour + " tours ");  // J'affiche le nombre de tours dans la console
    // compteTour++;
  }else if(player == 2){  // Sinon si c'est le joueur 2 qui a cliqué
    document.getElementById(id).classList.add("player2"); //Alors on ajoute la classe pour placer le signe
    table[id] = player;
    testVictoire();
    player=1;  // C'est au tour du joueur 1
    console.log(compteTour + " tours ");
    // compteTour++;
  }
  document.getElementById(id).onclick = function() { return false; } // Le clic du joueur 2 ne fonctionnera pas
  document.getElementById('player').innerHTML = 'C\'est au tour du joueur '+player; //Affiche dans le HTML quel joueur doit jouer
}

function testVictoire() { // J'appelle la fonction pour tester la victoire
var victory = false;

    if(table[0] == player && table[1] == player && table[2] == player) // Si la case 0 = case 1 = case 2 (pour les les 2 joueurs)
    {
      victory = true;
    } else if(table[0] == player && table[3] == player && table[6] == player)  // Si la case 0 = case 3 = case 6 (pour les les 2 joueurs)
    {
      victory = true;
    } else if(table[0] == player && table[4] == player && table[8] == player) // Si la case 0 = case 4 = case 8 (pour les les 2 joueurs)
    {
      victory = true;
    } else if(table[1] == player && table[4] == player && table[7] == player) // Si la case 1 = case 4 = case 7 (pour les les 2 joueurs)
    {
      victory = true;
    } else if(table[2] == player && table[5] == player && table[8] == player) // Si la case 2 = case 5 = case 8 (pour les les 2 joueurs)
    {
      victory = true;
    } else if(table[3] == player && table[4] == player && table[5] == player) // Si la case 3 = case 4 = case 5 (pour les les 2 joueurs)
    {
      victory = true;
    } else if(table[6] == player && table[7] == player && table[8] == player) // Si la case 6 = case 7 = case 8 (pour les les 2 joueurs)
    {
      victory = true;
    } else if(table[2] == player && table[4] == player && table[6] == player) // Si la case 2 = case 4 = case 6 (pour les les 2 joueurs)
    {
      victory = true;
    }

    if (victory) { // Si on appelle la variable "victory"
    if (player == 1) {
      document.getElementsByTagName('body')[0].style.backgroundImage = "url(./img/bg-tic-tac-toe.jpg)";
    }
    else {
          document.getElementsByTagName('body')[0].style.backgroundImage = "url(./img/theme_noel.jpg)";
          document.getElementsByTagName('body')[0].style.backgroundSize = "100%";
    }

      document.getElementById('bingo').innerHTML = "Félicitations... Le player " + player + " a gagné !!!"; // Rappel de la div #bingo du html vers le js
      document.getElementById('bingo').classList.remove("hidden"); // J'enlève la class (css) pour afficher la div en cas de victoire
      document.getElementById('bingo').onclick = function() // Lorsque l'on clique sur le message
      {
        document.getElementById('bingo').classList.add("hidden"); // Le message de victoire disparaît lorsqu'on clique dessus
      }
      for (var i = 0; i < table.length; i++) { // Si la case est déjà remplie
        document.getElementById(i).onclick = function() { return false; }; // Le clic de l'autre joueur ne fonctionnera pas
      }
    }
  }

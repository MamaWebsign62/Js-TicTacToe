// var morpion = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1);
var player = 1;
var table = new Array(9);
for (var i = 0; i < table.length; i++) {  // i=0; si i est plus petit que la longueur du tableau; i++ agrémente i de 1 à chaque fois
  table[i] = 0;
}

var compteTour = 0;
confetti();
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
      var conf = document.getElementsByClassName('confetti');
      for (var i = 0; i < conf.length; i++) {
        conf[i].style.top = "100%";
      }
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
      for (var i = 0; i < table.length; i++) { // i=0; si i est plus petit que la longueur du tableau; i++ agrémente i de 1 à chaque fois
        document.getElementById(i).onclick = function() { return false; }; // Le clic de l'autre joueur ne fonctionnera pas
      }
    }
  }

function confetti(){  // J'appelle la fonction confetti
  var couleurs = new Array(); // Je crée ma variable "couleurs" qui correspond à mon tableau
  couleurs = ["red","blue","yellow","green","gold","silver","white","bronze"]; // Je définie les couleurs de mes confettis
  for (var i = 0; i < 300; i++) { // Je crée une boucle qui va répéter 20 fois mon action
    var conf = document.createElement("div"); // Je crée un élément div et je le stocke dans la variable "conf"
    document.getElementsByTagName('body')[0].appendChild(conf); // Je rajoute l'élément enfant dans le corps de la page (body)
    conf.classList.add("confetti");  // Je rappelle la class "confetti" de mon CSS
    var rand = Math.floor(Math.random()*couleurs.length); // Je génère un nombre aléatoire...
    conf.style.backgroundColor = couleurs[rand]; // ...pour impacter mes couleurs
    var vitesse = Math.floor(Math.random()*5);
    console.log(vitesse); // Je génère une vitesse aléatoire de 0 à 5s
    conf.style.transition = "all "+vitesse+"s"; // Transition de vitesse/sec aléatoire sur conf
    var left = Math.floor(Math.random()*screen.width); // Je génère un nombre aléatoire pour étaler les confettis sur toute la largeur de l'écran
    conf.style.left = left+"px";
    var top = Math.floor(Math.random()*500)+20; // Je génère un nombre aléatoire 
    conf.style.top = -top+"px";
  }
}

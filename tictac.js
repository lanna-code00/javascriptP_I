var t = false, u = 0, score = 0;
let chnageval = (event) => {
  if (!name1.value || !name2.value) {
    return;
  } else {
    t = true
    if (event.target.innerHTML !== "") {
      return;  
    }

    if (showwinner2.innerHTML === 'X is the winner' || showwinner2.innerHTML === 'O is the winner') {
      return;
    }
    
    if (t == true && u == 0) {
      event.target.innerHTML = "X"
      u = 1;
      player1name.innerHTML = name2.value + ' O ' + `it's your turn now`
    }
    else if (t == true && u == 1) {
      event.target.innerHTML = "O"
      u = 0;
      player1name.innerHTML = name1.value +  ` X it's your turn now`
    }  
    
    else if (showwinner.innerHTML == name1.value + " is the winner") {
         return;
      }
  }
  

  if ((play1.innerHTML === 'X' && play2.innerHTML === 'X' && play3.innerHTML === 'X') ||
      (play7.innerHTML === 'X' && play5.innerHTML === 'X' && play3.innerHTML === 'X') ||
      (play4.innerHTML === 'X' && play5.innerHTML === 'X' && play6.innerHTML === 'X') ||
      (play7.innerHTML === 'X' && play8.innerHTML === 'X' && play9.innerHTML === 'X') ||
      (play1.innerHTML === 'X' && play5.innerHTML === 'X' && play9.innerHTML === 'X') ||
      (play1.innerHTML === 'X' && play4.innerHTML === 'X' && play7.innerHTML === 'X') ||
      (play2.innerHTML === 'X' && play5.innerHTML === 'X' && play8.innerHTML === 'X') ||
      (play3.innerHTML === 'X' && play6.innerHTML === 'X' && play9.innerHTML === 'X') 
      ) {
         showwinner2.innerHTML = 'X is the winner'
          player1name.innerHTML = ""  
    player2name.innerHTML = "";
    ++player1score.innerHTML;
    players1name.innerHTML = name1.value

  }
      else if ((play1.innerHTML === 'O' && play2.innerHTML === 'O' && play3.innerHTML === 'O') ||
      (play7.innerHTML === 'O' && play5.innerHTML === 'O' && play3.innerHTML === 'O') ||
      (play4.innerHTML === 'O' && play5.innerHTML === 'O' && play6.innerHTML === 'O') ||
      (play7.innerHTML === 'O' && play8.innerHTML === 'O' && play9.innerHTML === 'O') ||
      (play1.innerHTML === 'O' && play5.innerHTML === 'O' && play9.innerHTML === 'O') ||
      (play1.innerHTML === 'O' && play4.innerHTML === 'O' && play7.innerHTML === 'O') ||
      (play2.innerHTML === 'O' && play5.innerHTML === 'O' && play8.innerHTML === 'O') ||
      (play3.innerHTML === 'O' && play6.innerHTML === 'O' && play9.innerHTML === 'O') 
      ) {
         showwinner2.innerHTML = 'O is the winner'
          player1name.innerHTML = ""  
    player2name.innerHTML = "";
    players2name.innerHTML = name2.value
    ++player2score.innerHTML;
  }

  else if (play1.innerHTML !== "" && play2.innerHTML !== "" && play3.innerHTML !== "" && play4.innerHTML !== "" && 
           play5.innerHTML !== "" && play6.innerHTML !== "" && play7 !== "" && play8.innerHTML !== "" && play9.innerHTML !== "") 
     {
       showwinner2.innerHTML = "It's a draw game no one wins!"
    }
}

let startgame = () => {
  if (!name1.value || !name2.value) {
    return;
  }
  else {
    displayplayers.innerHTML += name1.value.toUpperCase() + ' VS' + " " + name2.value.toUpperCase();
    $('#name1').css('display', 'none'), $('#name2').css('display', 'none');
    player1name.innerHTML = "";
    startgametext.innerHTML = "LET'S PLAY FRIENDS!";
    $('#startgametext').fadeOut(1000)
    setTimeout(() => {
      player1name.innerHTML = name1.value +  ` X it's your turn now`
      chnageval();
    }, 1000);
  }
}

let replaygame = () => {
  name1.value = "", name2.value = "", player1name.innerHTML = "", player2name.innerHTML = "", showwinner2.innerHTML = "",
    play1.innerHTML = "", play2.innerHTML = "", play3.innerHTML = "", play4.innerHTML = "", play5.innerHTML = "", play6.innerHTML = "",
    play7.innerHTML = "", play8.innerHTML = "", play9.innerHTML = ""
  displayplayers.innerHTML = "";
    $('#name1').css('display', 'block'), $('#name2').css('display', 'block');
}

let endgame = () => {
    name1.value = "", name2.value = "", player1name.innerHTML = "", player2name.innerHTML = "", showwinner2.innerHTML = "",
    play1.innerHTML = "", play2.innerHTML = "", play3.innerHTML = "", play4.innerHTML = "", play5.innerHTML = "", play6.innerHTML = "",
    play7.innerHTML = "", play8.innerHTML = "", play9.innerHTML = ""
  displayplayers.innerHTML = "";
  players1name.innerHTML = ""
  players2name.innerHTML = ""
  player1score.innerHTML = ""
  player2score.innerHTML = ""
    $('#name1').css('display', 'block'), $('#name2').css('display', 'block');
}

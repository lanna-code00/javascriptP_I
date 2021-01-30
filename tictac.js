var t = false, u = 0;
let chnageval = (e) => {
  if (!name1.value || !name2.value) {
      return;
    } else {
      t = true
     if (e.target.innerHTML != "") {
          return;  
      }

     if (showwinner2.innerHTML == "there is a winner") {
         return; 
     }
     if (t == true && u == 0) {
         e.target.innerHTML = "X"
         u = 1;
         player1name.innerHTML = name2.value + ' O ' + `it's your turn now`
      }
     else if (t == true && u == 1) {
         e.target.innerHTML = "O"
         u = 0;
         player1name.innerHTML = name1.value + ' X '+ `it's your turn now`
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
     console.log('winner')
    }
    else if (play1.innerHTML === 'O' && play2.innerHTML === 'O' && play3.innerHTML === 'O') {
      (play7.innerHTML === 'X' && play5.innerHTML === 'X' && play3.innerHTML === 'X') ||
      (play4.innerHTML === 'X' && play5.innerHTML === 'X' && play6.innerHTML === 'X') ||
      (play7.innerHTML === 'X' && play8.innerHTML === 'X' && play9.innerHTML === 'X') ||
      (play1.innerHTML === 'X' && play5.innerHTML === 'X' && play9.innerHTML === 'X') ||
      (play1.innerHTML === 'X' && play4.innerHTML === 'X' && play7.innerHTML === 'X') ||
      (play2.innerHTML === 'X' && play5.innerHTML === 'X' && play8.innerHTML === 'X') ||
      (play3.innerHTML === 'X' && play6.innerHTML === 'X' && play9.innerHTML === 'X')  
    console.log('winner')
   }
}

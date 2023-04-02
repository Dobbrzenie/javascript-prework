function getMoveName(computerMove, playerMove){
  if(computerMove == 1){
    return 'kamień';
  } else if(computerMove == 2){
    return 'papier';
  } else if(computerMove == 3){
    return 'nożyce';
  } else {
    return 'nieznany ruch';
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}
  else if(randomNumber == 2){
  computerMove = 'papier';
  }
  else{
    computerMove = 'nożyce';
  } */

printMessage('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/* if(playerInput == '1'){
  playerMove = 'kamień';
  } else if (playerInput == '2'){
    playerMove = 'papier';
  } else{
    playerMove = 'nożyce';
  }

if(playerInput > '3.999'){
  playerMove = 'nieznany ruch';
}
*/
printMessage('Twój ruch to: ' + playerMove);

let argComputerMove, argPlayerMove = displayResult(computerMove, playerMove);
console.log('player move: ', playerMove);

function displayResult(argComputerMove, argPlayerMove){
  console.log('moves:', argComputerMove, argPlayerMove);

  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Jest remis!');
  } else if
    (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
  }
    else if
    (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Ty przegrywasz!');
  }
    else if
    (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
    printMessage('Użyłeś nieznanego ruchu, przegrywasz!');
} 
    else if
  (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
  }
    else if
  (argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Jest remis!');
  }
    else if
  (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
  }
  else if
  (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
  printMessage('Użyłeś nieznanego ruchu, przegrywasz!');
  }
  else if
  (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
    else if
  (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  }
    else if
  (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
  printMessage('Jest remis!');
  }
  else if
  (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
  printMessage('Użyłeś nieznanego ruchu, przegrywasz!');
}
}

console.log('wynik gry: ' + displayResult);


// stone result 
/*
if( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Jest remis!');
}
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}
if( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Komputer wygrywa!');
}
if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
  printMessage('Twój ruch jest nieznany! Komputer wygrywa!');
}

// paper result
if( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Komputer wygrywa!');
}
if( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Jest remis!');
}
if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}
if( computerMove == 'papier' && playerMove == 'nieznany ruch'){
  printMessage('Twój ruch jest nieznany! Komputer wygrywa!');
}

// cutter result
if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}
if( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Komputer wygrywa!');
}
if( computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Jest remis!');
}
if( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
  printMessage('Twój ruch jest nieznany! Komputer wygrywa!');
} */
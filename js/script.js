let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
  else if(randomNumber == 2){
  computerMove = 'papier';
  }
  else{
    computerMove = 'nożyce';
  }

printMessage('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
  } else if (playerInput == '2'){
    playerMove = 'papier';
  } else{
    playerMove = 'nożyce';
  }

if(playerInput > '3.999'){
  playerMove = 'nieznany ruch';
}

printMessage('Twój ruch to: ' + playerMove);

// stone result 

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
}
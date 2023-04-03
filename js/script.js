
function playGame(playerInput){
  clearMessages();

  function getMoveName(argMoveId){
    if (argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else {
      return 'nożyce';
    } 

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';

  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);

  /*if(randomNumber == 1){
    computerMove = 'kamień';
  }
    else if(randomNumber == 2){
    computerMove = 'papier';
    }
    else{
      computerMove = 'nożyce';
    } */

  printMessage('Ruch komputera to: ' + argComputerMove);

  // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName(playerInput);

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
  printMessage('Twój ruch to: ' + argPlayerMove);

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
  displayResult(argComputerMove, argPlayerMove)
  
// jedna zmienna jest niezdefiniowana, przez co pokazuje się pod wynikiem w nowym akapicie
// uzywalem valid, ale nie bylem w stanie namierzyc, dlatego posluzylem sie zmienna ponizej
// by ja ukryc

 // htmlelement.innerText = htmlelement.innerText.replace('undefined', '');


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
}
// tu jest błąd
document.getElementById('play-rock').addEventListener('click', function rockClick(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function paperClick(){
 playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function scissorsClick(){
  playGame(3);
}); 
/*
function rockClick(){
  playGame(1);
}
let playRock = document.getElementById('play-rock');
playRock.addEventListener('click', rockClick);

function paperClick(){
  playGame(2);
}
let playPaper = document.getElementById('play-paper');
playPaper.addEventListener('click', paperClick);

function scissorsClick(){
  playGame(3);
}
let playScissors = document.getElementById('play-scissors');
playScissors.addEventListener('click', scissorsClick);*/
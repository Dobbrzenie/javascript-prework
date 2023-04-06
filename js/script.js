{
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
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const argComputerMove = getMoveName(randomNumber);

  printMessage('Ruch komputera to: ' + argComputerMove);

  console.log('Gracz wpisał: ' + playerInput);

  const argPlayerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + argPlayerMove);

  const displayResult = function (argComputerMove, argPlayerMove){
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
      else if (
      argComputerMove == "kamień" &&
      argPlayerMove == "nieznany ruch"
    )  {
      printMessage("Użyłes nieznanego ruchu, przegrywasz!")
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
    else if (
      argComputerMove == "papier" &&
      argPlayerMove == "nieznany ruch"
  ) {
    printMessage("Użyłes nieznanego ruchu, przegrywasz!")
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
      else if (
        argComputerMove == "nożyce" &&
        argPlayerMove == "nieznany ruch"
    ) {
      printMessage("Użyłes nieznanego ruchu, przegrywasz!")
    }
  }

  console.log('wynik gry: ' + displayResult);
  displayResult(argComputerMove, argPlayerMove)
}
document.getElementById('play-rock').addEventListener('click', function (){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function (){
 playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function (){
  playGame(3);
}); 
}
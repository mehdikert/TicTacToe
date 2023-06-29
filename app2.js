let statusGame = []

const posibility = [
    [0,1,2] ,
    [3,4,5] ,
    [6,7,8] ,
    [0,3,6] , 
    [1,4,7] ,
    [2,5,8] , 
    [0,4,8] ,
    [2,4,6]
]
let winner ;
let colorwiner = [];
function getWinner(){
    /// verification par lignes
  if(statusGame[0] === statusGame[1] && statusGame[0] === statusGame[2]){
    winner = statusGame[0]
    
  }else 
  if(statusGame[3] === statusGame[4] && statusGame[3] === statusGame[5]){
    winner = statusGame[3]
    
  }else
  if(statusGame[6] === statusGame[7] && statusGame[6] === statusGame[8]){
   winner = statusGame[6]
   
  }
  /// verification par colonnes
  if(statusGame[0] === statusGame[3] && statusGame[0] === statusGame[6]){
    winner = statusGame[0]
    
  }else 
  if(statusGame[1] === statusGame[4] && statusGame[1] === statusGame[7]){
    winner = statusGame[1]
  
  }else
  if(statusGame[2] === statusGame[5] && statusGame[2] === statusGame[8]){
   winner = statusGame[2]
  
  }
  /// verification par diagonale
  if(statusGame[0] === statusGame[4] && statusGame[0] === statusGame[8]){
    winner = statusGame[0]
  }else 
  if(statusGame[2] === statusGame[4] && statusGame[2] === statusGame[6]){
    winner = statusGame[2]
  }

  if(winner === 'X'){
    document.querySelector('#tour').textContent = 'the winner is Joueur 1 '
    disableBtn()
   }else if( winner ==='O'){
    document.querySelector('#tour').textContent = 'the winner is Joueur 2 '
    disableBtn()  
   }
}


function disableBtn(){
    for(let i = 1 ; i <= document.querySelectorAll('.case').length ; i++){
        document.querySelector(`.case:nth-child(${i})`).setAttribute('disabled','true')
    }
}


let turn = 1
let x = 'X'
let o = 'O'

function runGame(nb){
   if(turn === 1){
    document.querySelector(`.case:nth-child(${nb})`).setAttribute('value',x)
    turn = 0
    statusGame[nb-1] = x ;
    document.getElementById('tour').textContent = 'Tour du Joueur 2'
   }else if(turn === 0){
    document.querySelector(`.case:nth-child(${nb})`).setAttribute('value',o)
    turn = 1   
    statusGame[nb-1] = o ;
    document.getElementById('tour').textContent = 'Tour du Joueur 1'
   }
   document.querySelector(`.case:nth-child(${nb})`).setAttribute('disabled','true')
   getWinner();
}

function updateStat(){
    if(turn === 1){
     document.querySelector('#tour').textContent = 'Tour joueur 1 !'
    }else if(trun === 0){
     document.querySelector('#tour').textContent = 'Tour joueur 2 !'
    }
}

function restart(){
window.location.reload();
 document.querySelector('#scoreJ1').textContent = scoreJ1 ;
 document.querySelector('#scoreJ2').textContent = scoreJ2 ;
}

function rule(){
    alert(" 1) The game is played on a grid that's 3 squares by 3 squares.\n 2) You are X , your friend (or the computer in this case) is O . Players take turns putting their marks in empty squares.\n 3) The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.\n4) When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.")

}


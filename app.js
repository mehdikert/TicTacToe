
let tour1 = true ; 
let tour2 = false ;
let c = document.querySelectorAll('.case') ;
let combi = [
    [0,1,2] ,
    [3,4,5] ,
    [6,7,8] ,
    [0,3,6] , 
    [1,4,7] ,
    [2,5,8] , 
    [0,4,8],
    [2,4,6]
]

function updateStat(){
    if(tour1 === true){
     document.querySelector('#tour').textContent = 'Tour joueur 1 !'
    }else if(tour2 === true){
     document.querySelector('#tour').textContent = 'Tour joueur 2 !'
    }else if(winner1 === true){
        document.querySelector('#tour').textContent = 'Joueur 1 WIN !'
    }else if(winner2 === true){
        document.querySelector('#tour').textContent = 'Joueur 2 WIN !'
    }
}

function input(nb){
    if(tour1 === true){
     document.querySelector(`.case:nth-child(${nb})`).innerHTML = '<img src="x.png" alt="" id="x">' ;
     tour1 = false ;
     tour2 = true ;
    }else if(tour2 === true){
     document.querySelector(`.case:nth-child(${nb})`).innerHTML = '<img src="o.png" alt="" id="o">' ;
     tour1 = true ;
     tour2 = false ;   
  }
  updateStat()
  
 }
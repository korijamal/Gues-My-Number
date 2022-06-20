'use strict';

/////// IMPLEMENTING GAME LOGIC///////
let secretNumber = Math.trunc(Math.random()*20)+1

let score = 20

document.querySelector('.again').addEventListener('click', function(){
  let secretNumber = Math.trunc(Math.random()*20)+1
  document.querySelector('.message').textContent='Start guessing'
  document.querySelector('body').style.backgroundColor = 'black'
  document.querySelector('.number').textContent='?'
  document.querySelector('.guess').value=''
  document.querySelector('.score').textContent= 20
})

document.querySelector('.check').addEventListener('click', function (){
  const guess = Number(document.querySelector('.guess').value)
  //when these is no input
  if(!guess){
    document.querySelector('.message').textContent='WHAT THE **** JUST HAPPENED, where is input'
    //when user wins
  }else if (guess === secretNumber){
    document.querySelector('.message').textContent=`Radiant Victory! YOU'RE GODDAMN HERO!`
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('.number').textContent= secretNumber
    //when guess is high
  }else if (guess!==secretNumber){
    if(score>1){
      document.querySelector('.message').textContent= guess>secretNumber ? 'DING DING DONG MOTHER F*CKER, Too HIGH' : 'HOLLY MOLLY, Too Low'
      score--
      document.querySelector('.score').textContent=score
      //////game over
    }else{
      document.querySelector('.message').textContent='ETO ГГ'
      document.querySelector('body').style.backgroundColor = 'red'
      document.querySelector('.number').style.width = '30rem'
      document.querySelector('.number').textContent= secretNumber
      
    }
  }
})



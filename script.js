'use strict';
//selecting player class to modify background on swtiching
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// selecting element
const score0El = document.querySelector('#score--0');// class is selected through use of '.' and id by '#'
// we can also select id through this way i.e. getElementById
const score1El = document.getElementById('score--1'); // no use of # and also getElementbyId is also little bit faster

const diceEl = document.querySelector('.dice'); // selecting dice class

const rollDice = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

const curScore0 = document.querySelector('#current--0');
const curScore1 = document.querySelector('#current--1');

const totalScore0 = document.querySelector('#score--0');
const totalScore1 = document.querySelector('#score--1');
let sc0 ,sc1, cu , turn ,playing ;
const intialcondition = function()
{
   sc0 = 0; // total score of player 0
   sc1 = 0; // total score of palyer 1
   cu = 0; // current score
   turn = true; // starting with player 0
   playing = true; // setting the state of the whole programe
  score0El.textContent = sc0;
  score1El.textContent = sc1;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  diceEl.classList.add('hidden');
};
intialcondition();
const change = function()
{
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');

}
//rolling dice functionality
rollDice.addEventListener('click', function(){
    if( playing){ // playing is state variable if it will be false then intended clicks will not respond
    //. 1 generating a random dice roll
    const num = Math.trunc(Math.random()*6)+1;
    console.log(num);
    //. 2 display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${num}.png`;
    if( num === 1)
    {
        cu =0;
        change();
        curScore0.textContent = cu;
        curScore1.textContent = cu;
        turn = !turn;
    }
    else{
        cu+=num;
        if( turn )
        {
            curScore0.textContent = cu;
        }
        else{
            curScore1.textContent = cu;
        }
    }
    }
} );
btnhold.addEventListener('click' , function(){
    if( playing)
    {
    if( turn)
    {
        sc0+=cu;
        if( sc0 >= 100)
        {
            player0.classList.toggle('player--active');
            player0.classList.add('player--winner');
            diceEl.classList.add('hidden');
            playing = false;
        }
        change();
        cu = 0; // reset current score to 0
        totalScore0.textContent = sc0;
        curScore0.textContent = cu;
        turn = !turn;


    }else{
      sc1 += cu;
      if (sc1 >= 100) {
        player1.classList.toggle('player--active');
        player1.classList.add('player--winner');
        diceEl.classList.add('hidden');
        playing = false;
      }
      change();
      cu = 0; // reset current score to 0
      totalScore1.textContent = sc1;
      curScore1.textContent = cu;
      turn = !turn;
    }
} 
});

document.querySelector('.btn--new').addEventListener('click' ,intialcondition);
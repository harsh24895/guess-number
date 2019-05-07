console.log('Done')

/*
Declare the price 
Get the input from the user to Store
if num=6
print=somegthing
else 



*/
var price=Math.floor(Math.random()*100)+1;
var btn=document.querySelector('button');
btn.addEventListener('click',decideIf);

var btn=document.querySelector('button');
btn.addEventListener('click',restart);


function decideIf(){
    var guess=document.querySelector('#guessField');
    var loworHigh=document.querySelector('#lowOrHi');

    if(guess.value>price){
        loworHigh.textContent='too high'
    }
    else if(guess.value<price){
        loworHigh.textContent='too low'
    }else{
        loworHigh.textContent='win'
    }

    function restart(){
        randomize();
        var guess=document.querySelector('#guessField');
        guess.value='';

        var lowOrHimessage=document.querySelector('#lowOrHi');
        lowOrHimessage.textContent='';


    }



}


document.getElementById("guessField").reset();
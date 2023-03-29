const answer = Math.floor(Math.random()*10+1);
let guesses = 0;

document.getElementById("submit").onclick = function()
{
    let guess = document.getElementById("guessNum").value 
    guesses+=1;

    if(guess==answer)
    {
       alert(`${answer} is correct, you took ${guesses}`)
    }
    else if(guess<answer)
    {
      alert(`${guess} is too small`)
    }
    else
    {
        alert(`${guess} is too large`)
    }
}
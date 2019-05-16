const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

let seconds = 0;
let ms = 0;
const start = setInterval(() => {
    ms++
    msTens.textContent = ms;
    if(ms === 100){
      seconds++;
      secondOnes.textContent = seconds;
      ms = 0;
      console.log(seconds);
    }
    if(seconds === 10){
      console.log('stopped');
      clearInterval(start);
    }
  }, 10)


const stop = () => clearInterval(start);

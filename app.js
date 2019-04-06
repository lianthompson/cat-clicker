let catButton = document.querySelector('.cat-button');
let counter = document.querySelector('.counter');
let clicks = 0;

console.log(catButton);
console.log(counter);

catButton.addEventListener('click', function(){
    clicks++;
    counter.innerHTML = "Counter: " + clicks;
}, false);
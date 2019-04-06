let cat1 = document.querySelector('.cat1');
let cat2 = document.querySelector('.cat2');
let counter1 = document.querySelector('.counter1');
let counter2 = document.querySelector('.counter2');
let cat1Clicks = 0;
let cat2Clicks = 0;
let cat1name = document.querySelector('.cat1-name');
let cat2name = document.querySelector('.cat2-name');

console.log(cat1);
console.log(counter1);

cat1name.innerHTML = "Satoshi";
cat2name.innerHTML = "Nakamoto";

cat1.addEventListener('click', function(){
    cat1Clicks++;
    counter1.innerHTML = "Cat 1: " + cat1Clicks;
}, false);

cat2.addEventListener('click', function(){
    cat2Clicks++;
    counter2.innerHTML = "Cat 2: " + cat2Clicks;
}, false);
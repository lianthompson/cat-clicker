// let cat1 = document.querySelector('.cat1');
// let cat2 = document.querySelector('.cat2');
// let cat3 = document.querySelector('.cat3');
// let counter1 = document.querySelector('.counter1');
// let counter2 = document.querySelector('.counter2');
// let counter3 = document.querySelector('.counter3');
let cat1Clicks = 0;
let cat2Clicks = 0;
let cat3Clicks = 0;
let clicks = 0;
let cat1name = document.querySelector('.cat1-name');
let cat2name = document.querySelector('.cat2-name');
let cat3name = document.querySelector('.cat3-name');
let catname = document.querySelector('.cat-name');
let image = document.querySelector('.cat-image');
let counter = document.querySelector('.counter');

// console.log(cat1);
// console.log(counter1);
// console.log(image);

cat1name.innerHTML = "Satoshi";
cat2name.innerHTML = "Nakamoto";
cat3name.innerHTML = "Vitalik";

cat1name.addEventListener('click', function(){
    catname.innerHTML = "You clicked Satoshi";
    image.src = "./cat.jpg";
    counter.innerHTML = "Satoshi: " + clicks;
}, false);

cat2name.addEventListener('click', function(){
    catname.innerHTML = "You clicked Nakamoto";
    image.src = "./cat1.jpg";
    counter.innerHTML = "Nakamoto: " + clicks;
}, false);

cat3name.addEventListener('click', function(){
    catname.innerHTML = "You clicked Vitalik";
    image.src = "./cat3.jpg";
    counter.innerHTML = "Vitalik: " + clicks;
}, false);

image.addEventListener('click', function(){
    counter.innerHTML = "You've clicked " + clicks++ + " times";
})

// cat1.addEventListener('click', function(){
//     cat1Clicks++;
//     counter1.innerHTML = "Satoshi: " + cat1Clicks;
// }, false);

// cat2.addEventListener('click', function(){
//     cat2Clicks++;
//     counter2.innerHTML = "Nakamoto: " + cat2Clicks;
// }, false);

// cat3.addEventListener('click', function(){
//     cat3Clicks++;
//     counter3.innerHTML = "Vitalik: " + cat3Clicks;
// }, false);
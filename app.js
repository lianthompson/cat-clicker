let clicks = 0;
let catname = document.querySelector('.cat-name');
let image = document.querySelector('.cat-image');
let counter = document.querySelector('.counter');
this.list = document.querySelector('.cat-list');

console.log(list)

let cats = [
    {
        name: "Satoshi",
        imgSrc: './cat.jpg',
        clicks: 0
    },
    {
        name: "Nakamoto",
        imgSrc: './cat1.jpg',
        clicks: 0
    },
    {
        name: "Vitalik",
        imgSrc: './cat3.jpg',
        clicks: 0
    }
]

for (cat in cats) {
    cat = cats[cat];
    console.log(cat);

    elem = document.createElement('li');
    elem.textContent = cat.name;

    this.list.appendChild(elem);

    elem.addEventListener('click', function() {
        catname.innerHTML = cat.name;
        image.src = cat.imgSrc;  
    }, false)
}
// cat1name.addEventListener('click', function(){
//     let clicks = 0;
//     catname.innerHTML = "You clicked Satoshi";
//     image.src = "./cat.jpg";
//     counter.innerHTML = "Satoshi: " + clicks;
// }, false);

// cat2name.addEventListener('click', function(){
//     let clicks = 0;
//     catname.innerHTML = "You clicked Nakamoto";
//     image.src = "./cat1.jpg";
//     counter.innerHTML = "Nakamoto: " + clicks;
// }, false);

// cat3name.addEventListener('click', function(){
//     let clicks = 0;
//     catname.innerHTML = "You clicked Vitalik";
//     image.src = "./cat3.jpg";
//     counter.innerHTML = "Vitalik: " + clicks;
// }, false);

image.addEventListener('click', function(){
    counter.innerHTML = clicks++;
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
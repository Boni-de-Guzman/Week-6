
const favColor = document.getElementById("color");
favColor.addEventListener("click", firstFunction);

function firstFunction() {
    alert ("Light Blue");
}

const favPlace = document.getElementById("place");
favPlace.addEventListener("click", secondFunction);

function secondFunction() {
    alert ("Pyramid Lake,NV");
}
const favRitual = document.getElementById("ritual");
favRitual.addEventListener("click", thirdFunction);

function thirdFunction() {
    alert ("Game night");
}
const favMovie = document.getElementById("movie");
favMovie.addEventListener("click", fourthFunction);

function fourthFunction() {
    alert ("FInal Fantasy VII Advent Children");
}

const favCar = document.getElementById("car");
favCar.addEventListener("click", fifthFunction);

function fifthFunction() {
    alert ("Mecedez Benz AMG E63 Wagon");
}

const favGame = document.getElementById("videoGame");
favGame.addEventListener("click", sixthFunction);

function sixthFunction() {
    alert ("FInal Fantasy 15");
}


function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}
// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();
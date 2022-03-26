
function restoName() {
    var resto = ["Jack in the box","Olive Garden","Red Robbin", "Wild fire Grill","Teriyaki Madness","Panda Express"]; 
     document.getElementById("clicked1").innerHTML = resto [Math.floor(Math.random()*resto.length)];
       }
    
  
function storeName() {
    var store = ["Walmart", "Target", "Big Lots","Chinatown Market"] 
          document.getElementById("clicked2").innerHTML = store [Math.floor(Math.random()*store.length)];
           }
         
    
function casinoName() {
  var casino = ["Santa Fe Casino", "Aliente Casino", "Arizona Charlie Casino","PT's Pub"] 
        document.getElementById("clicked3").innerHTML = casino [Math.floor(Math.random()*casino.length)];
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
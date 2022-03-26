function handleSubmit(evt) {
	evt.preventDefault();

	window.alert('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const greetings = document.getElementById("greet"); 
	  greetings.addEventListener("mouseover", niceGreetings);
	
	  function niceGreetings() {
		  document.getElementById("pic").innerHTML = "Hope you having a nice day!"
	  }


// function to set a given theme/color-scheme
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
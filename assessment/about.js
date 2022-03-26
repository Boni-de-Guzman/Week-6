window.alert("hello world");



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



function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}

(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();
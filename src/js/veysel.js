function clearInputFields() {
  document.getElementById('form').reset();
}

function init(){
  console.log("test");
  const toggleButton = document.getElementsByClassName('toggle-button')[0];
  const navbarLinks = document. getElementsByClassName('navbar-links')[0];
  
  
  toggleButton.addEventListener('click', () =>{
    console.log("ich werde ausgeführt");
  navbarLinks.classList.toggle('active');
  
  });
}





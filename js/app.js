/*icon nav*/

/*Quand on ouvre la nav la largeur sera de 100%*/
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  /*Quand on ferme la nav la largeur sera de 0*/
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


  /*modal*/
/*
  function openModal() {
    document.getElementsById("modal").style.display="block";
  }

  function closeModal() {
    document.getElementById("modal").style.display="none";
  }*/



  // Fonction pour ouvrir le modal


function openModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

// Fonction pour fermer le modal
function closeModal() {
  var exitmodal = document.getElementById("exitmodal");
  exitmodal.style.display = "none";
}


// zoom image

// const image = document.getElementById('myImage');
// const container = document.querySelector('.container');

// container.addEventListener('click', () => {
//   image.classList.toggle('zoomed');
// });

var rellax = new Rellax('.rellax');
function viewImage(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = imageSrc;
  }
 
  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  
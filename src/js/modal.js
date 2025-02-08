const modal = document.getElementById("myModal");
const openBtn = document.querySelectorAll('.openModalBtn');
const closeBtn = document.querySelector(".close");

openBtn.forEach(function(btn) {
    btn.onclick = function() {
      modal.style.display = "flex";
    }
  });

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
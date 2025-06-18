const openBtn = document.getElementById("open-btn");
const card    = document.getElementById("card-content");

openBtn.addEventListener("click", () => {
  openBtn.style.display = "none";
  card.style.display    = "block";
});

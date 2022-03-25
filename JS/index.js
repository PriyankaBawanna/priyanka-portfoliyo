function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

const btn = document.getElementById("btn");

btn.addEventListener("click", function onClick() {
  btn1.style.color = "white";
  btn1.style.borderBottomColor = "white";
  btn2.style.color = "white";
  btn2.style.borderBottomColor = "white";
  btn.style.color = "Crimson";
  btn.style.borderBottomColor = "Crimson";
});

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function onClick() {
  btn.style.color = "white";
  btn.style.borderBottomColor = "white";
  btn2.style.color = "white";
  btn2.style.borderBottomColor = "white";
  btn1.style.color = "Crimson";
  btn1.style.borderBottomColor = "Crimson";
});

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function onClick() {
  btn.style.color = "white";
  btn.style.borderBottomColor = "white";
  btn1.style.color = "white";
  btn1.style.borderBottomColor = "white";
  btn2.style.color = "Crimson";
  btn2.style.borderBottomColor = "Crimson";
});

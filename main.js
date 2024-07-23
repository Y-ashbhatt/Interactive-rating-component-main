const buttons = document.querySelectorAll(".rating_btn");
const rating = document.getElementById("rating");
const ratingCard = document.querySelector(".rating_card");
const thankYouCard = document.querySelector(".thank_you_card");
let isActive = false;

function checkActive() {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function setRating(num) {
  rating.textContent = num;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.hasAttribute("value")) {
      checkActive();
      btn.classList.add("active");
      setRating(btn.getAttribute("value"));
      isActive = true;
    }
  });
});

function submit() {
  if (isActive) {
    ratingCard.style.display = "none";
    thankYouCard.style.display = "flex";
  } else {
    window.alert("Please select a rating!!!");
  }
}
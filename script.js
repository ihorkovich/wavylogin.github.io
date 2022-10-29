const interval = (object, time) => {
  setInterval(() => {
    object.style.transform = "scaleX(-1)";
  }, time);
  setInterval(() => {
    object.style.transform = "scaleX(1)";
  }, time * 2);
};

const clownFish = document.querySelector(".clown-fish");
const uaFish = document.querySelector(".ua-fish");
const fish2 = document.querySelector(".fish2");
const yellowFish = document.querySelector(".yellow-fish");
interval(clownFish, 10000);
interval(uaFish, 7000);
interval(fish2, 5000);
interval(yellowFish, 4000);

const waves = document.querySelector(".waves");
const login = document.querySelector(".login");
const fishes = document.querySelector(".fishes");
const algaes = document.querySelector(".algaes");
const loginContainer = document.querySelector(".login-wave");
const saveButton = document.querySelector(".save-button");

saveButton.addEventListener("click", () => {
  waves.style.transitionDuration = "300ms";
  fishes.style.display = "none";
  algaes.style.display = "none";
  waves.style.top = "100%";
  login.style.animationName = "none";
  waves.style.height = "0%";
  saveButton.style.transform = "translateY(-150%)";
});

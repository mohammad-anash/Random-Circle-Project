document.querySelector(".btn").addEventListener("click", function () {
  createRandomCircles();
});

function everythingsIsRandomForCircle(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

let colorCode = "123456789abcedf";
function randomColorForCircle() {
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    let randomColor = Math.floor(Math.random() * colorCode.length);
    hash += colorCode[randomColor];
  }
  return hash;
}

function createRandomCircles() {
  const randomQuantity = everythingsIsRandomForCircle(15, 2);

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < randomQuantity; i++) {
    const randomSize = everythingsIsRandomForCircle(50, 10);
    const left = everythingsIsRandomForCircle(900, 10);
    const top = everythingsIsRandomForCircle(400, 10);

    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.left = `${left}px`;
    circle.style.top = `${top}px`;
    circle.style.width = `${randomSize}px`;
    circle.style.height = `${randomSize}px`;
    circle.style.backgroundColor = randomColorForCircle();

    fragment.appendChild(circle);
  }

  document.body.appendChild(fragment);
}

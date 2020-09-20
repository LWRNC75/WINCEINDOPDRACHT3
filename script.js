const toggle = document.getElementById("toggle");

// Toggle nav
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

// color1
const toggleColor1 = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("color1");
};
const attachEventToChangeColor1 = function () {
  const changeColor1 = document.getElementById("color1");
  changeColor1.addEventListener("click", function () {
    toggleColor1();
  });
};
attachEventToChangeColor1();

// color2
const toggleColor2 = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("color2");
};
const attachEventToChangeColor2 = function () {
  const changeColor2 = document.getElementById("color2");
  changeColor2.addEventListener("click", function () {
    toggleColor2();
  });
};
attachEventToChangeColor2();

// color3
const toggleColor3 = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("color3");
};
const attachEventToChangeColor3 = function () {
  const changeColor3 = document.getElementById("color3");
  changeColor3.addEventListener("click", function () {
    toggleColor3();
  });
};
attachEventToChangeColor3();

// color4
const toggleColor4 = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("color4");
};
const attachEventToChangeColor4 = function () {
  const changeColor4 = document.getElementById("color4");
  changeColor4.addEventListener("click", function () {
    toggleColor4();
  });
};
attachEventToChangeColor4();

// color5
const toggleColor5 = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("color5");
};
const attachEventToChangeColor5 = function () {
  const changeColor5 = document.getElementById("color5");
  changeColor5.addEventListener("click", function () {
    toggleColor5();
  });
};
attachEventToChangeColor5();
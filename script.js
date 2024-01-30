let MainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("small-img");

let buttonOut = document.getElementById("bar1");
let buttonIn = document.getElementById("bar2");

let navbar = document.getElementById("navbar");
let header = document.getElementById("header");

// Nav bar part
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let currScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currScrollTop > lastScrollTop) {
    header.style.top = "-85.5px";
  } else {
    header.style.top = "0";
  }
  lastScrollTop = currScrollTop;
});



button.Out.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
buttonIn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Single page

smallImg[0].onclick = () => {
  MainImg.src = smallImg[0].src;
};
smallImg[1].onclick = () => {
  MainImg.src = smallImg[1].src;
};
smallImg[2].onclick = () => {
  MainImg.src = smallImg[2].src;
};
smallImg[3].onclick = () => {
  MainImg.src = smallImg[3].src;
};

// for galery portofolio
const galery = document.querySelector(".galery");
const jumbo = document.querySelector(".jumbo");
let eOld = null;

galery.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);
  }
});

const galery1 = document.querySelector(".galery1");
const jumbo1 = document.querySelector(".jumbo1");

galery1.addEventListener("click", function (e) {
  if (e.target.className == "thumb1") {
    jumbo1.src = e.target.src;
    jumb1o.classList.add("fade");
    setTimeout(function () {
      jumbo1.classList.remove("fade");
    }, 500);
  }
});

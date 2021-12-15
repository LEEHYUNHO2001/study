const btnLang = document.querySelector(".btn-searchlang");
const lang = document.querySelector(".nav-select-lang");

const btnSearch = document.querySelector(".btn-search");
const search = document.querySelector(".nav-search");

const btnRegion = document.querySelector(".btn-region");
const region = document.querySelector(".region-list");

const btnCity = document.querySelector(".btn-city");
const city = document.querySelector(".city-list");

const btnJob = document.querySelector(".btn-job");
const job = document.querySelector(".job-list");

const relatedBtn = document.querySelector(".related-list");
const relatedList = document.querySelector(".related-items");

const btnIns = document.querySelector(".btn-ins");
const insList = document.querySelector(".insta-list");

const btnFace = document.querySelector(".btn-face");
const faceList = document.querySelector(".face-list");

const btnGit = document.querySelector(".btn-git");
const inList = document.querySelector(".in-list");

const btnYou = document.querySelector(".btn-you");
const youList = document.querySelector(".you-list");

const arr = [
  lang,
  search,
  region,
  city,
  job,
  relatedList,
  insList,
  faceList,
  inList,
  youList,
];

const none = document.querySelectorAll(".btn-off");
let flag = false;

btnLang.addEventListener("click", () => {
  if (flag) {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].document.querySelector(".btn-off")) {
        arr[i].classList.add("btn-off");
      }
    }
  }
  flag = !flag;
  lang.classList.toggle("btn-off");
});

btnSearch.addEventListener("click", () => {
  if (flag) {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].document.querySelector(".btn-off")) {
        arr[i].classList.add("btn-off");
      }
    }
  }
  flag = !flag;
  search.classList.toggle("btn-off");
});

btnRegion.addEventListener("click", () => {
  if (flag) {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].document.querySelector(".btn-off")) {
        arr[i].classList.add("btn-off");
      }
    }
  }
  flag = !flag;
  region.classList.toggle("btn-off");
});

btnCity.addEventListener("click", () => {
  city.classList.toggle("btn-off");
});

btnJob.addEventListener("click", () => {
  job.classList.toggle("btn-off");
});

relatedBtn.addEventListener("click", () => {
  relatedList.classList.toggle("btn-off");
});

btnIns.addEventListener("click", () => {
  insList.classList.toggle("btn-off");
});

btnFace.addEventListener("click", () => {
  faceList.classList.toggle("btn-off");
});

btnGit.addEventListener("click", () => {
  inList.classList.toggle("btn-off");
});

btnYou.addEventListener("click", () => {
  youList.classList.toggle("btn-off");
});

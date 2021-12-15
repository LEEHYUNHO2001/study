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

const none = document.querySelector(".btn-off");
let flag = false;

btnLang.addEventListener("click", () => {
  lang.classList.toggle("btn-off");
});

btnSearch.addEventListener("click", () => {
  search.classList.toggle("btn-off");
});

btnRegion.addEventListener("click", () => {
  region.classList.toggle("btn-off");
});

btnCity.addEventListener("click", () => {
  city.classList.toggle("btn-off");
});

btnJob.addEventListener("click", () => {
  job.classList.toggle("btn-off");
});

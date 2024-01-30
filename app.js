// Input Fields
const dayInput = document.querySelector(".day-in");
const monthInput = document.querySelector(".month-in");
const yearInput = document.querySelector(".year-in");

// Submit button
const subBtn = document.querySelector(".btn");

// Output fields
let dayRe = document.querySelector(".day-re");
let monthRe = document.querySelector(".month-re");
let yearRe = document.querySelector(".year-re");

// Errors fields
let e = document.querySelector(".e");

// Labels
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

subBtn.addEventListener("click", function () {
  const date = new Date();

  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth() + 1;
  let currentDay = date.getDate();

  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let resultDay = currentDay - dayInput.value;
  let resultMonth = currentMonth - monthInput.value;
  let resultYear = currentYear - yearInput.value;

  // Day
  if (dayInput.value > currentDay) {
    resultMonth = resultMonth - 1;
    resultDay = months[currentMonth - 1] - (dayInput.value - currentDay);
  }

  if (dayInput.value !== "" && dayInput.value !== "0") {
    dayRe.innerHTML = `${resultDay}`;
  } else {
    e.innerHTML = "This field is required";
    dayRe.innerHTML = `- -`;
  }

  // Month
  if (monthInput.value > currentMonth) {
    resultYear = resultYear - 1;
    resultMonth = 12 - (monthInput.value - currentMonth);
  }

  if (monthInput.value !== "" && monthInput.value !== "0") {
    monthRe.innerHTML = `${resultMonth}`;
  } else {
    e.innerHTML = "This field is required";
    monthRe.innerHTML = `- -`;
  }

  //Year
  if (
    yearInput.value !== "" &&
    yearInput.value !== "0" &&
    currentYear - yearInput.value >= "0"
  ) {
    yearRe.innerHTML = `${resultYear}`;
  } else {
    e.innerHTML = "This field is required";
    yearRe.innerHTML = `- -`;
  }
});

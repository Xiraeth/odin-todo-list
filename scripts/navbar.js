"use strict";

const addCatButton = document.querySelector("#myProjects i");
let categoriesEl = document.querySelector(".categories");
let categories = document.querySelectorAll(".category");

let currentCategory = "";
let isCreating = false;

const tasks = {
  home: ["drink milk"],
  work: [],
  personal: [],
};

categoriesEl.addEventListener("click", changeActiveCatIndicator);
addCatButton.addEventListener("click", addCategory);

function addCategory() {
  if (isCreating) return;
  const newCat = document.createElement("div");
  newCat.classList.add("category");

  const markup = `
  <div class="newCatInputs">
    <input type="text" class="catInput" />
    <div class="inputButtons">
      <input type="submit" value="Add" class="submitBtn"/>
      <button id="cancelInput">Cancel</button>
    </div>
    <div id="categoryWarning"></div>
  </div>
  `;
  categoriesEl.insertAdjacentHTML("beforeend", markup);

  const cancelInput = document.querySelector("#cancelInput");
  const newCatInputs = document.querySelector(".newCatInputs");
  const inputField = document.querySelector(".catInput");
  inputField.focus();
  const submitBtn = document.querySelector(".submitBtn");
  const catWarning = document.querySelector("#categoryWarning");

  isCreating = true;

  cancelInput.addEventListener("click", () => {
    newCatInputs.remove();
    isCreating = false;
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (inputField.value == "") {
      const msg = "Category name cannot be blank";
      flashMsg(catWarning, msg);
      return;
    }

    newCat.textContent = inputField.value;
    newCatInputs.remove();
    categoriesEl.insertAdjacentElement("beforeend", newCat);
    categoriesEl.removeEventListener("click", changeActiveCatIndicator);
    categoriesEl = document.querySelector(".categories");
    categories = document.querySelectorAll(".category");
    categoriesEl.addEventListener("click", changeActiveCatIndicator);
    isCreating = false;
  });
}

function changeActiveCatIndicator(e) {
  const category = e.target.closest(".category");
  if (!category) return;

  categories.forEach((cat) => {
    cat.classList.remove("activeCategory");
  });

  category.classList.add("activeCategory");
}

function flashMsg(element, message) {
  element.style.opacity = 1;
  element.textContent = message;
  setTimeout(function () {
    element.style.opacity = 0;
  }, 2000);
}

//* 1
const listElement = document.querySelector("#categories");
const getNumberOfCategories = (list) =>
  `У списку ${list.querySelectorAll("li.item").length} категорії.`;
console.log(getNumberOfCategories(listElement));
const getCategories = (list) =>
  list.querySelectorAll("li.item").forEach((item) => {
    const title = item.querySelector("h2");
    const itemElements = item.querySelectorAll("li");
    console.log(`Категорія: ${title.textContent}`);
    console.log(`Кількість елементів: ${itemElements.length}`);
  });
getCategories(listElement);
//* 2
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ingredientsList = document.querySelector("ul#ingredients");
listElement.insertAdjacentHTML(
  "beforeend",
  ingredients.map((item) => `<li>${item}</li>`).join("")
);
//* 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const imagesList = document.querySelector("ul#gallery");
imagesList.classList.add("gallery");
imagesList.insertAdjacentHTML(
  "beforeend",
  images
    .map(
      (img) => `<li class="gallery-item">
        <img class="gallery-img" width="200" src="${img.url}" alt="${img.alt}" />
    </li>`
    )
    .join("")
);
//* 4
const value = document.querySelector("#value");
const decBtn = document.querySelector(`[data-action="decrement"]`);
const incBtn = document.querySelector(`[data-action="increment"]`);
const counterValue = 0;

const decrement = (counterValue, value) => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const increment = (counterValue, value) => {
  counterValue += 1;
  value.textContent = counterValue;
};

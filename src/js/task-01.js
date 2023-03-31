const categoriesEl = document.querySelectorAll("li.item");
console.log("Number of categories:",categoriesEl.length);

categoriesEl.forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
})



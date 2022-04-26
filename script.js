//clone
let div2 = document.querySelector("#container").cloneNode(true);
document.querySelector("#container").after(div2);

//remover elementos
// document.querySelector("#container").remove();
document.querySelector("#container > ul > li:first-child").remove();
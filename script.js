// Write your code here
/** Toggles the 'active' class on an element
 * 
 *  @this {HTMLDivElement}
 */
function toggleBulb() {
    this.classList.toggle("active");
}

let bulb1, bulb2, bulb3;
bulb1 = document.querySelector("#lightbulb1");
bulb2 = document.querySelector("#lightbulb2");
bulb3 = document.querySelector("#lightbulb3");
bulb1.addEventListener("click", toggleBulb);
bulb2.addEventListener("click", toggleBulb);
bulb3.addEventListener("click", toggleBulb);
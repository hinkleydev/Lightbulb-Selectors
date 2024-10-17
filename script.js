// Write your code here
let bulb1, bulb2, bulb3, counter, count;

bulb1 = document.querySelector("#lightbulb1");
bulb2 = document.querySelector("#lightbulb2");
bulb3 = document.querySelector("#lightbulb3");
counter = document.querySelector(".subtitle");
count = 0;

bulb1.addEventListener("click", toggleBulb);
bulb2.addEventListener("click", toggleBulb);
bulb3.addEventListener("click", toggleBulb);

/** Toggles the 'active' class on an element
 * 
 *  @this {HTMLDivElement}
 */
function toggleBulb() {
    this.classList.toggle("active");
    count++;
    if (count == 1) counter.innerHTML = `You've clicked the lights ${count} time`; // Singular grammar
    else counter.innerHTML = `You've clicked the lights ${count} times`;
}
// Write your code here
let bulbs, counter, count;

bulbs = document.querySelectorAll(".lightbulb");
counter = document.querySelector(".subtitle");
count = 0;

for (let i = 0; i < bulbs.length; i++) {
    bulbs[i].addEventListener("mouseenter", toggleBulb);
    bulbs[i].addEventListener("mouseout", toggleBulb);
}

/** Toggles the 'active' class on an element
 * 
 *  @this {HTMLDivElement}
 */
function toggleBulb() {
    this.classList.toggle("active");
    count++;
    if (count == 1) counter.innerHTML = `You've toggled the lights ${count} time`; // Singular grammar
    else counter.innerHTML = `You've toggled the lights ${count} times`;
}
// objects' keys can contain values of any type, even functions.
let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    // Find out how to add a '$' to the results of the function
    paint: function () {
        return this.cost_per_hour * workHours;
        // return `$${this.cost_per_hour * workHours}`; puts the '$' within the method
    }
}
// Add an action that the painter can perform(a property whose value is a function ).
// Have her take that action by execucting the method you created.
// BONUS: Add a method that allows us to add new tools for the painter.

let workHours = 5;
// push new tools to tools
let newTools = painter.tools.push('new paint');

painter.paint();

console.log(`Here are my ${painter.tools} `)

console.log(`$${painter.paint()}`)
// console.log(painter.paint()) puts the '$' in the console.log and is prefered



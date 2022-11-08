//step 1
let carpet_roll_diameter = 22; // divide num by 2 to get radius
let tube_diameter = 6;
let carpet_thickness = 1.25;
let carpet_width = 12;

//step 2
let carpet_radius = carpet_roll_diameter / 2;
console.log("Radius of the roll = " + carpet_radius + " inches");
let tube_radius = tube_diameter / 2;
console.log("Radius of the inner tube = " + tube_radius + " inches");

let area_of_carpet_roll = 3.14 * Math.pow(carpet_radius,2);
console.log("The area of the entire carpet roll = " + area_of_carpet_roll);

let area_of_tube = 3.14 * Math.pow(tube_radius,2);
console.log("The area of the carpet tube = " + area_of_tube);

//Step 3
let adjusted_area = area_of_carpet_roll - area_of_tube;
console.log("The adjusted area of the carpet = " + adjusted_area);

// Step 4
// Divide adjusted area by carpet thickness to get linear length
let linear_length_inches = adjusted_area / carpet_thickness;
console.log("The carpet linear length = " + linear_length_inches + " inches");
let linear_feet = Number(linear_length_inches / 12).toFixed(2);
console.log("The linear feet of the 12 foot roll of carpet = " + linear_feet + " lf");

// Step 5
// Get square footage of the carpet.
let carpet_sf = carpet_width * linear_feet;
console.log("Square feet of 12' goods = " + carpet_sf + " sf");
//Get square yards of the carpet
let carpet_sy = Number(carpet_sf / 9).toFixed(2);
console.log("Total square yards of the carpet = " + carpet_sy + " sqyd");
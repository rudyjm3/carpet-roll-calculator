//step 1
//22; // divide num by 2 to get radius
let carpet_roll_diameter = document.getElementById('roll-diameter');  
let tube_diameter = document.getElementById('tube-diameter');
let carpet_thickness = document.getElementById('carpet-thickness');
let carpet_width = 12;

// HD Variables
let numRings = document.getElementById('carpet-rings'); //34;
let twevelFootMultiplier = 0.1744;

// Get form buttons
let submitBtn = document.getElementById('submit-btn');
let hdBtn = document.getElementById('reset-btn');

console.log("Value from input = " + carpet_roll_diameter.value);


//step 2


//Listen for submit button click

submitBtn.addEventListener('click', () => {
   event.preventDefault();
   let carpet_radius = carpet_roll_diameter.value / 2;
console.log("Radius of the roll = " + carpet_radius + " inches");
console.log("Dia of the roll = " + carpet_roll_diameter.value + " inches");

let tube_radius = tube_diameter.value / 2;
console.log("tube diameter = " + tube_diameter.value + " inches");
console.log("Radius of the inner tube = " + tube_radius + " inches");

let area_of_carpet_roll = 3.14 * Math.pow(carpet_radius,2);
console.log("Carpet Red = " + carpet_radius)
console.log("The area of the entire carpet roll = " + area_of_carpet_roll);

let area_of_tube = 3.14 * Math.pow(tube_radius,2);
console.log("The area of the carpet tube = " + area_of_tube);

//Step 3
let adjusted_area = area_of_carpet_roll - area_of_tube;
console.log("The adjusted area of the carpet = " + adjusted_area);

// Step 4
// Divide adjusted area by carpet thickness to get linear length
let linear_length_inches = adjusted_area / carpet_thickness.value;
console.log("The carpet linear length = " + linear_length_inches + " inches");
let linear_feet = Number(linear_length_inches / 12).toFixed(2);
console.log("The linear feet of the 12 foot roll of carpet = " + linear_feet + " lf");

// Step 5
// Get square footage of the carpet.
let carpet_sf = carpet_width * linear_feet;
console.log("Square feet of 12' goods = " + carpet_sf + " sf");
//Get square yards of the carpet
let carpet_sy = carpet_sf / 9;
console.log("Total square yards of the carpet = " + carpet_sy + " sqyd");

   let output = document.getElementById('output');
   output.innerHTML = `
   <hr>
   <p>Diameter of the roll = ${carpet_roll_diameter.value}in</p>
   <br>
   <p>Diameter of the tube = ${tube_diameter.value}in</p>
   <br>
   <p>Carpet thickness = ${carpet_thickness.value}in</p>
   <br>
   <h3>Total Square Yards = ${carpet_sy} sq yd
   `
});

// HD Function
hdBtn.addEventListener('click', () => {
   event.preventDefault();
   
   let addedDiameters = (Number(carpet_roll_diameter.value) + Number(tube_diameter.value));
   console.log(addedDiameters);
   console.log("Rings = " + Number(numRings.value));

   let diametersTimesRings = (addedDiameters * Number(numRings.value));
   console.log(diametersTimesRings);



   let result = diametersTimesRings * twevelFootMultiplier;
   console.log(result);
   let sqyd = result.toFixed(2);
   console.log("sqyds1 " + sqyd);
   // sqyd = (Math.round(sqyd * 100) / 100);
   // console.log(sqyd);
// let carpet_sy = Number(carpet_sf / 9).toFixed(2);
// console.log("Total square yards of the carpet = " + carpet_sy + " sqyd");

   let output = document.getElementById('output');
   output.innerHTML = `
   <hr>
   <p>Diameter of the roll = ${carpet_roll_diameter.value}in</p>
   <br>
   <p>Diameter of the tube = ${tube_diameter.value}in</p>
   <br>
   <p>Carpet rings = ${numRings.value}</p>
   <br>
   <h3>Square Yards = ${sqyd} Sq. Yds.

   `
   console.log(output);
   console.log(16 * 34 * 0.1744);
   
});


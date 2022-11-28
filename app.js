let widthSelection = document.getElementById('roll-width');
let carpet_roll_diameter = document.getElementById('roll-diameter');  
let tube_diameter = document.getElementById('tube-diameter');  //6;
let numRings = document.getElementById('carpet-rings');
// Get form buttons
// let submitBtn = document.getElementById('submit-btn');
let submitButtons = document.querySelectorAll('.submit-btn');
let clearBtn = document.getElementById('reset-btn');

// #### Tab Function  ######## //
function openForm(evt, formName) {
   // Declare all variables
   var i, tabcontent, tablinks;
 
   // Get all elements with class="tabcontent" and hide them
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }
 
   // Get all elements with class="tablinks" and remove the class "active"
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
 
   // Show the current tab, and add an "active" class to the button that opened the tab
   document.getElementById(formName).style.display = "block";
   evt.currentTarget.className += " active";
 }
//  ##### Submit button listener  ###### //
for (const submitButton of submitButtons)
submitButton.addEventListener('click', () => {
   event.preventDefault();

   let buttonValue = submitButton.value;
   switch (buttonValue) {
      case "Calculate-sqyd":
         console.log("Form 1's submit button has been pressed.");
         // Run function for form1
         getSqyds();
         break;
      case "Calculate-cut-price-btn":
         console.log("Form 2's submit button was pressed."); 
         // Run function for form 2
         getCutPrice();
         break;
   }
});

// #####  Clear button function  ####### //
clearBtn.addEventListener('click', () => {
   document.getElementById('form1').reset();
   document.getElementById('output').innerText = "";
});

// ##### HD Calc Square Yards Function  ##### //
function getSqyds() {
   event.preventDefault(); // Prevent form from submitting/clearing
// Get carpet roll width text
const getSelectedText = (el) => {
   if (el.selectedIndex === -1) {
      return null;
   }
   return el.options[el.selectedIndex].text;
   }
   // Get roll width Multiplier value from selected carpet roll width
   const getSelectedValue = (el) => {
   if (el.selectedIndex === -1) {
      return null;
   }
   return el.options[el.selectedIndex].value;
   }
   const select = document.querySelector('select')//Roll width selection
   let carpetWidth = getSelectedText(select);
   let multiplier = getSelectedValue(select);
   console.log(Number(carpetWidth));
   console.log(Number(multiplier));
   
// Add carpet diameter and tube diameter together
let addedDiameters = (Number(carpet_roll_diameter.value) + Number(tube_diameter.value));
console.log("Roll diameter = " + carpet_roll_diameter.value);
console.log("Tube diameter = " + tube_diameter.value);
console.log("Total of carpet diameter and tube diameter = " + addedDiameters);
console.log("Rings counted = " + numRings.value);
// Total diameter multiplied by number of rings
let diametersTimesRings = addedDiameters * Number(numRings.value);
console.log("Result = " + diametersTimesRings);

// Multiply total from above line by roll width multiplier
let result = diametersTimesRings * multiplier;
console.log("Result = " + result + " * multipler used = " + multiplier + ", roll width selected = " + carpetWidth);
let sqyd = result.toFixed(2);
console.log("Sq. Yds. = " + sqyd);
let linear_feet = ((sqyd * 9) / carpetWidth).toFixed(2);
console.log(linear_feet + " lf.");

let output = document.getElementById('output');
output.innerHTML = `
<hr>
<p>Width of roll = ${carpetWidth} ft</p>
<br>
<p>Diameter of the roll = ${carpet_roll_diameter.value}in</p>
<br>
<p>Diameter of the tube = ${tube_diameter.value}in</p>
<br>
<p>Carpet rings = ${numRings.value}</p>
<br>
<h2>Square Yards = ${sqyd}</h2>
<b>Linear foot of the roll = ${linear_feet}</b>
`
}

// ### CALC CUT SIZE PRICE FUNCTION  ### //

/* Formula to convert inch to decimal (Divide inch by 12)
 example: 4in / 12 = 0.333
 */
function getCutPrice() {
   event.preventDefault();

   let inInput = document.getElementById('cut-size-in');
   // inInput.addEventListener('change', () => {
   //    let inDecimal = (inInput.value / 12).toFixed(3);
   // console.log(inDecimal);
   // });
   let inDecimal = (inInput.value / 12).toFixed(3);
   console.log(inDecimal);

   const getSelectedText = (el) => {
      if (el.selectedIndex === -1) {
         return null;
      }
      return el.options[el.selectedIndex].text;
      }
      // Get roll width Multiplier value from selected carpet roll width
      const getSelectedValue = (el) => {
      if (el.selectedIndex === -1) {
         return null;
      }
      return el.options[el.selectedIndex].value;
      }
      const select = document.querySelector('select')//Roll width selection
      // let carpetWidth = getSelectedText(select);
      let rollGoodWidth = getSelectedValue(select);
      // console.log(Number(carpetWidth));
      console.log(Number(rollGoodWidth));
};





/* Roll Width Multipliers for sqyd
- 6' multiplier = 0.0872
- 10' multiplier = 0.1454
- 12' multiplier = 0.1744
- 15' multiplier = 0.2182
*/
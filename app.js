// let widthSelection = document.getElementById('roll-width');
let carpet_roll_diameter = document.getElementById('roll-diameter');  
let tube_diameter = document.getElementById('tube-diameter');  //6;
let numRings = document.getElementById('carpet-rings');
// Get form buttons
let submitButtons = document.querySelectorAll('.submit-btn');
let clearButtons = document.querySelectorAll('.clear-btn');

/* #### Tab Function  ########################################################
#############################################################################*/
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
 //######################### END TAB FUNCTION ##############################//


/* ##### SUBMIT BUTTON LISTENER  #########################################
#######################################################################*/
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
//######################## END BUTTON LISTENER #########################//

/* #####  Clear button function ################################
################################################################*/
for(const clearButton of clearButtons)
clearButton.addEventListener('click', () => {
   // event.preventDefault();
   debugger;
   let buttonValue = clearButton.value;
   switch (buttonValue) {
      case "Reset-sqyd-form":
         console.log("Clear button on form 1 was clicked");
         document.getElementById('form1').reset();
         document.getElementById('output-roll-size').textContent = "";
         break;
      case "Reset-price-form":

         console.log("Clear button on form 2 was clicked");
         document.getElementById('form2').reset();
         document.getElementById('output-cut-price').innerHTML = "";
         break;
   }
});
//######################### END CLEAR BTN FUNCTION ##########################//


/* ##### CALC ROLLED GOODS FUNCTION ##############################
################################################################*/
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
   console.log(multiplier);
   
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

let output = document.getElementById('output-roll-size');
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
//######################### END ROLLED GOODS CALC ##########################//



/* ### CALC CUT SIZE PRICE FUNCTION ################################
################################################################*/
/* Formula to convert inch to decimal (Divide inch by 12)
 example: 4in / 12 = 0.333
 */

/* ##### Delete Cut Size Function ################################
################################################################*/
// let removeCutBtn = document.getElementsByClassName('delet-input');
//    for(var i = 0; i < removeCutBtn.length; i++) {
//       var myBtnRemove = removeCutBtn[i];

//       myBtnRemove.addEventListener('click', deleteCut);

//       function deleteCut() {
//          debugger;
//          var item = this.parentNode;
//          var parent = item.ParentNode;
//          parent.removeChild(item);

//          myBtnRemove.removeEventListener('click', deleteCut);
//       };

//    }
//######################### END ######################################//
function updateCounter() {
   debugger;
   --cutCounter;
   console.log(cutCounter);
}


/* ### **** ADD NEW CUT REWRITE ### **** ##############################
#######################################################################*/
let cutCounter = 1;
// Add a function to add another cut to the form
function addCut() {
// event.preventDefault(); // Prevent form from submitting/clearing
// Increment the counter
cutCounter++;
console.log(cutCounter);
// Create a new div for the cut
let cutDiv = document.createElement("div");
// Add class to new div 
cutDiv.classList.add('cut-input-wrapper');
// Add the necessary input for the new cut
cutDiv.innerHTML = `
   <label for="cut${cutCounter}Length">Length of cut${cutCounter}:</label>
   <input type="number" class="cutLengthFt" name="cut-size-ft" min="0" step="1" value="" placeholder="0"> 
   <span class="measure-unit-ft">ft</span> 
   <!-- Inch Input -->
   <input type="number" id="cut1LengthInch" class="cutLengthInch" name="cut-size-in" min="0" max="11" step="1" value="" placeholder="0">
   <span class="measurement-unit" id="measurement-unit-in">in</span>
   <button type="button" class="delete-input"onclick="updateCounter(); return this.parentNode.remove();" >Remove Cut</button>
`
// Add the new div to the form
document.getElementById("cuts").appendChild(cutDiv);
}
// ### **** END ADD NEW CUT REWRITE ### **** #############################//


function getCutPrice() {
   event.preventDefault();

   const feetInputs = document.querySelectorAll('.cutLengthFt');
   // console.log(feetInputs.length);
   let totalFt = 0;
   feetInputs.forEach(input => {
      totalFt += parseInt(input.value);
   });
   console.log(totalFt);

   const inchInputs = document.querySelectorAll('.cutLengthInch');
   // console.log(inchInputs.length);
   let totalIn = 0;
   inchInputs.forEach(input => {
      totalIn += parseInt(input.value);
   });
   console.log(totalIn);
   let inchToDecimal = +(totalIn / 12).toFixed(3);
   console.log(inchToDecimal);

   let totalCutLength = (totalFt + inchToDecimal);
   console.log(totalCutLength);

   let itemPrice = document.getElementById('sell-price-input').value;
   console.log("Price of carpet " + itemPrice);

   // Get SYDS
   let sqyds = ((totalCutLength * 12) / 9).toFixed(2);
   console.log(sqyds);     
   
   // Get total price for all cuts
   totalPrice = (sqyds * itemPrice).toFixed(2);
   console.log(totalPrice);

   // Display results
   let output = document.getElementById('output-cut-price');
   output.innerHTML = `
   <hr>
   <p>Total Price = $ ${totalPrice}</p>
   <br>
   <p>Total Cuts = ${cutCounter}</p>
   <br>
   `
};

function selectedWidth() {
   let widthSelection = document.getElementById('roll-width2').value;
   if (widthSelection == 6) {
      console.log("6ft option selected");
      // console.log(+widthSelection);
      let sellUnit = document.querySelector('.price-unit-measurement');
      sellUnit.textContent = "Per Lf";
      console.log(+widthSelection);
      return Number(widthSelection);
      
   } else if (widthSelection == 12) {
      console.log("12ft selected");
      let sellUnit = document.querySelector('.price-unit-measurement');
      sellUnit.textContent = "Per SqYd";
      console.log(+widthSelection);
      return Number(widthSelection);
   }

}
selectedWidth();

// window.onload = widthSelection;

document.getElementById('roll-width2').addEventListener('change', selectedWidth);

// console.log(widthSelection);

//######################### END PRICE CALC ##################################//



/* Roll Width Multipliers for sqyd
- 6' multiplier = 0.0872
- 10' multiplier = 0.1454
- 12' multiplier = 0.1744
- 15' multiplier = 0.2182
*/
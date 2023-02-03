// let widthSelection = document.getElementById('roll-width');
const rollSizeForm = document.getElementById('form1-Roll-Size-Calc');
const cutForm = document.getElementById('form2-Cut_clac');
let carpet_roll_diameter = document.getElementById('roll-diameter');  
let tube_diameter = document.getElementById('tube-diameter');  //6;
let numRings = document.getElementById('carpet-rings');
// Get form buttons
let submitButtons = document.querySelectorAll('.submit-btn');
let clearButtons = document.querySelectorAll('.clear-btn');
const output = document.getElementById('output-roll-size');

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
submitButton.addEventListener('click', (event) => {
   debugger;
// This is causing browsers default form validation to not run/work    
   event.preventDefault();
   
   let buttonValue = submitButton.value;
   switch (buttonValue) {
      case "Calculate-sqyd":
         console.log("Form 1's submit button has been pressed.");
         //Run form validation
         // validateInputs();
         // Run function for form1-Roll-Size-Calc
         if(validateInputs() === true) {
           getSqyds(); 
         }
         
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
   
   let buttonValue = clearButton.value;
   switch (buttonValue) {
      case "Reset-sqyd-form":
         console.log("Clear button on form 1 was clicked");
         document.getElementById('form1-Roll-Size-Calc').reset();
         document.getElementById('output-roll-size').textContent = "";
         document.getElementById('output-roll-size').style.visibility = "hidden";
         break;
      case "Reset-price-form":
         console.log("Clear button on form 2 was clicked");
         const newCuts = document.querySelectorAll('.added-cut');
            for (i = 0; i < newCuts.length; i++) {
               console.log('amount of cuts being removed: ', newCuts.length);
               newCuts[i].remove();
               updateCounter();
            }
         document.getElementById('form2-Cut-Calc').reset();
         document.getElementById('output-cut-price').innerHTML = "";
         document.getElementById('output-cut-price').style.visibility = "hidden";
         break;
   }
});

//######################### END CLEAR BTN FUNCTION ##########################//


/* ##### FORM 1 VALIDATION  ##############################
#############################################################*/
const firstForm = document.getElementById('form1-Roll-Size-Calc');
const select1 = document.getElementById('roll-width');
const rollDiameter = document.getElementById('roll-diameter');
const tubeDiameter = document.getElementById('tube-diameter');
const countedRings = document.getElementById('carpet-rings');


const setError = (element, message) => {
   // debugger;
   const inputControl1 = element.parentElement;
   const errorOutline = element;
   const errorTxt = inputControl1.querySelector('.error-text-wrapper');
   const errorIcon = inputControl1.querySelector('.error-icon-wrapper');
   console.log(errorIcon);

   errorTxt.innerText = message;
   errorTxt.style.cssText = 'display: block;';
   errorIcon.style.cssText = 'transform: scale(1);';
   errorIcon.classList.add('error-shake');
   errorOutline.classList.add('error-input-border');
   errorOutline.classList.remove('success-input-border');
   
};

const setSuccess = element => {
   const inputControl1 = element.parentElement;
   // console.log(inputControl1);
   const successOutline = element;
   const errorTxt = inputControl1.querySelector('.error-text-wrapper');
   const errorIcon = inputControl1.querySelector('.error-icon-wrapper');

   errorTxt.innerText = "";
   errorTxt.style.cssText = 'display: block;';
   errorIcon.style.cssText = 'transform: scale(0);';
   errorIcon.classList.remove('error-shake');
   successOutline.classList.remove('error-input-border');
   successOutline.classList.add('success-input-border');
};
// Removes setSuccess styling when validation passes 100%
const setSuccessClear = element => {
   const inputControl1 = element.parentElement;
   const successOutline = element;

   successOutline.classList.remove('success-input-border');   
};

const validateInputs = () => {
   const select1Value = document.getElementById('roll-width');
   const rollDiameterValue = rollDiameter.value.trim();
   const tubeDiameterValue = tubeDiameter.value.trim();
   const countedRingsValue = countedRings.value.trim();

   if (select1Value.selectedIndex === 0) {
      setError(select1Value, '*Roll width selection required');  
   } else {
      setSuccess(select1Value); 
   }

   if (rollDiameterValue === '') {
      setError(rollDiameter, '*Roll diameter inches required');
   } else {
      setSuccess(rollDiameter); 
   }

   if (tubeDiameterValue === '') {
      setError(tubeDiameter, '*Tube diameter inches required');
   } else {
      setSuccess(tubeDiameter);
   }

   if (countedRingsValue === '') {
      setError(countedRings, '*Number of carpet rings required');
   } else {
      setSuccess(countedRings);
   }

   if (select1Value.selectedIndex === 0 || !rollDiameterValue || !tubeDiameterValue || !countedRingsValue) {
      console.log("All 3 of the last inputs must have value.");
      return false;
   } else {
      console.log("All inputs have a value.");
      setSuccessClear(select1Value);
      setSuccessClear(rollDiameter);
      setSuccessClear(tubeDiameter);
      setSuccessClear(countedRings);
      return true;
   }

};
//################### END FORM 1 VALIDATION ##########################//

/* ##### FORM 2 VALIDATION  ##############################
#############################################################*/
const Form2 = document.getElementById('form1-Roll-Size-Calc');
const select2 = document.getElementById('roll-width');
const footInput = document.getElementById('roll-diameter');
const inchInput = document.getElementById('tube-diameter');
const priceInput = document.getElementById('carpet-rings');


const setErrorForm2 = (element, message) => {
   // debugger;
   const inputControl2 = element.parentElement;
   const errorOutline = element;
   const errorFtTxt = inputControl2.querySelector('.error2-ft-text-wrapper');
   const errorFtIcon = inputControl2.querySelector('.error2-ft-icon-wrapper');
   const errorInchTxt = inputControl2.querySelector('.error2-inch-text-wrapper');
   const errorInchIcon = inputControl2.querySelector('.error2-inch-icon-wrapper');
   const errorPriceTxt = inputControl2.querySelector('.error-price-text-wrapper');
   const errorPriceIcon = inputControl2.querySelector('.error-price-icon-wrapper');

   errorFtTxt.innerText = message;
   errorFtTxt.style.cssText = 'display: block;';
   errorFtIcon.style.cssText = 'transform: scale(1);';
   errorFtIcon.classList.add('error-shake');

   errorInchTxt.innerText = message;
   errorInchTxt.style.cssText = 'display: block;';
   errorInchIcon.style.cssText = 'transform: scale(1);';
   errorInchIcon.classList.add('error-shake');

   errorPriceTxt.innerText = message;
   errorPriceTxt.style.cssText = 'display: block;';
   errorInchIcon.style.cssText = 'transform: scale(1);';
   errorInchIcon.classList.add('error-shake');

   errorOutline.classList.add('error-input-border');
   errorOutline.classList.remove('success-input-border');
   
};

const setSuccessForm2 = element => {
   const inputControl1 = element.parentElement;
   // console.log(inputControl1);
   const successOutline = element;
   const errorTxt = inputControl1.querySelector('.error-text-wrapper');
   const errorIcon = inputControl1.querySelector('.error-icon-wrapper');

   errorTxt.innerText = "";
   errorTxt.style.cssText = 'display: block;';
   errorIcon.style.cssText = 'transform: scale(0);';
   errorIcon.classList.remove('error-shake');
   successOutline.classList.remove('error-input-border');
   successOutline.classList.add('success-input-border');
};
// Removes setSuccess styling when validation passes 100%
const setSuccessClearForm2 = element => {
   const inputControl1 = element.parentElement;
   const successOutline = element;

   successOutline.classList.remove('success-input-border');   
};

const validateInputsForm2 = () => {
   const select1Value = document.getElementById('roll-width');
   const rollDiameterValue = rollDiameter.value.trim();
   const tubeDiameterValue = tubeDiameter.value.trim();
   const countedRingsValue = countedRings.value.trim();

   if (select1Value.selectedIndex === 0) {
      setErrorForm2(select1Value, '*Roll width selection required');  
   } else {
      setSuccessForm2(select1Value); 
   }

   if (rollDiameterValue === '') {
      setErrorForm2(rollDiameter, '*Roll diameter inches required');
   } else {
      setSuccessForm2(rollDiameter); 
   }

   if (tubeDiameterValue === '') {
      setErrorForm2(tubeDiameter, '*Tube diameter inches required');
   } else {
      setSuccessForm2(tubeDiameter);
   }

   if (countedRingsValue === '') {
      setErrorForm2(countedRings, '*Number of carpet rings required');
   } else {
      setSuccessForm2(countedRings);
   }

   if (select1Value.selectedIndex === 0 || !rollDiameterValue || !tubeDiameterValue || !countedRingsValue) {
      console.log("All 3 of the last inputs must have value.");
      return false;
   } else {
      console.log("All inputs have a value.");
      setSuccessClearForm2(select1Value);
      setSuccessClearForm2(rollDiameter);
      setSuccessClearForm2(tubeDiameter);
      setSuccessClearForm2(countedRings);
      return true;
   }

};
//################### END FORM 2 VALIDATION ##########################//

/* ##### CALC ROLLED GOODS QUANTITY FUNCTION ##############################
################################################################*/
function getSqyds() {
   
   // Get carpet roll width text and value
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
   /* Determmine weather to show total square yards or linear footage 
   based on selected roll width size */
   if(carpetWidth === "6") {
      
      output.style.cssText = 'visibility: visible;opacity: 1;';
      output.innerHTML = 
      `
      <div class="output-title-wrapper">
         <p class="results-title">Results</p>
      </div>   
      
      <p class="total-qty-results">Total = ${linear_feet}<span class="total-measure-unit-tag">Linear Feet</span></p>
      `
   } else {
      output.style.cssText = 'visibility: visible;opacity: 1;';
      output.innerHTML = 
      `
      <div class="output-title-wrapper">
         <p class="results-title">Results</p>
      </div>   
      
      <p class="total-qty-results">Total = ${sqyd}<span class="total-measure-unit-tag">Square Yards</span></p>

      <p>Linear feet = ${linear_feet}</p>
      `
   }

}
//######################### END ROLLED GOODS CALC ##########################//



/* ### CALC CUT SIZE PRICE FUNCTION ################################
################################################################*/
/* Formula to convert inch to decimal (Divide inch by 12)
 example: 4in / 12 = 0.333
 */
function updateCounter() { 
   --cutCounter;
   console.log("cut count = " + cutCounter);
}
function removeCut(ele) {
   ele.parentNode.remove();
   updateCounter();
}


/* ### **** ADD NEW CUT REWRITE ### **** ##############################
#######################################################################*/
let cutCounter = 1;
// Add a function to add another cut to the form
function addCut() {
// event.preventDefault(); // Prevent form from submitting/clearing
// Increment the counter
cutCounter++;
console.log("cut count " + cutCounter);
// Create a new div for the cut
let cutDiv = document.createElement("div");
// Add class to new div 
cutDiv.classList.add('cut-input-wrapper', 'added-cut');
// Add the necessary input for the new cut
cutDiv.innerHTML = `
   <label for="cut${cutCounter}Length">Length of cut ${cutCounter}:</label>
   <input type="number" class="cutLengthFt" name="cut-size-ft" min="0" step="1" value="" placeholder="0" required> 
   <span class="measurement-unit measurement-unit-ft">ft</span> 

   <div class="error2-ft-text-wrapper"><i>* Feet required</i></div>
   <div class="error2-ft-icon-wrapper"><i class="fas fa-exclamation-circle error2-icon"></i></div>

   <!-- Inch Input -->
   <input type="number" id="cut1LengthInch" class="cutLengthInch" name="cut-size-in" min="0" max="11" step="1" value="" placeholder="0" required>
   <span class="measurement-unit measurement-unit-in">in</span>

   <div class="error2-inch-text-wrapper"><i>* Inch required</i></div>
   <div class="error2-inch-icon-wrapper"><i class="fas fa-exclamation-circle error2-icon"></i></div>

   <button type="button" class="delete-input-btn" onclick="removeCut(this);"><i class="far fa-trash-alt trash-icon"></i></button>
`

{/* <button type="button" class="delete-input-btn" onclick="removeCut(this);"><i class="far fa-trash-alt trash-icon"></i></button> */}
// Add the new div to the form
document.getElementById("cuts").appendChild(cutDiv);
}
// ### **** END ADD NEW CUT REWRITE ### **** #############################//


function getCutPrice() {
   
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
      const select = document.getElementById('roll-width2')//Roll width selection
      let selectedCarpetWidth = getSelectedValue(select);
      console.log(Number(selectedCarpetWidth));
      

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
   
   let linearFeet = totalCutLength;
   console.log("Total LF = " + linearFeet);
   
   // Squrae Yards: Get total price for all cuts
   sqydTotalPrice = (sqyds * itemPrice).toFixed(2);
   console.log(sqydTotalPrice);
   // Linear Feet: Get total price for all cuts
   lfTotalPrice = (linearFeet * itemPrice).toFixed(2);
   console.log("LF total price= " + lfTotalPrice);

   // Display results based on roll width selected
   let output2 = document.getElementById('output-cut-price');
   if(selectedCarpetWidth === "6") {
      output2.style.cssText = 'visibility: visible;opacity: 1;';
      output2.innerHTML = 
      `
      <div class="output-title-wrapper">
         <p class="results-title">Results</p>
      </div>   
   
      <p class="total-price-results">Total = $${lfTotalPrice}
      <span class="before-tax-tag">(Before tax)</span></p>
      
      <p class="total-cuts-results">Total Cuts = ${cutCounter}</p>
      
      <p class="total-lf-results">Total length of all cuts = ${linearFeet} /lf
      `
   } else {
      output2.style.cssText = 'visibility: visible;opacity: 1;';
      output2.innerHTML = 
      `
      <div class="output-title-wrapper">
         <p class="results-title">Results</p>
      </div>
    
      <p class="total-price-results">Total = $${sqydTotalPrice}<span class="before-tax-tag">(Before tax)</span></p>
      
      <p class="total-sqyd-results">Total square yards of ${cutCounter} cuts = ${sqyds}<span class="total-measure-unit-tag">/sqyds</span>

      <p class="total-lf-results">Total length of all cuts = ${totalCutLength} /lf
      `
   }

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
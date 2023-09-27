// let widthSelection = document.getElementById('roll-width');
const headerIcons = document.querySelectorAll('.header__menu-list-item');
const menuItemContent = document.getElementById('menu-display');

const rollSizeForm = document.getElementById('form1-Roll-Size-Calc');
const cutForm = document.getElementById('form2-Cut_clac');

let carpet_roll_diameter = document.getElementById('roll-diameter');  
let tube_diameter = document.getElementById('tube-diameter');  //6;
let numRings = document.getElementById('carpet-rings');
// Get form buttons
let submitButtons = document.querySelectorAll('.submit-btn');
let clearButtons = document.querySelectorAll('.clear-btn');
const output = document.getElementById('output-roll-size');


/* #### Menu Header Icon Click Event Listener  ###########################
########################################################################## */
headerIcons.forEach((icon) => {
   icon.addEventListener('click', () => {
      const titleAttribute = icon.getAttribute('title');
      if (titleAttribute === "How to use") {
         console.log("The 1st icon was clicked with the attr of How to use");
         menuItemContent.innerHTML = howToTemplate;
         menuItemContent.style.top = "80px";
         menuItemContent.style.visibility = "visible";
         menuItemContent.style.transform = "scale(1)";
         
      } else if (titleAttribute === "Tips and FQ") {
         console.log("2nd icon was clicked.");
         menuItemContent.innerHTML = fqTemplate;
         menuItemContent.style.top = "80px";
         menuItemContent.style.visibility = "visible";
         menuItemContent.style.transform = "scale(1)";
         
      } else {
         console.log("Last icon was clicked.");
         menuItemContent.innerHTML = tempFeedbackTemplate;
         menuItemContent.style.top = "80px";
         menuItemContent.style.visibility = "visible";
         menuItemContent.style.transform = "scale(1)";
      };
   });
});

let howToTemplate = `
<div class="close-btn-wrapper">
   <button id="closeMenuBtn" onclick="closeMenu()"><i class="fas fa-window-close"></i></button>
</div>
<div class="form-heading">
   <p>How to use the Rolled Goods Calculator<p>
</div>

<br>

<p>The rolled goods calculator will help you know how much material is on the roll in square yards (Sq. yd.) or linera feet (Lf) based on your roll width selection. The other feature if this rolled goods calculator is to help you give a pre tax total on cut/s needed by a customer.</p>
<br>

<div class="form-heading">
   <p>Rolled Goods Calculator<p>
</div>

<!-- <hr class="line-break"> -->
<ol>
   <li>Select the width of the rolled goods you are working with.</li>
   <li>Measure the entire diameter of the roll in inches and input the number. </li>
   <li>Measure the diameter of the inner cardboard tube and input the inches.</li>
   <li>Count the number of rings the rolled material has and input the number</li>
   <li>Clicking the calculate button returns the total square yards that is currently on the roll. The more accurate your measurements are the closer you get the true square yardage that is left on the roll.</li>
</ol>

<br>

<div class="form-heading">
   <p>Calculate Carpet Price</p>
</div>
<!-- <hr class="line-break"> -->
<ol>
   <li>Select the width of the rolled goods width you are working with.(Use the 6ft selection for runners)</li>
   <li>Enter the length of the cut. Example: Customer needs a 12'x13'8" cut of carpet. You just need to input the length which is 13ft 8in. <strong>All input fields must have a value even if it is zero</strong>.</li>
   <li>Enter the <strong>square yard price</strong> or <strong>linear foot price</strong>.</li>
   <li>Click the "Get Price" button. This will return the price of the cut/s before tax. Give you the total square yards of the cut/s. If you have multiple cuts it will return the total of all the lengths.</li>
</ol>
`;
let fqTemplate = `
<div class="close-btn-wrapper">
   <button id="closeMenuBtn" onclick="closeMenu()"><i class="fas fa-window-close"></i></button>
</div>

<div class="form-heading">
   <p>Frequently asked Questions / Tips and Tricks</p>
</div>

<br>
<ol>
   <li style="margin-bottom:5px;>
      <p style="font-weight:600;">What if the length given to me is in inches?</p>
   </li>
   <p style="border-radius: 4px; background-color: #e3e3e3; margin-bottom: 15px; padding: 6px;">
      With the <span style="font-weight:600; color:#0f68bc;">Calc Carpet Price</span> calculator you can input 0 for the foot input and just input the inches in the inch input field.
   </p>

   <li style="margin-bottom:5px;><p style="font-weight:600;">Can the "Calc Roll Quanity" calculator be used to calculate the total linear feet of runners?</p></li>
   <p style="border-radius: 4px; background-color: #e3e3e3; margin-bottom: 15px; padding: 6px;">
      Yes. Select "6ft wide" when selecting the "Roll width size" to calculate how many linear feet is left on the roll for runners.
   </p>
</ol>
`;
let feedbackFormTemplate = `
<div class="feedbk-form-container">
   <div class="close-btn-wrapper">
      <button id="closeMenuBtn" onclick="closeMenu()"><i class="fas fa-window-close"></i></button>
   </div>


   <!-- action="https://script.google.com/macros/s/AKfycbxxvtt18dcYkd0DA9zzTcz3yuh6Eg8ikL89zy4u1thySbMkooyCI2sNfqsn-Gg0CdHy/exec" 
      
   method="POST" id="feedback-form" name="feedback-form" -->
   <form action="https://script.google.com/macros/s/AKfycbxxvtt18dcYkd0DA9zzTcz3yuh6Eg8ikL89zy4u1thySbMkooyCI2sNfqsn-Gg0CdHy/exec" 
      
   method="POST" id="feedback-form" name="feedback-form">

      <div class="form-heading">
         <p>Feed Back Form</p>
      </div>
      <div class="feedback-form-txt">
         <p>Appreciate any feedback you may have that will help make this tool more helpful or if you notice any issues please let me know. Thank you.</p>
      </div>
      <div class="form-group">
         <label for="store-num">Store #</label>
         <br>
         <input type="number" name="store-num" id="store-num-input" value="" placeholder="Optional" />
      </div>
      <div class="form-group">
         <label for="textarea">Comment</label>
         <br>
         <textarea id="txt-area" name="txtarea" rows="6" cols="60" maxlength="300" required ></textarea>
         <br>
         <p class="char-remaining-txt">Characters remaining: <span id="textarea-char-counter">300</span></p>            
      </div>
      <div class="form-group feedback-form-submit-btn-wrapper">
         <button type="submit" id="feedback-form-submitBtn" class="feedback-form-submit-btn">Submit</button>
      </div>
      <div id="went"></div>
   </form>
</div>
`;
let tempFeedbackTemplate = `
<div class="close-btn-wrapper">
   <button id="closeMenuBtn" onclick="closeMenu()"><i class="fas fa-window-close"></i></button>
</div>
<div class="form-heading">
   <p>Feed Back<p>
</div>

<br>

<p>If you would like to leave any feedback, sugesstions, or 
if you notice an issue you can let me know through one of the options below. Web form will be added at a later time for convenice. Thank you.
</p>

<br>

<ul>
   <li>Post it on Vivia Engage at this link
<a href="https://www.yammer.com/homedepot.com/threads/2187206353313792?message_id=2187206353313792" target="_blank">Rolled Goods Calculator</a></li>
   <li>Serach for the title of the post "HD Rolled Goods Calculator" on Viva Engage, and leave a comment on the post</li>
   <li>Or a direct comment to me</li>
</ul>

`
const closeBtn = document.getElementById('closeMenuBtn');
function closeMenu() {
   menuItemContent.style.transform = "scale(0)";
   menuItemContent.style.top = "100%";
   menuItemContent.style.visibility = "hidden";
};

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


/* ##### SUBMIT BUTTON LISTENER FOR CALCULATORS ###########################
#######################################################################*/
for (const submitButton of submitButtons)
submitButton.addEventListener('click', (event) => {
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
         if(validateInputsForm2() === true) {
            getCutPrice();
         }
        
         break;
   }
});
//########## END SUBMIT BUTTON LISTENER FOR CALCULATORS  #################//

/* ##### CLEAR BUTTON FUNCTION ################################
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

         setSuccessClear(select1Value);
      setSuccessClear(rollDiameter);
      setSuccessClear(tubeDiameter);
      setSuccessClear(countedRings);
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
   
   const inputControl1 = element.parentElement;
   const errorOutline = element;
   const errorTxt = inputControl1.querySelector('.error-text-wrapper');
   const errorIcon = inputControl1.querySelector('.error-icon-wrapper');

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
      console.log("All inputs must have value.");
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
const form2 = document.getElementById('form2-Cut-Calc');
const select2Width = document.getElementById('roll-width2');
const cutList = document.getElementById('cuts-list');
const footInputs = document.getElementsByClassName('cutLengthFt');
const inchInputs = document.getElementsByClassName('cutLengthInch');
const priceInput = document.getElementById('sell-price-input');

const setErrorSelect = (element, message) => {
   const inputControl2 = element.parentElement;
   const error2Outline = element;
   const error2SelectTxt = inputControl2.querySelector('.error2-select-text-wrapper');
   const error2SelectIcon = inputControl2.querySelector('.error2-select-icon-wrapper');
   error2SelectTxt.innerText = message;
   error2SelectTxt.style.cssText = 'display: block;';
   error2SelectIcon.style.cssText = 'transform: scale(1);';
   error2SelectIcon.classList.add('error-shake');
   error2Outline.classList.add('error-input-border');
   error2Outline.classList.remove('success-input-border');
};
const setErrorFt = (element, message) => {
   const inputControl2 = element.parentElement;
   const error2Outline = element;
   const error2FtTxt = inputControl2.querySelector('.error2-ft-text-wrapper');
   const error2FtIcon = inputControl2.querySelector('.error2-ft-icon-wrapper');
   error2FtTxt.innerText = message;
   error2FtTxt.style.cssText = 'display: block;';
   error2FtIcon.style.cssText = 'transform: scale(1);';
   error2FtIcon.classList.add('error-shake');
   error2Outline.classList.add('error-input-border');
   error2Outline.classList.remove('success-input-border');
};
const setErrorInch = (element, message) => {
   const inputControl2 = element.parentElement;
   const error2Outline = element;
   const error2InchTxt = inputControl2.querySelector('.error2-inch-text-wrapper');
   const error2InchIcon = inputControl2.querySelector('.error2-inch-icon-wrapper');
   error2InchTxt.innerText = message;
   error2InchTxt.style.cssText = 'display: block;';
   error2InchIcon.style.cssText = 'transform: scale(1);';
   error2InchIcon.classList.add('error-shake');
   error2Outline.classList.add('error-input-border');
   error2Outline.classList.remove('success-input-border');
};
const setErrorPrice = (element, message) => {
   const inputControl2 = element.parentElement;
   const error2Outline = element;
   const errorPriceTxt = inputControl2.querySelector('.error-price-text-wrapper');
   const errorPriceIcon = inputControl2.querySelector('.error-price-icon-wrapper');
   errorPriceTxt.innerText = message;
   errorPriceTxt.style.cssText = 'display: block;';
   errorPriceIcon.style.cssText = 'transform: scale(1);';
   errorPriceIcon.classList.add('error-shake');
   error2Outline.classList.add('error-input-border');
   error2Outline.classList.remove('success-input-border');
};

const setSuccessForm2Select2 = element => {
   const inputControl2 = element.parentElement;
   const successOutline = element;
   const error2SelectTxt = inputControl2.querySelector('.error2-select-text-wrapper');
   const error2SelectIcon = inputControl2.querySelector('.error2-select-icon-wrapper');

   error2SelectTxt.innerText = "";
   error2SelectTxt.style.cssText = 'display: block;';
   error2SelectIcon.style.cssText = 'transform: scale(0);';
   error2SelectIcon.classList.remove('error-shake');
   successOutline.classList.remove('error-input-border');
   successOutline.classList.add('success-input-border');
}
const setSuccessForm2Ft = element => {
   const inputControl2 = element.parentElement;
   const successOutline = element;
   
   const error2Txt = inputControl2.querySelector('.error2-ft-text-wrapper');
   const error2Icon = inputControl2.querySelector('.error2-ft-icon-wrapper');
   error2Txt.innerText = "";
   error2Txt.style.cssText = 'display: block;';
   error2Icon.style.cssText = 'transform: scale(0);';
   error2Icon.classList.remove('error-shake');
   successOutline.classList.remove('error-input-border');
   successOutline.classList.add('success-input-border');
};
const setSuccessForm2Inch = element => {
   const inputControl2 = element.parentElement;
   const successOutline = element;
   
   const error2Txt = inputControl2.querySelector('.error2-inch-text-wrapper');
   const error2Icon = inputControl2.querySelector('.error2-inch-icon-wrapper');
   error2Txt.innerText = "";
   error2Txt.style.cssText = 'display: block;';
   error2Icon.style.cssText = 'transform: scale(0);';
   error2Icon.classList.remove('error-shake');
   successOutline.classList.remove('error-input-border');
   successOutline.classList.add('success-input-border');
};
const setSuccessForm2Price = element => {
   const inputControl2 = element.parentElement;
   const successOutline = element;
   const errorPriceTxt = inputControl2.querySelector('.error-price-text-wrapper');
   const errorPriceIcon = inputControl2.querySelector('.error-price-icon-wrapper');

   errorPriceTxt.innerText = "";
   errorPriceTxt.style.cssText = 'display: block;';
   errorPriceIcon.style.cssText = 'transform: scale(0);';
   errorPriceIcon.classList.remove('error-shake');
   successOutline.classList.remove('error-input-border');
   successOutline.classList.add('success-input-border');
}
// Removes setSuccess styling when validation passes 100%
const setSuccessClearForm2 = element => {
   const inputControl2 = element.parentElement;
   const successOutline = element;
   successOutline.classList.remove('success-input-border');   
};

// CLEAR ALL ERROR AND SUCCESS STYLING
// const setClearReset = element => {
//    const inputControl1 = element.parentElement;
//    const formInputs = element;

//    formInputs.classList.remove('success-input-border', 'error-input-border');   
// };

// ### START VALIDATION CHECK ###
const validateInputsForm2 = () => {
   
   if (select2Width.selectedIndex === 0) {
         setErrorSelect(select2Width, '* Roll width selection required');  
      } else {
         setSuccessForm2Select2(select2Width); 
         // setSuccessClearForm2(select2Width);//clearing success class
      }
   
   for (let i = 0; i < footInputs.length; i++) {
      console.log(footInputs[i].value);
      // let footInput = footInputs[i];
      if (footInputs[i].value === "") {
         
         setErrorFt(footInputs[i], '* Feet required');
      } else {
         setSuccessForm2Ft(footInputs[i]); 
      }
   }  

   for (let i = 0; i < inchInputs.length; i++) {
      console.log(inchInputs[i].value);
      if (inchInputs[i].value === "") {
   
         setErrorInch(inchInputs[i], '* Inch required');
      } else {
         setSuccessForm2Inch(inchInputs[i]); 
      }
   } 
  
   // const inchInputValue = inchInput.value.trim();
   const priceInputValue = priceInput.value.trim();

   if (priceInputValue === '') {
      setErrorPrice(priceInput, '* Price required');
   } else {
      setSuccessForm2Price(priceInput);
      // setSuccessClearForm2(priceInput);//clearing success class
   }
   
   const foot = () => {
      for (let i = 0; i < footInputs.length; i++) {
         console.log(footInputs[i].className);
         if (footInputs[i].classList.contains('error-input-border')) {
           
            return false;
         } else {
            setSuccessForm2Ft(footInputs[i]);//clearing success class
         }
      }
   }
   const inch = () => {
      for (let i = 0; i < inchInputs.length; i++) {
         console.log(inchInputs[i].className);
         if (inchInputs[i].classList.contains('error-input-border')) {
            
            return false;
         } else {
            setSuccessForm2Inch(inchInputs[i]);
         }
      }
   }

   if ( select2Width.selectedIndex === 0 || foot() === false || inch() === false || priceInputValue === "") {

      console.log("All inputs must have value.");
      return false;
   } else {
      console.log("All inputs have a value.");
      setSuccessClearForm2(select2Width);
      // Get all form 2 inputs type=number and clear success styling
      const allNumInputs = form2.querySelectorAll('input[type=number]');
      let allNumInputsArr = Array.from(allNumInputs).forEach(function (allNumInput) {
         setSuccessClearForm2(allNumInput);
      });
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
let cutCounter = 1;
function updateCounter() { 

   cutItem = document.querySelectorAll('.cut-list-item');

   for (let i = 0; i < cutItem.length; i++) {
      cutCounter = cutItem.length ;
   }
   console.log("Cut count = " + cutCounter);
}

function removeCut(ele) {
 
   ele.parentNode.remove();
   updateCounter();
}

/* ### **** ADD NEW CUT REWRITE ### **** ##############################
#######################################################################*/

// Function to add another cut to the form
function addCut() {
   // REWRITE FOR NEW CUT ITEM ########
   // Create a li for the new cut
   let newCutItem = document.createElement('li');
   // Add class to new cut item 
   newCutItem.classList.add('cut-list-item', 'added-cut');
   // Add the necessary html for the new cut
   newCutItem.innerHTML = `
   <input type="number" class="cutLengthFt" name="cut-size-ft" min="0" step="1" value="" placeholder="0" required>
   <span class="measurement-unit measurement-unit-ft">ft</span>

   <div class="error2-ft-text-wrapper"><i>* Feet required</i></div>
   <div class="error2-ft-icon-wrapper"><i class="fas fa-exclamation-circle error2-icon"></i></div>
   <!-- Inch Input -->
   <input type="number" class="cutLengthInch" name="cut-size-in" min="0" max="11" step="1" value="" placeholder="0" required>
   <span class="measurement-unit measurement-unit-in">in</span>

   <div class="error2-inch-text-wrapper"><i>* Inch required</i></div>
   <div class="error2-inch-icon-wrapper"><i class="fas fa-exclamation-circle error2-icon"></i></div>

   <button type="button" class="delete-input-btn" onclick="removeCut(this);"><i class="far fa-trash-alt trash-icon"></i></button>
   `
   // Add the new cut item to the cuts list container (ordered list)
   document.getElementById('cuts-list').appendChild(newCutItem);
   // Run cut counter to cut new number of cuts
   updateCounter();

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

      <p class="total-lf-results">Total length of all cuts = ${totalCutLength}<span class="total-measure-unit-tag">/lf</span>
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

//######################### END PRICE CALC ##################################//



/* Roll Width Multipliers for sqyd
- 6' multiplier = 0.0872
- 10' multiplier = 0.1454
- 12' multiplier = 0.1744
- 15' multiplier = 0.2182
*/
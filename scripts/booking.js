/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let numberOfDays = 0;

const clear = document.getElementById("clear-button");
const fullDayButton = document.getElementById("full");
const halfDayButton = document.getElementById("half");

const finalCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const mondayButton = document.getElementById("monday");
const tuesdayButton = document.getElementById("tuesday");
const wednesdayButton = document.getElementById("wednesday");
const thursdayButton = document.getElementById("thursday");
const fridayButton = document.getElementById("friday");

mondayButton.addEventListener("click", mondayClicked);
tuesdayButton.addEventListener("click", tuesdayClicked);
wednesdayButton.addEventListener("click", wednesdayClicked);
thursdayButton.addEventListener("click", thursdayClicked);
fridayButton.addEventListener("click", fridayClicked);

function mondayClicked() {
        mondayButton.classList.add("clicked");
        numberOfDays++;
        calculate();
}

function tuesdayClicked() {
    tuesdayButton.classList.add("clicked");
    numberOfDays++;
    calculate();
}

function wednesdayClicked() {
    wednesdayButton.classList.add("clicked");
    numberOfDays++;
    calculate();
}

function thursdayClicked() {
    thursdayButton.classList.add("clicked");
    numberOfDays++;
    calculate();
}

function fridayClicked() {
    fridayButton.classList.add("clicked");
    numberOfDays++;
    calculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.



clear.addEventListener("click", clearDays);

function clearDays() {
    mondayButton.classList.remove("clicked");
    tuesdayButton.classList.remove("clicked");
    wednesdayButton.classList.remove("clicked");
    thursdayButton.classList.remove("clicked");
    fridayButton.classList.remove("clicked");

    numberOfDays = 0;

    calculate();
}



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener("click", halfDay);

function halfDay() {
    dailyRate = 20;
    fullDayButton.classList.remove("clicked");
    halfDayButton.classList.add("clicked");
    calculate();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener("click", fullDay);

function fullDay() {
    dailyRate = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    calculate();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    const totalCost = dailyRate * numberOfDays;
    finalCost.innerHTML = totalCost;
}

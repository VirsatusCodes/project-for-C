const startTime = document.querySelector('#start-time');

const endTime = document.querySelector('#end-time');

const firstButton = document.querySelector('#first-button');

const currentHours = document.querySelector('#current-hours');

totalValue = 0;

regEx = /[0-9]?[0-9]\./g;

function timeConverter(a, b) {
    firstNumber = Number((a[0] + a[1]));
    secondNumber = Number((a[2] + a[3]));
    firstValue = (firstNumber * 60) + (secondNumber);

    firstNumber = Number((b[0] + b[1]));
    secondNumber = Number((b[2] + b[3]));
    secondValue = (firstNumber * 60) + (secondNumber);

    value = secondValue - firstValue;
    totalValue += value;
};

function timeWorkedConverter (totalValue) {
   
    hours = totalValue / 60;
    convertedHours = Number(hours.toString().match(regEx));
    minutes =totalValue % 60;
    if (convertedHours === 0 ) convertedHours = hours;
};

firstButton.addEventListener('click', () =>{    
    
    if (startTime.value > 2400 || endTime.value > 2400) return;
    else {
    timeConverter(startTime.value, endTime.value);
    timeWorkedConverter (totalValue);
    currentHours.textContent = `you have worked ${convertedHours} hours and ${minutes} minutes.`;
    startTime.value = '';
    endTime.value = ''; 
    };
});

/* First layer is complete!!! */

const hoursWorked = document.querySelector('#hours-worked');

const hourlyWage = document.querySelector('#hourly-wage');

const secondButton = document.querySelector('#second-button');

const totalPay = document.querySelector('#total-pay');

function wagesCalculator(a, b) {
    otherFirstNumber = Number((a[0] + a[1]));
    otherSecondNumber = Number((a[2] + a[3]));

    totalNumber = otherFirstNumber + (otherSecondNumber / 60);

   pay = totalNumber * b;
   
};

secondButton.addEventListener('click', () => {
    wagesCalculator(hoursWorked.value, hourlyWage.value);
    totalPay.textContent = `you have earned $${pay}`;
});

/* Second layer is complete! */

const totalTips = document.querySelector('#total-tips');

const serviceValue = document.querySelector('#service-value');

const serviceTotal = document.querySelector('#total-service-value')

const thirdButton = document.querySelector('#third-button');

const tipsForYou = document.querySelector('#tips-for-you');

const toGetYourPercentageOfValue = 100;



thirdButton.addEventListener('click', () => {
    tipsForYou.textContent = `$ ${toGetYourPercentageOfValue / serviceTotal.value * serviceValue.value / toGetYourPercentageOfValue * totalTips.value}`;
});

/* completed yay */
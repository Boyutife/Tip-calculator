const bill = document.getElementById('bill');
const tipOptions = document.querySelectorAll('.tip-options_btn');
const tipOptionCustom = document.getElementById('tip-options_input');
const numPeople = document.getElementById('num-person');
const tipAmountPerPerson = document.querySelector('.tip-amount-per-person');
const totalAmountPerPerson = document.querySelector('.total-amount-per-person');

let billValue;
let tipValue;
let numPeopleValue;
let isValid = false;

bill.addEventListener('input', (e) => {
  let value = parseFloat(e.target.value);
  let error = document.querySelector('.bill-error');
  let inputError = document.querySelector('.bill-input-group');
  if (isNaN(value) || value < 0.1) {
    bill.value = '';
    error.classList.remove('hidden');
    inputError.style.border = '1px solid #f1b038';
  } else {
    error.classList.add('hidden');
    inputError.style.border = 'none';
    billValue = value;
    checkAndCalculate();
  }
});

numPeople.addEventListener('input', (e) => {
  let value = parseFloat(e.target.value);
  let error = document.querySelector('.person-error');
  let inputError = document.querySelector('.person-input-group');
  if (isNaN(value) || value < 0.1) {
    numPeople.value = '';
    error.classList.remove('hidden');
    inputError.style.border = '1px solid #f1b038';
  } else {
    error.classList.add('hidden');
    inputError.style.border = 'none';
    numPeopleValue = value;
    checkAndCalculate();
  }
});

tipOptions.forEach((tip) => {
  tip.addEventListener('click', (e) => {
    let value = e.target.innerText;
    value = value = value.slice(0, 3);
    let valueNum = parseFloat(value.replace('%', '')) / 100;
    tipValue = parseFloat(valueNum.toFixed(2));
    tipOptions.forEach((tip) => {
      tip.classList.remove('choice');
    });
    e.target.classList.add('choice');
    tipOptionCustom.value = '';
    checkAndCalculate();
  });
});

tipOptionCustom.addEventListener('input', (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value) && value >= 0) {
    tipValue = value / 100;
    tipOptions.forEach((t) => t.classList.remove('choice'));
    checkAndCalculate();
  }
});

function cal() {
  let tipPerPerson = (billValue * tipValue) / numPeopleValue;
  tipAmountPerPerson.innerText = `$${tipPerPerson.toFixed(2)}`;
  let totalPerPerson = billValue / numPeopleValue + tipPerPerson;
  totalAmountPerPerson.innerText = `$${totalPerPerson.toFixed(2)}`;
}

function checkAndCalculate() {
  if (billValue && tipValue && numPeopleValue) {
    cal();
  } else {
    console.log('Not valid');
  }
}

const resetBtn = document.querySelector('.results_reset-btn');

resetBtn.addEventListener('click', () => {
  bill.value = '';
  numPeople.value = '';
  tipOptionCustom.value = '';
  tipAmountPerPerson.innerText = '$0.00';
  totalAmountPerPerson.innerText = '$0.00';

  billValue = null;
  tipValue = null;
  numPeopleValue = null;

  document
    .querySelectorAll('.hidden')
    .forEach((el) => el.classList.add('hidden'));
  document
    .querySelectorAll('.input-group')
    .forEach((el) => (el.style.border = 'none'));
  tipOptions.forEach((t) => t.classList.remove('choice'));
});

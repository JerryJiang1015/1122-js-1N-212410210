const calculateBtn = document.querySelector('#calculate');
const bmiResult = document.querySelector('#result');
const suggest = document.querySelector('#suggest');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');

function InputWeight() {
  const w = parseFloat(weight.value);
  console.log('W', w);
  return w;
}
console.log('InputWeight', InputWeight());
// const InputWeight = InputWeight();

function InputHeight() {
  const h = parseFloat(height.value);
  console.log('h', h);
  return h;
}
console.log('InputHeight', InputHeight());
// const InputHeight = InputHeight() / 100;

function bmiCalc_10(InputHeight, InputWeight) {
  return InputWeight / (InputHeight * InputHeight);
}
function bmi_normal_low(InputHeight) {
  return 18.5 * (InputHeight * InputHeight);
}
function bmi_normal_high(InputHeight) {
  return 24 * (InputHeight * InputHeight);
}

// function bmiCalcResult_10(InputHeight, InputWeight) {
//   let bmi = bmiCalc_10(InputHeight, InputWeight).toFixed(2);
// }

// function bmiDataCalc_10(data) {
//   data.forEach(function (item) {
//     bmiCalcResult_10(item.InputHeight, item.InputWeight);
//   });
// }

////////////////////////////////////////////////////////////////////
const LowerReturn = (bmiResult) => {
  const InputWeight = InputWeight();
  const InputHeight = InputHeight() / 100;
  const BMI = InputWeight / (InputHeight * InputHeight);
  let LowerReturn = bmiResult
    .map((Kg) => {
      return `
      Your BMI is ${BMI} which is ${Kg} kg lower than normal
     `;
    })
    .join('');
  bmiResult.innerHTML = LowerReturn;
};

const higherReturn = (bmiResult) => {
  const InputWeight = InputWeight();
  const InputHeight = InputHeight() / 100;
  const BMI = InputWeight / (InputHeight * InputHeight);
  let higherReturn = bmiResult
    .map((Kg) => {
      return `
      Your BMI is ${BMI} which is ${Kg} kg higher than normal
     `;
    })
    .join('');
  bmiResult.innerHTML = higherReturn;
};

const normalReturn = (bmiResult) => {
  const InputWeight = InputWeight();
  const InputHeight = InputHeight() / 100;
  const BMI = InputWeight / (InputHeight * InputHeight);
  let normalReturn = bmiResult
    .map((Kg) => {
      return `
      Your BMI is ${BMI} which is normal
     `;
    })
    .join('');
  bmiResult.innerHTML = normalReturn;
};

function bmiCalcSuggestion_10(InputHeight, InputWeight) {
  let bmi = InputWeight / (InputHeight * InputHeight);
  if (bmi < 18.5) {
    let normal_low = bmi_normal_low(InputHeight);
    LowerReturn(normal_low);
    document.addEventListener('DOMContentLoaded', () => {
      LowerReturn(bmiResult);
    });
  } else if (bmi < 24) {
    normalReturn(bmiResult);
    document.addEventListener('DOMContentLoaded', () => {
      normalReturn(bmiResult);
    });
  } else {
    let normal_high = bmi_normal_high(InputHeight);
    higherReturn(normal_high);
    document.addEventListener('DOMContentLoaded', () => {
      higherReturn(bmiResult);
    });
  }
}
function bmiDataSuggestion_10(data) {
  data.forEach(function (item) {
    bmiCalcSuggestion_10(item.InputHeight, item.InputWeight);
  });
}

weight.addEventListener('click', C);
height.addEventListener('click', F);

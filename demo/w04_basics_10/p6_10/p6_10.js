import { bmi_data } from './data_10.js';

let bmi_data_10 = bmi_data;

console.log('bmi_data', bmi_data_10);

function bmiCalc_10(height, weight) {
  return weight / (height * height);
}

function bmi_normal_low(height) {
  return 18.5 * height * height;
}

function bmi_normal_high(height) {
  return 24 * height * height;
}

function bmiCalcResult_10(height, weight) {
  let bmi = bmiCalc_10(height, weight).toFixed(2);
  console.log(`For (h,w) = (${height},${weight}), the BMI = ${bmi}`);
}

function bmiDataCalc_10(data) {
  data.forEach(function (item) {
    bmiCalcResult_10(item.height, item.weight);
  });
}

// bmiDataCalc_10(bmi_data_10);

////////////////////////////////////////////////////////////////////

function bmiCalcSuggestion_10(height, weight) {
  let bmi = bmiCalc_10(height, weight).toFixed(2);
  if (bmi < 18.5) {
    let normal_low = bmi_normal_low(height);
    console.log(
      `For (h,w) = (${height},${weight}), the BMI = ${bmi} which is ${(
        normal_low - weight
      ).toFixed(2)} kg lower than normal`
    );
  } else if (bmi < 24) {
    console.log(
      `For (h,w) = (${height},${weight}), the BMI = ${bmi} which is normal`
    );
  } else {
    let normal_high = bmi_normal_high(height);
    console.log(
      `For (h,w) = (${height},${weight}), the BMI = ${bmi} which is ${(
        weight - normal_high
      ).toFixed(2)} kg higher than normal`
    );
  }
}
function bmiDataSuggestion_10(data) {
  data.forEach(function (item) {
    bmiCalcSuggestion_10(item.height, item.weight);
  });
}
// bmiCalcResult_10(1.75, 55);
// bmiCalcResult_10(1.75, 70);
// bmiCalcResult_10(1.75, 85);
bmiDataSuggestion_10(bmi_data_10);

console.log("Hello world");

function calculator(theCalculation) {
  return theCalculation();
}

function ConvertCToF(degreeNumber) {
  return calculator(() => {
    // (0°C × 9/5) + 32 = 32°F
    return (degreeNumber * 9) / 5 + 32;
  });
}

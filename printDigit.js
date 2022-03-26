function printDigit(num) {
    num = num +"";
    return num.split("").reverse().join("");
  }
  console.log(Number(printDigit(455692427)));
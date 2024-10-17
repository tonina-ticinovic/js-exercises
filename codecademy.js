const printAllEvenNumbers = (numbers) => {
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      console.log(number);
    }
  });
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// printAllEvenNumbers(numbers);

const multiplicationTable = (numbers) => {
  numbers.forEach((number) => {
    let result = "";
    for (let i = 1; i <= numbers.length; i++) {
      result += `${i === 1 ? "|" : ""} ${number * i} |`;
    }
    console.log(result);
  });
};

// multiplicationTable(numbers);

const kilometersToMiles = (kilometers) => {
  return kilometers * 0.621371;
};

const milesToKilometers = (miles) => {
  return miles * 1.60934;
};

const sumOfNumbers = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;

  // better way
  // return numbers.reduce((acc, number) => acc + number, 0);
};

const revertArray = (array) => {
  return array.reverse();
};

const sortArray = (array) => {
  return array.sort((a, b) => a - b);
};

const filterOutNegativeNumbers = (numbers) => {
  return numbers.filter((num) => num >= 0);
};

const removeSpaces = (word) => {
  return word.replace(/ /g, "");
};

// console.log(removeSpaces(" Hel lo Wo rld "));

const isDivisibleBy = (number, divisor) => {
  return number % divisor === 0;
};

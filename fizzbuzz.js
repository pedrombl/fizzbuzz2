function divisibleOrIncludes(number, by) {
  const numberAsString = number.toString();
  const includedNumber = by.toString();

  return (number % by) == 0 || numberAsString.includes(includedNumber);
}

function fizzbuzz(input) {
  var response = ''; 

  if (divisibleOrIncludes(input, 3)) {
    response += 'Fizz';
  }

  if (divisibleOrIncludes(input, 5)) {
    response += 'Buzz';
  }

  return response || input.toString();
}

module.exports = fizzbuzz;

function doubleAll(numbers) {
  var result = []
  result = numbers.map(num => num * 2);
    // result.push(numbers[i] * 2)

  return result;
}

//console.log('multiply each element in array', JSON.stringify(doubleAll([1,2,3]))===JSON.stringify([2,4,6]));

module.exports = doubleAll

const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const OptionHelper = (options, answer) => {
  var returnArray = [];
  returnArray.push(myDecode(answer));
  options.map((value, index) => {
    returnArray.push(myDecode(value));
    return true;
  });
  return shuffle(returnArray);
};

export const getPercentage = (left, right) => {
  return Math.round((left * 100) / right);
};
export const myDecode = (value) => {
  return decodeURIComponent(value);
};

export const encode = function(input) {
  let arr = input.split(""),
    result = "",
    count = 0;

  arr.forEach((val, index) => {
    if (index !== 0 && val !== arr[index - 1]) {
      result = constructEncoding(result, count, arr[index - 1]);
      count = 1;
    } else {
      count++;
    }

    if (index == arr.length - 1) {
      count = val !== arr[index - 1] ? 1 : count;
      result = constructEncoding(result, count, arr[index]);
    }
  });

  return result;
};

function constructEncoding(result, count, character) {
  return count > 1 ? result + count + character : result + character;
}

export const decode = function(input) {
  let arr = input.split(/([0-9]*)/),
    result = "";

  arr.forEach((val, index) => {
    if (val) {
      if (parseInt(val)) {
        result = constructDecodedString(result, val, arr[index + 1]);
      } else if (!parseInt(arr[index - 1])) {
        result = constructDecodedString(result, 1, val);
      }
    }
  });

  return result;
};

function constructDecodedString(result, count, character) {
  for (var i = 0; i < count; i++) {
    result += character;
  }
  return result;
}

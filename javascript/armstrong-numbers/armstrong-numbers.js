export const validate = function(input) {
    let digits = input.toString().split(""),
        length = digits.length,
        result = 0;

    digits.forEach(digit => {
        result += Math.pow(parseInt(digit), length);
    });

    return result === input;
};

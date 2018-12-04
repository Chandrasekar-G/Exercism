const RNA_MAPPING = {
    "G" : "C",
    "C" : "G",
    "T" : "A",
    "A" : "U"
};

export const toRna = function(input) {
    let arr = input.split(""),
        result = "";

    arr.forEach(dna => {
        result += RNA_MAPPING[dna];
    });

    return result;
};
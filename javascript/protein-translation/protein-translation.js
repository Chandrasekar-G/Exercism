const CODON_PROTEIN_MAP = [
  { Codon: ["AUG"], Protein: "Methionine" },
  { Codon: ["UUU", "UUC"], Protein: "Phenylalanine" },
  { Codon: ["UUA", "UUG"], Protein: "Leucine" },
  { Codon: ["UCU", "UCC", "UCA", "UCG"], Protein: "Serine" },
  { Codon: ["UAU", "UAC"], Protein: "Tyrosine" },
  { Codon: ["UGU", "UGC"], Protein: "Cysteine" },
  { Codon: ["UGG"], Protein: "Tryptophan" },
  { Codon: ["UAA", "UAG", "UGA"], Protein: "STOP" }
];

const translate = function(protein) {
  if (!protein) return [];
  
  let sequence = protein.match(/.{3}/g);
  let result = [];
  
  sequence.map(codon => {
    return CODON_PROTEIN_MAP.forEach(inputCodon => {
      if (inputCodon.Codon.includes(codon)) {
        result.push(inputCodon.Protein);
      }
    });
  });

  if (result.includes("STOP")) {
    result.length = result.indexOf("STOP");
  } else {
    if (result.length != sequence.length) throw new Error("Invalid codon");
  }
  return result;
};

export default translate;

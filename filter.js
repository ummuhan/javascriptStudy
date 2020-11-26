
const bitkiler = [
    { adi: "muz", tur: "meyve" },
    { adi: "elma", tur: "meyve" },
    { adi: "kereviz", tur: "sebze" },
    { adi: "avokado", tur: "sebze" },
    { adi: "armut", tur: "meyve" },
];
//Filter yapısı sayesinde istediğimiz verileri istediğimiz şekilde çekebilmekteyiz.


const meyveler = bitkiler.filter(function (bitki) {
    return bitki.tur === "meyve";
});

console.log(meyveler);

const sebzeler = bitkiler.filter((bitki) => bitki.tur === "sebze");

console.log(sebzeler);
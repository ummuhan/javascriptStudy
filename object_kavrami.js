
let furkan = {
    adi: "Furkan",
    soyadi: "Kulaksız",
    yasi: 26,
    evliMi: false,
    meslek: "Mühendis",
}

console.log(furkan);
console.log(furkan.evliMi);

let Demet = {
    adi: "Demet",
    sayadi: "Sozen",
    dogumTarihi: 1982,
    yasiHesapla: function () {
        this.yasi = 2020 - this.dogumTarihi;
    }


}
Demet.yasiHesapla();

console.log(Demet);
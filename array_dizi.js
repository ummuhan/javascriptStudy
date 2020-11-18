
let Arabalar = [];
//Dizleri bu şekilde tanımlayabilmekteyiz.

let Ogrenciler = ["Ayşe", "Ahmet", "Fatma", "Ayça"];

for (let i = 0; i < Ogrenciler.length; i++) {
    console.log(Ogrenciler[i]);
}
//Dizi yapımza eleman ekleme işlemi yapabilmekteyiz.
Ogrenciler[4] = "Ümmühan";


Ogrenciler[5] = "Furkan";

for (let ogrenci of Ogrenciler) {
    console.log(ogrenci);
}

let Ogrenci = ["Furkan", "22", "Erkek", "Bilgisayar mühendislik öğrencisi"]

console.log(`Ogrenci: ${Ogrenci}`);
console.log(Ogrenci);
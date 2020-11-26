
// let dizi = [4, 5, 6];
// const yeniDizi = dizi.map(function (sayi) {

//     return sayi * 2;
// }
// )
// console.log(dizi);
// console.log(yeniDizi);
// //Bu yapı sayesinde asıl diziye değişiklik yapılmadan elemanlarımızda işlem yapar ve sonuç olrak bunu  döner. 


const insanlar = [
    { adi: "Ümmühan", soyad: "öksüz" },
    { adi: "Furkan", soyad: "Kulaksız" },
    { adi: "Sevgi", soyad: "Öksüz" },
];
//Burada dizi içerisinde obje yapıları oluşturmuş bulunmaktayız.

const yeniInsanlar = insanlar.map((eleman) =>
    eleman.adi + " " + eleman.soyad
);
console.log(yeniInsanlar);

//Bu alanda ise isim ve soyadlar ile ismin tamamını oluşturarak kullnıcıya göstermiş olduk.

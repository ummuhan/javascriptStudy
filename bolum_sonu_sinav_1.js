// 1.soru
//Verilen saniye değerini dakika ve saniye olarak yazdıran program.


let tutulanSaniye = prompt("Saniye değeri giriniz");

let intSaniye = parseInt(tutulanSaniye);

dakika = intSaniye / 60;
saniye = intSaniye % 60;
console.log(`${dakika} dakika ${saniye} saniye`);


// 2.soru
//Fahrenheit olarak verilen değeri celcius olarak yazıran program
//celcius=5/9*(fahrenheit-32)
let girilenDeger = prompt("Lütfen fahrenheit değeri giriniz", "100");
let fahrenheitDegeri = parseInt(girilenDeger);
let celciusDegeri = 5 / 9 * (fahrenheitDegeri - 32);
console.log(celciusDegeri.toFixed(3));

//3.soru

//Bir yılın artık yıl olup olmadığını hesaplayın

//Bir yılın artık yıl olması için ya 400 ile modu 0 olmalı ya 4 ile modu 0 olmalı ve 100 ile modu sıfır olmamalı
//4100 false değer vermeli


let yil = parseInt(prompt("Lütfen yıl değeri giriniz.", "2020"));

let artikMi = ((yil % 400 == 0) || (yil % 4 == 0) && (yil % 100 != 0))

console.log(`Girilen yıl artık yıl mı? ${artikMi}`);



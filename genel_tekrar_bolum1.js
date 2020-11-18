

// 1.soru

//Klavyeden girilen 3 sayının ortalamsını alan kodu yazınız.

// let sayi1 = parseInt(prompt("Birinci sayıyı girniz.", "10"));
// let sayi2 = parseInt(prompt("Birinci sayıyı girniz.", "10"));
// let sayi3 = parseInt(prompt("Birinci sayıyı girniz.", "10"));

// let ortalama = Math.floor((sayi1 + sayi2 + sayi3) / 3);

// console.log(`Ortalama değer= ${ortalama}`);




// 2. soru

//Klavyeden kenarları verilen üçgenin çesşidini veren kodu yazınız

// let kenar1 = parseInt(prompt("Birinci sayıyı girniz.", "10"));
// let kenar2 = parseInt(prompt("Birinci sayıyı girniz.", "10"));
// let kenar3 = parseInt(prompt("Birinci sayıyı girniz.", "10"));

// if (kenar1 == kenar2 && kenar2 == kenar3) {
//     console.log("Eşit kenar üçgen");
// }
// else if ((kenar1 == kenar2 && kenar2 != kenar3) || (kenar3 == kenar1 && kenar1 != kenar2) || (kenar3 == kenar2 && kenar3 != kenar1)) {
//     console.log("İkizkenar üçgen");
// }
// else {
//     console.log("Çeşitkenar üçgen");
// }




// 3.soru

//Klavyeden girilen değerlere göre öğrencinin geçip kalma durumunu söyleyiniz.(Vizenin 100'de 40'ı finalin 100'de 60'ı alınacaktır.Geçme notu 50.)

// let vize = parseInt(prompt("Lütfen vize notunuzu giriniz.", "100"));
// let final = parseInt(prompt("Lütfen final notunuzu giriniz.", "100"));

// let gecmeDurumu = (vize * 40 / 100) + (final * 60 / 100);
// if (gecmeDurumu >= 50) {
//     console.log("Tebrikler dersi geçtiniz.");
// }
// else {
//     console.log("Kaldınız.");
// }




//4.soru

//Kendi adınızı ekrana 5 kere yazdıran uygulamayı tüm döngülerde yazınız.

// console.log("For dögüsü:");
// for (let i = 0; i < 5; i++) {
//     console.log("Ümmühan");
// }
// console.log("While döngüsü:");
// let a = 0;
// while (a < 5) {
//     console.log("Ümmühan");
// a++;
// }
// console.log("Do while döngüsü:");
// let b = 0;
// do {
//     log("Ümmühan");
// b++;
// } while (b  <5)




//5.soru

// 1 den 100 e kadar olan sayıların toplamını bulan uygulamayı yazınız.
// let toplam = 0;
// let i;
// for (i = 0; i < 101; i++) {
//     toplam += i;
//     console.log(`Toplam değer ${toplam}`);
// }




//6.soru

//1 den 10 a kadar olan sayıları aralarında virgül koyarak yazdırın.

// let yazdirilacakMetin = "";

// for (let i = 1; i <= 10; i++) {
//     if (i != 10) {
//         yazdirilacakMetin = yazdirilacakMetin + i + " , ";
//     }
//     else {
//         yazdirilacakMetin = yazdirilacakMetin + i;
//     }


// }
// console.log(yazdirilacakMetin)





//7.soru

//Klavyeden girilen bir sayının faktoriyelini alan uygulamayı yazınız.

// let sayi = parseInt(prompt("Faktoriyelini almak isteiğiniz sayıyı giriniz."));
// let sonuc = 1;
// for (let i = 1; i < sayi + 1; i++) {
//     sonuc = sonuc * i;
// }
// console.log(`Faktoriyel sonucu= ${sonuc}`);





// 8.soru
//Aşağıda tanımı verilen fonksiyonu klavyeden girilen x ve değerleri için bulunuz.

//x>0,y<0 ise f(x,y)=4x+2y+4
//x>0, y=0 ise f(x,y)=2x-y+3
//x<0,y>0 ise f(x,y)=3x+4y+3


// let x = parseInt(prompt("Lütfen x değerini giriniz.", "10"));
// let y = parseInt(prompt("Lütfen y değerini giriniz.", "10"));
// let sonuc = 0;
// if (x > 0) {
//     if (y < 0) {
//         sonuc = 4 * x + 2 * y + 4;
//         console.log(`Sonuc=${sonuc}`);

//     }
//     else if (y = 0) {
//         sonuc = 2 * x - y + 3;
//         console.log(`Sonuc=${sonuc}`);
//     }

// } else if (x < 0) {
//     if (y > 0) {
//         sonuc = 3 * x + 4 * y + 3;
//         console.log(`Sonuc=${sonuc}`);

//     }
// }




// 9.soru

//100 lük sistemde verilen notları harfli sisteme çeviren uygulamayı yazınız.

// let not = parseInt(prompt("Lütfen notunuzu giriniz:"));
// let sinir = Math.floor(not / 10);

// switch (sinir) {
//     case 9:
//         console.log("AA");
//         break;
//     case 8:
//         console.log("BA");
//         break;
//     case 7:
//         console.log("BB");
//         break;
//     case 6:
//         console.log("CB");
//         break;
//     case 5:
//         console.log("CC");
//         break;
//     case 4:
//         console.log("DD");
//         break;
//     default:
//         console.log("Kaldınız");
// }



// 10.soru

//Çarpım tablosunu oluşturunuz.


// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(`${i} * ${j} =${i * j}` );

//     }

// }




// 11.soru

//Sistemin ürettiği sayıyı kullanıcı bilmeye çalışsın ve bizde ona artır azalt şeklinde bilgiler verelim .Kullanıcı bilene kadar kullanıcıya değeri soralım.

// let sistemSayi = Math.floor(Math.random() * 100);


// let sayi = parseInt(prompt("Hangi sayıdır?"));
// while (sistemSayi != sayi) {

//     if (sayi < sistemSayi) {
//         sayi = parseInt(prompt("Arttır"));

//     }
//     else {
//         sayi = parseInt(prompt("Azalt"));

//     }

// }

// console.log("Tebrikler sayıyı buldunuz");





// 12.soru

//Kullanıcının girdiği 2 sayının ebobunu bulan uygulamayı yazınız.

// let sayi1 = parseInt(prompt("Birinci sayıyı giriniz."));
// let sayi2 = parseInt(prompt("İkinci sayıyı giriniz."));
// let temp;
// if (sayi1 > sayi2) {
//     temp = sayi2;
// }
// else if (sayi2 > sayi1) {
//     temp = sayi1;
// }
// else {
//     temp = sayi1;
// }

// for (let i = temp; i > 0; i--) {
//     if (sayi1 % i == 0 && sayi2 % i == 0) {
//         console.log(`Ebob değeri ${i}`);
//         break;
//     }
// }





//13.soru

//Kullanıcıdan aldığımız sayıya kadar olan tüm asal sayıları yazdıran program.

// let sayi = parseInt(prompt("Lütfen sayiyi giriniz."));
// let sayac = 0;
// for (let i = 2; i < sayi; i++) {
//     for (let j = 2; j < i - 1; j++) {
//         if()
//     }
//     if (sayac == 0) {
//         console.log(i);
//     }
// }


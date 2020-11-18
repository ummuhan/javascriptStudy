//Math.random() ile random olarak o dahil 1hariç random sayı üretmektedir. Örneğin 0.56 .Bu değeri istediğimiz aralığın üst sınırı ile çarparsak o aralıkta değer üretmiş oluruz.
//Üretilen sayı ondalıklı olabilr bunu tam sayıya çevirmek için Math.floor() kullanılmaktadır.

//Piyango uygulaması yapalım sistem 2 basamklı bir sayı üretmeli kullanıcı da bunu tahmin etmeye çalışmalıdır.

//Eğer kullanıcı sayıyı tam olarak bilirse 10000 tl 
//Eğer kullanıcı sayının basamaklarını bilirse 5000tl
//Eğer kullanıcı sadece 1 basamağı bilirse 1000 tl kazanacaktır.



let sansliSayi = (Math.random() * 90) + 10;
let sisteminUrettigiSayi = Math.floor(sansliSayi);
console.log(`Sistemin ürettiği sayı ${sisteminUrettigiSayi}`);

let kullaniciTahmini = parseInt(prompt("Tahmin ettiğiniz sayiyi giriniz."), "10");
console.log(`Kullanıcının girdiği sayı ${kullaniciTahmini}`);

//Birler ve onlar basamağını çevirmeliyiz

let sistemBirler = sisteminUrettigiSayi % 10;
// console.log(`Sistem birler basamağı ${sistemBirler}`);
let sistemOnlar = Math.floor(sisteminUrettigiSayi / 10);

// console.log(`Sistem onlar basamağı ${sistemOnlar}`);

let kullaniciBirler = kullaniciTahmini % 10;
// console.log(`Kullanıcı tahmini birler ${kullaniciBirler}`);
let kullaniciOnlar = Math.floor(kullaniciTahmini / 10);
// console.log(`Kullanici tahmini onlar ${kullaniciOnlar}`);

if(kullaniciTahmini==sisteminUrettigiSayi){
    console.log("Tebrikler doğru tahmin 10000 tl kazandınız");
}
else if(kullaniciBirler==sistemOnlar&& kullaniciOnlar==sistemBirler){
    console.log("Sayıyı ters olarak bildiniz. 5000 tl kazandınız.");
}
else if(kullaniciBirler==sistemBirler||kullaniciOnlar==sistemOnlar||sistemBirler==kullaniciOnlar||sistemOnlar==kullaniciBirler){
    console.log("Sadece bir basamağı doğru tahmin ettiniz. Tebrikler 1000 lira kazandınız.");
}
else{
    console.log("Üzgünüm yanlış tahmin.");
}
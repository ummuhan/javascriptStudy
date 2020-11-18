
console.error("Yanlış veri girişi.");
//Console alanının renklenerek hata olarak göstermesini sağlamaktadır.
console.warn("Uyarı aldınız");
//Console alanının renklenerek uyarı olarak gösterilmesini sağlamaktadır.
//alert("Hata aldınız");

//Console alnında bilgi vermek amaçlı bir card görülmesini sağlar.
console.table({ isim: "Ümmühan", soyad: "Öksüz" });
//Nesnelesimiz ile bir tabloyu console içerisinde göstermemizi sağlar.

console.time("id");
//time blokları arasında yazmış olduğumuz kodların ne kadar sürede işleme alındığını öğrenmemizi sağlar.
console.log("Ümmühan Öksüz");
console.log("Ümmühan Öksüz");
console.log("Ümmühan Öksüz");
console.log("Ümmühan Öksüz");
console.log("Ümmühan Öksüz");
console.log("Ümmühan Öksüz");
console.log("Ümmühan Öksüz");
console.timeEnd("id");
console.clear();
//Tüm console içeriğinin temizlenmesini sağlar.
let numara = prompt("Lütfen bir numara giriniz.");
//Kullanıcıdan veri almamızı sağlar. Bu degeri değişkene atarak kullanabilmekteyiz.
console.log(numara);
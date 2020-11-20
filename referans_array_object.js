let renk = "kırmızı";
let yeniRenk = renk;
renk = "mavi";
console.log(renk);
console.log(yeniRenk);
//Burada değişkende yaptığımız değişiklik atama yapılan yeniRenk değişkenini etkilemez bunun  sebebi direkt olarak içeriğin değişkene atanmasıdır.

let dizim = [1, 2, 3, 4, 5];
let yeniDizim = dizim;
dizim.push(90);
console.log(dizim.toString());
console.log(yeniDizim.toString());
//Burada ise eklenen eleman direkt olarak kopyalanan diziyi de etkilemektedir.Bunun sebebi ise referans tip olmasıdır. Referans tipler atama yapıldığında değeri değil adresini tutar.Böylece tekrar tanımlama yapıyor gibi bir tanımlama olmadığı sürece bu yapı bozulmaz ancak bozulursa dizimiz yeni adrese geçeceğinden yapı bozulur.

//Aynı durum objectler için de geçerlidir. Onlarda referans tiptir.

let ogrenci = {
    ad: "Ayşe",
    soyad: "Yılmaz"
}

let yeniOgrenci = ogrenci;
ogrenci.ad="Zeynep";
console.log(ogrenci),
    console.log(yeniOgrenci);
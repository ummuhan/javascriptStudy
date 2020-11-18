selamVer();

function selamVer() {
    console.log("Merhaba");

}

let toplam = ikiSayiyiToplama(20, 40);
console.log(`Toplam ${toplam}`);
function ikiSayiyiToplama(sayi1, sayi2) {
    let toplam = sayi1 + sayi2;
    return toplam;
}


let kenar1 = parseInt(prompt("Birinci kenarı giriniz."),);
let kenar2 = parseInt(prompt("İkinci kenarı giriniz."));


let alan = alaniniBul(kenar1, kenar2);
console.log(`Alan=${alan}`);

function alaniniBul(kenar1, kenar2) {

    let alan = kenar1 * kenar2;
    return alan;
}


const ikiIleCarp = function (sayi) {
    return sayi * 2;
}

const ikiIleTopla = function (sayi) {
    return sayi + 2;


}

const ucIleCarp = function (sayi) {
    return sayi * 3;
}



const diziIslemleri = function (dizi, hesapla) {
    const gecici = [];
    for (let i = 0; i < dizi.length; i++) {
        gecici[i]= hesapla(dizi[i]);

    }
    console.log(gecici);
}
let dizi = [1, 2, 3, 4, 5];
diziIslemleri(dizi, ucIleCarp)


let dizim = [1, 2, 3, 4];

dizim.push(10);
//Dizinin sonuna elaman ekler.

console.log(dizim.toString());

dizim.pop();
//Dizinin sonundan elaman çıkarır.
console.log(dizim.toString());

dizim.shift();
//Dizinin başından elaman çıkarır.
console.log(dizim.toString());

dizim.unshift(90);
dizim.unshift(13);

//Dizinin başına elaman ekler.
console.log(dizim.toString());

console.log(dizim.join("*"));
//Dizideki virgüller yerine * yıldız işareti koymamızı sağladı.

let yeniDizi = dizim.slice(0, 3);
//Diziden ayrılacak bir kısımla yeni dizi oluşturur. Eski dizi bu durumdan etkilenmez.

console.log(yeniDizi.toString());

console.log(dizim.reverse().toString());
//Diziyi tersten yazdırmamızı sağlar.
delete dizim[2];
//Diziden istenilen elemanı siler.
console.log(dizim.toString());

let birlesikDizi = dizim.concat(yeniDizi);
console.log(birlesikDizi.toString());

dizim.splice(0, 0, 2, 3, 4, 5, 6, 7);
//İstenilen kadar eleman silmemizi ve eklememizi sağlar.
console.log(dizim.toString());
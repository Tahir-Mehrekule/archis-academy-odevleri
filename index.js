let number1 = parseFloat(prompt("İlk sayıyı girin:"));
let number2 = parseFloat(prompt("İkinci sayıyı girin:"));
let sum = number1 + number2;
console.log(`toplam: ${number1} + ${number2} = ${sum}`);

let dif = number1 - number2;
console.log(`fark: ${number1} - ${number2} = ${dif}`);

let product = number1 * number2;
console.log(`çarpım: ${number1} * ${number2} = ${product}`);

let quotient;
if (number2 !== 0) {
    quotient = number1 / number2;
    console.log(`bölüm = ${number1} - ${number2} = ${quotient}`);
}
else {
    console.log("Sıfıra bölünemez.");
}

let name = (prompt("lütfen adınızı giriniz ;"))
let genel =(`Merhaba, ${name} cümlesinde ki karakter sayısı; `);
let  CharacterCount = genel.length;
console.log(genel + CharacterCount);

let number3 = parseFloat(prompt("Lütfen bir sayı giriniz:"));
if (isNaN(number3)) {
    console.log("Geçerli bir sayı girmediniz.");
} else if (number3 > 0) {
    console.log(`${number3} sayısı pozitiftir.`);
} else if (number3 < 0) {
    console.log(`${number3} sayısı negatiftir.`);
} else {
    console.log(`${number3} sayısı sıfırdır.`);
}


let number4 = parseFloat(prompt("Lütfen başka bir sayı giriniz:"));
if (isNaN(number3) || isNaN(number4)) {
    console.log("Geçerli bir sayı girmediniz.");
} else {
    if (number3 < number4) {
        console.log(`${number4} sayısı ${number3} sayısından büyüktür.`);
    } else if (number3 > number4) {
        console.log(`${number4} sayısı ${number3} sayısından küçüktür.`);
    } else {
        console.log(`${number4} sayısı ${number3} sayısına eşittir.`);
    }
}

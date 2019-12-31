// 1.Problem cözümü

let sayilar = [2, 2, 3, 3, 5, 5, 9, 9, 10, 11, 12];
let tekrarEdenler = parametre =>
    parametre.filter((item, index) =>
        parametre.indexOf(item) != index);
console.log(tekrarEdenler(sayilar));


// 2. problem cözümü

let myArray = ['araba', 'kitap', 5, 9, 10];
let deleteItem = 9;

let newArray = myArray.filter(parametre => parametre != deleteItem);
console.log(newArray)


// 3. problem cozumu

let highNumbers = [45, 54, 73, 82, 96, 105, 10]
let forthMax = highNumbers.sort((a, b) => b - a)[3]
console.log(forthMax)
    // First

let frameworks = ['AngularJS', 'jQuery'];
frameworks.unshift('Backbone.js');
frameworks.push('ReactJS', 'Vue.js');
frameworks.splice(1, 0, 'CommonJS');
frameworks.splice(frameworks.indexOf('jQuery'), 1);
console.log('jQuery is extra here');
console.log(frameworks);

    // Second

function removeNegativeElements(arr) {
    return arr.filter(el => (typeof(el) === 'string') ? el : el > 0);
}
let result = removeNegativeElements([-9, 2, 3, 0, -28, 'value']);
let result2 = removeNegativeElements([-9, -21, -12]); 
let result3 = removeNegativeElements(['-102', 102]);
console.log(`There is no negative elements, except of strings: ${result}`);
console.log(`There is no negative elements, except of strings: ${result2}`);
console.log(`There is no negative elements, except of strings: ${result3}`);

    // Third

function getStringElements(arr) {
    return arr.filter(el => typeof(el) === 'string');
}
let filtArr = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false];
let res = getStringElements(filtArr); 
console.log(`Some strings: ${res}`);

    // Fourth

let testArr = [...Array(10)];
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};
const myArr = testArr.map(el => Math.floor(getRandomArbitrary(0, 10)));
let sum = 0;
console.log(myArr);
function recurSum(arr, index = 0) {
    if (index === arr.length) return sum;
    sum += arr[index];
    return recurSum(arr, ++index);
}
console.log(`Sum of all the elements of myArr is ${recurSum(myArr)}`);

    // Fifth

const arr = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];
let sumTen = 0
function recurSumTen(arr, index = 0) {
    if (index === arr.length) return sumTen;
    if (arr[index] === 10) sumTen += arr[index];
    return recurSumTen(arr, ++index);
}
console.log(`Sum of all 10 in arr is ${recurSumTen(arr)}`);

    // Sixth

let newArr = []
function recurFiltFiv(arr, index = 0) {
    if (index === arr.length) return newArr;
    if (arr[index] > 5) newArr.push(arr[index]);
    return recurFiltFiv(arr, ++index);
}
console.log(`This is all the elements that are more than 5 in arr: ${recurFiltFiv(arr)}`);

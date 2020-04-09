# Javascriptの問題集

## 問題 １

area.js を作成して以下コードを完成して\
それぞれのfunctionを呼び出して結果を\
console.logで表示してください。

条件

- length, width は1～1000の間ではないといけない。

```javascript
/*
 * 四角の面積を計算してください。
 *
 * length: 縦の長さ
 * width: 横の長さ
 */
function getArea(length, width) {
    let area;

    return area;
}

/**
 * 四角の周囲を計算してください。
 *
 *
 * length: 縦の長さ
 * width: 横の長さ
 */
function getPerimeter(length, width) {
    let perimeter

    return perimeter
}
```

## 問題 ２

factorial.jsを作成して、指定された数字に次の処理を行ってください。

例；　指定された数字: 4\
24 = 4 x 3 x 2 x 1

条件: 指定された数字は　1～10の間あること。


## 問題 3

array-sum.jsを作成して、arrayの中にある、数字の合計を計算してください。

```javascript

let numbers = [1,2,3,4,5];

function arraySumWithFor(array) {
    let sum = 0;

    //For を使ってarray の合計を計算してください。

    return sum
}

function arraySumWithWhile(array) {
    let sum = 0;

    //While を使ってarray の合計を計算してください。

    return sum
}

function arraySumWithDoWhile(array) {
    let sum = 0;

    //Do While を使ってarray の合計を計算してください。

    return sum
}

function arraySumWithForEach(array) {
    let sum = 0;

    //ForEach を使ってarray の合計を計算してください。

    return sum
}

let forSum = arraySumWithFor(numbers);
let whileSum = arraySumWithWhile(numbers);
let doWhileSum = arraySumWithDoWhile(numbers);
let forEachSum = arraySumWithForEach(numbers);

console.log(`For文での合計: ${forSum}`);
console.log(`While文での合計: ${whileSum}`);
console.log(`doWhile文での合計: ${doWhileSum}`);
console.log(`ForEach文での合計: ${forEachSum}`);

```

## 問題 ４

even-odd.jsを作成して、入力した数字が偶数か奇数なのかを判断して、コンソールにログを出すアルゴリズムを作成してください。

```javascript
function checkNumber(number) {

}

//コンソールに「奇数です」と表示される
checkNumber(5);　

//コンソールに「偶数です」と表示される
checkNumber(2);
```

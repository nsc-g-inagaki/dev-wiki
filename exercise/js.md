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

##　問題 ５

olympic-games.jsを作成して、指定した年までにオリンピックが開催された年を表示してください。

```javascript
//オリンピックが初めて開催された年
let startYear = 1896;

fun gameYears(year) {
    //startYear　からyearまでのオリンピック開催年を
    //console.logを使って表示する。
}

gameYears(2020);
```

## 問題 ６

multiplication-table.jsを作成して、指定された数字の九九を表示してください。
表示形式は:　数字 x 1 = 答え

```javascript
function multiplication(number) {
    //numberに0～10までを掛け算したものを画面に表示してください。
    /*
        numberが10だった場合の表示例；
        10 x 0 = 0
        10 x 1 = 10
        10 x 2 = 20
        10 x 3 = 30
        10 x 4 = 40
        10 x 5 = 50
        10 x 6 = 60
        10 x 7 = 70
        10 x 8 = 80
        10 x 9 = 90
        10 x 10 = 100
    */
}

multiplication(10);
```

## 問題 ７

average.js を作成し、arrayの中にある数字の平均値を計算する関数(function)を作成してください。

## 問題 8

even-odd.js に新しく関数（function）を作成し、渡されたarrayの中の数字をそれぞれ\
奇数と偶数のarrayに分けて表示してください\
表示の例；\
元のarray：[1,2.3.4.5.6]\
偶数：[2,4,6]\
奇数：[1,3,5]

## 問題 9

print.jsを作成して、次のステップにあるようにデータを表示してください。
表示にはループを使って行ってください。

```
ステップ１

 1 2 3 4 5 6 7 8 9 10
 2 4 6 8 10 12 14 16 18 20
 3 6 9 12 15 18 21 24 27 30
 4 8 12 16 20 24 28 32 36 40
 5 10 15 20 25 30 35 40 45 50
 6 12 18 24 30 36 42 48 54 60
 7 14 21 28 35 42 49 56 63 70
 8 16 24 32 40 48 56 64 72 80
 9 18 27 36 45 54 63 72 81 90
 10 20 30 40 50 60 70 80 90 100
```

```
ステップ2

 001 002 003 004 005 006 007 008 009 010
 002 004 006 008 010 012 014 016 018 020
 003 006 009 012 015 018 021 024 027 030
 004 008 012 016 020 024 028 032 036 040
 005 010 015 020 025 030 035 040 045 050
 006 012 018 024 030 036 042 048 054 060
 007 014 021 028 035 042 049 056 063 070
 008 016 024 032 040 048 056 064 072 080
 009 018 027 036 045 054 063 072 081 090
 010 020 030 040 050 060 070 080 090 100
```
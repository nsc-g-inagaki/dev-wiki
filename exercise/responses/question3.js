//合計を知りたいarray
let numbers = [1, 2, 3, 4, 5];

//Forループを使って行う。
function arraySumWithFor(array) {
    //結果を保持する
    let sum = 0;

    //arrayの中のものを順位足していく
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    //結果を返す
    return sum
}

//Whileループを使って行う。
function arraySumWithWhile(array) {

    //結果を保持する
    let sum = 0;

    //arrayのポジションのポインタを定義
    let counter = 0;

    //ポインタがarrayの長さまで行くように条件を作成
    while (counter < array.length) {
        //順にarrayの中身を足していく
        sum += array[counter];

        //無限ループにならないようにポインタをインクレメント
        counter++;
    }

    //結果を返す
    return sum
}

//DoWhileループを使って行う。
function arraySumWithDoWhile(array) {

    //結果を保持する
    let sum = 0;

    let counter = 0;

    //ポインタがarrayの長さまで行くように条件を作成
    do {
        //順にarrayの中身を足していく
        sum += array[counter];

        //無限ループにならないようにポインタをインクレメント
        counter++;
    } while (counter < array.length);

    //結果を返す
    return sum
}

//ForEachループを使って行う。
function arraySumWithForEach(array) {

    //結果を保持する
    let sum = 0;

    //forEachを使用して、arrayのアイテム一つ一つを順にelementに入れて処理をする。
    array.forEach(element => {
        //elementを順に足していく
        sum += element;
    });


    //結果を返す
    return sum
}

//それぞれの関数の呼び出しをする
let forSum = arraySumWithFor(numbers);
let whileSum = arraySumWithWhile(numbers);
let doWhileSum = arraySumWithDoWhile(numbers);
let forEachSum = arraySumWithForEach(numbers);

//結果を表示する
console.log(`For文での合計: ${forSum}`);//For文での合計: 15
console.log(`While文での合計: ${whileSum}`);//While文での合計: 15
console.log(`doWhile文での合計: ${doWhileSum}`);//doWhile文での合計: 15
console.log(`ForEach文での合計: ${forEachSum}`);//ForEach文での合計: 15
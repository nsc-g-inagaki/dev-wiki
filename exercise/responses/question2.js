/**
 * 指定した数字を階乗します。
 * 
 * @param {Number} number 階乗する数字
 */
function factor(number) {

    //数字が範囲内かチェックします。　範囲外の場合　-1を返す。
    if (!isValidNumber(number)) {
        return -1;
    }

    //結果を入れる変数。
    let result = 1;

    //numberが１の場合は１なのでループは２でスタート
    for (let i = 2; i <= number; i++) {
        //resultにポインタのiをかける
        result *= i;
    }

    //結果を返却
    return result;
}

/**
 *  数字が範囲内かを判断する。
 * 
 *  範囲外だった場合　falseを返す
 * @param {Number} number チェックしたい数字
 */
function isValidNumber(number) {
    //引数のnumberが1から10の間かどうかをチェックして結果を返す。
    return number > 0 && number <= 10;
}

//factorを呼び出して結果をログに表示
console.log(factor(1)); //1

//factorを呼び出して結果をログに表示
console.log(factor(5)); //120

//factorを呼び出して結果をログに表示
console.log(factor(20)); //-1
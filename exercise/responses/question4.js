/**
 * 奇数・偶数の判定をして結果をログに出す
 * 
 * @param {Number} number 判定したい数字
 */
function checkNumber(number) {

    //表示する文を保持するための変数
    let msg;

    //偶数・奇数のチェック　
    if (number % 2) {
        msg = `${number}は奇数です。`
    } else {
        msg = `${number}は偶数です。`
    }

    //msgを表示する
    console.log(msg);
}

//判定関数の呼び出し
checkNumber(5);　//5は奇数です。

//判定関数の呼び出し
checkNumber(2);//2は偶数です。
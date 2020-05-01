/**
 * 指定した数字が素数かどうかをチェックする
 * 
 * 戻り値； true:素数, false:素数ではない
 * 
 * @param {Number} number 
 */
function isPrime(number) {
    //素数は2からなので2から数え始める
    for(let i = 2; i < number; i++) {
        //自分自身以外の数字で割り切れたときは、
        //そこでループストップ、falseを返す
        if(number % i == 0){
            return false;
        }
    }

    //素数であるかもしれないが１以上であるかどうかを確認する
    return number > 1;
}

/**
 * 
 * 素数かどうかを確かめて結果を表示する
 * 
 * @param {Number} number 
 */
function validate(number) {
    //素数判定はisPrimeに任せて、結果を処理する
    if(isPrime(number)) {
        console.log('素数');
    }else {
        console.log('素数ではない');
    }
}

//validateの呼び出し
validate(1);//素数ではない
validate(2);//素数
validate(3);//素数
validate(4);//素数ではない
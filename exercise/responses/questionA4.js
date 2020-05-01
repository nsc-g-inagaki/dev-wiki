/**
 * 特定の数字分のフィボナッチ数列を作成します。
 * 
 * @param {Number} number 上限の数字
 */
function fibonacci(number) {

    //数列を保持する
    let fib = []; 

    //最初の値は固定で用意する
    fib[0] = 0;
    fib[1] = 1;

    //2つ目以降をループする
    for (let i = 2; i <= 10; i++) {
        //フィボナッチのルールで計算してfibに入れていく
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    //完成したarrayを返す
    return fib;
}

//fibonacciの呼び出し
console.log(fibonacci(10));
//[0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55]

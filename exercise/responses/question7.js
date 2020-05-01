/** Arrayに入っている数字の平均を計算する。
 * 
 * @param {Array} array 
 */
function arrayAverage(array) {
    //平均を計算するために必要な合計を保持する
    let sum = 0;

    //arrayのポジションを保持する
    let index = 0;

    //indexがarrayの長さより小さい間ループを続ける
    while (index < array.length) {
        //arrayの値を順に足していく
        sum += array[index];

        //無限ループにならないようにindexをインクレメント
        index++;
    }

    //平均値を返す(合計/数字の数)
    return sum / array.length;
}

//平均を計算して表示する
console.log(arrayAverage([6, 5, 4, 3, 2, 1]))//3.5
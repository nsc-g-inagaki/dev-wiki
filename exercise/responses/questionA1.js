/**
 * arrayの中から最大と最小を探し出して計算をする
 * @param {Array} array 
 */
function minMaxSum(array) {

    //最大値を保持する　最初はarrayの一つ目の数字を使う
    let max = array[0];

    //最小値を保持する　最初はarrayの一つ目の数字を使う
    let min = array[0];

    //arrayの合計を保持する 最初は0
    let sum = 0;

    for (let i = 0; i < array.length; i++) {

        //maxの値が今の値より小さいかどうかをチェック
        //小さい場合にmaxを上書き
        if (max < array[i]) {
            max = array[i];
        }

        //minの値が今の値より大きいかどうかをチェック
        //大きい場合にminを上書き
        if (min > array[i]) {
            min = array[i];
        }

        //arrayの中身を全部足す
        sum += array[i];
    }

    console.log(`最小の和は；${sum - max}`);
    console.log(`最大の和は；${sum - min}`);
}

minMaxSum([1,2,3,4,5]);
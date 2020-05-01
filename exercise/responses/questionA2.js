/**
 * 最も大きい数字が何個あるかを数える
 * 
 * @param {Array} array 
 */
function countMax(array) {
    //最大数字の数を数えるカウンターを設定
    let count = 1;

    //最大値をとりあえずarrayの一番最初に設定
    let max = array[0];

    //一番最初の値を一番大きくしたのでarrayの2個目からループ
    for (let i = 1; i < array.length; i++) {
        //maxが今のポジションのものより小さいか
        if (max < array[i]) {

            //maxの値を上書き
            max = array[i];

            //カウンターを1に再設定
            count = 1;
        } else if (max == array[i]) {　//maxの値が今のポジションと同じか
            //カウンターをインクレメント
            count++;
        }
    }

    //最終的な数を返却
    return count;
}


/**
 * arrayにあるメソッドを使っての回答方法
 * @param {Array} array 
 */
// function countMaxWithArrayMethods(array) {
//     //最大値をMath を使って取得
//     let max = Math.max(...array);
    
//     //arrayにフィルターをかけて最大値と同じものだけを残し、長さを返却
//     return array.filter(item => item == max).length;
    
// }

//0から40までの数字がランダムで入っているarrayを生成
let array = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));

//ログにarrayを表示
console.log(array);

//ログに最も大きい数字の数を表示
console.log(countMax(array));

// console.log(countMaxWithArrayMethods(array));
//昇順に並び変えるarray
const array = [6,5,4,3,2,1];

//arrayに備わっているメソッドを使った昇順並び替え
//並び変えるarrayのコピーをsort1に入れる
let sort1 = array;

//arrayのsortメソッドを呼び出す
sort1.sort();

//並び変えたarrayを表示
console.log(sort1);


/**
 * バブルソートを使った並び替えを行う
 * @param {Array} array 
 */
function bubbleSort(array) {
    //arrayの長さを一時的に保持する
    let len = array.length;

    //arrayの最後までループする
    for (let i = 0; i < len; i++) {

        //arrayの最後までループする
        for (let j = 0; j < len; j++) {

            //今のポジションの値が次の値より大きいかをチェック
            if (array[j] > array[j + 1]) {

                //値が大きいため次の値と入れ替える
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }

    //昇順になったarrayを返却する
    return array;
}

//bubbleSortの呼び出しとログ出力
console.log(bubbleSort(array));//[1,2,3,4,5,6]
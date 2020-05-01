/**
 *  指定したarrayを偶数と奇数のarrayに分けて表示する。
 * @param {Array} array 
 */
function divideArray(array) {

    //偶数を保持するarray
    let gusu = [];

    //奇数を保持するarray
    let kisu = [];

    //指定されたarrayの中を一つづつ見ていく
    for (let i = 0; i < array.length; i++) {

        //arrayに入っている数字が奇数かどうかを判定する
        if (array[i] % 2) {
            //奇数のarrayに値を追加する
            kisu.push(array[i]);
        } else {
            //偶数のarrayに値を追加する
            gusu.push(array[i]);
        }
    }

    //元のarrayを表示する
    console.log(array);//[1,2,3,4,5,6]

    //偶数を表示する
    console.log(gusu);//[2,4,6]

    //奇数を表示する
    console.log(kisu);//[1,3,5]
}

divideArray([1, 2, 3, 4, 5, 6]);

/**
 * 指定した数字の九九を表示する
 * 
 * @param {Number} number 九九を知りたい数字
 */
function multiplication(number) {

    //0から10までループし計算結果を表示する
    for (let i = 0; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }

}

//multipicationの呼び出し
multiplication(10)
/*
    10 x 0 = 0
    10 x 1 = 10
    10 x 2 = 20
    10 x 3 = 30
    10 x 4 = 40
    10 x 5 = 50
    10 x 6 = 60
    10 x 7 = 70
    10 x 8 = 80
    10 x 9 = 90
    10 x 10 = 100
*/
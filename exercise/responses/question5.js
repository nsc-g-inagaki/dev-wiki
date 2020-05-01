//オリンピックが初めて開催された年
const startYear = 1896;

/**
 * オリンピックが開催された年を表示する。
 * 
 * 開かれなかった年などの判別はしていない、1896年からただ4年おきを表示している。
 * 
 * @param {Number} year 
 */
function gameYears(year) {

    //1896から4つおきに指定した年までをループする
    for (let i = startYear; i <= year; i += 4) {
        // 年を表示する
        console.log(i);
    }
}

//gameYearsの呼び出し
gameYears(2020);
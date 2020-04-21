/*
 * 四角の面積を計算してください。
 *
 * length: 縦の長さ
 * width: 横の長さ
 */
function getArea(length, width) {
    //失敗時の結果を初期値として保存
    let area = -1;

    //checkNumberを使って縦・横が友好のチェックを行い計算をする。
    if (checkNumber(length) && checkNumber(width)) {
        area = length * width;
    }

    //結果を返却する。
    return area;
}

/**
 * 四角の周囲を計算してください。
 *
 *
 * length: 縦の長さ
 * width: 横の長さ
 */
function getPerimeter(length, width) {
    //失敗時の結果を初期値として保存
    let perimeter = -1;

    //checkNumberを使って縦・横が友好のチェックを行い計算をする。
    if (checkNumber(length) && checkNumber(width)) {
        perimeter = (length + width) * 2;
    }

    //結果を返却する。
    return perimeter
}

/**
 *  数字が範囲内かを判断する。
 * 
 *  範囲外だった場合　falseを返す
 * @param {Number} number チェックしたい数字
 */
function checkNumber(number) {
    //引数のnumberが1から1000の間かどうかをチェックして結果を返す。
    return number > 0 && number <= 1000;
}

//getAreaを呼び出して結果をログに出す
console.log(getArea(10, 30)); //300

//getPerimeterを呼び出して結果をログに出す
console.log(getPerimeter(10, 30)); //80

//getAreaを呼び出して結果をログに出す
console.log(getArea(-5, 30)); //-1

//getPerimeterを呼び出して結果をログに出す
console.log(getPerimeter(10, 3000)); //-1

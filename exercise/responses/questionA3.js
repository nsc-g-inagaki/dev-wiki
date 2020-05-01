//PM, AM の定数を定義
const PM = 'PM';
const AM = 'AM';

/**
 * 日付を変換する　07:15:45PM => 19:15:45
 * @param {String} time 
 */
function timeConversion(time) {
    
    //PMがあるかどうかをチェックします
    //String.matchメソッドを使ってPMと書いてあるかをチェックします。
    //PM　あり=> true  PM なし=> false
    let isPm = time.match(PM);

    //String.splitを使って、：をベースにarray変換します。
    //07:05:58PM => split(':') => ['07', '05', 58PM]
    time = time.split(':');

    //文字列の時間を数字に変換します（parseInt(変換したい値、何進数なのか)）
    let hour = parseInt(time[0], 10);

    if(isPm) {
        //PMの場合
        // 時間が12だったら０を足すそうじゃないときは12を足す
        hour += hour == 12 ? 0 : 12;

        /* 
                条件　？　trueの場合の値　；　falseの場合の値
            hour += hour == 12 ? 0 : 12;
                ||  

            if(hour == 12) {
                hour += 0;
            } else {
               hour += 12;
            } 
        */

    } else {
        //AM
        // 時間が12だったら０にするそうじゃないときはそのまま
        hour = hour == 12 ? 0 : hour;
    }

    //秒の部分のAMまたはPMを空文字に置き換える
    //置き換える条件は正規表現　[A,P]M => AM || PM
    time[2] = time[2].replace(/[A,P]M/, '');

    //ログに出す。
    console.log(`${hour.toString().padStart(2, '0')}:${time[1]}:${time[2]}`);
}

timeConversion("08:20:05PM");
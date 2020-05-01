/**
 * 問題のステップ１の表示をする
 * 
 */
function stepOne() {

    //1から10までループする
    for (let i = 1; i <= 10; i++) {
        //表示したい行を保持する
        let line = '';

        //1から10までループする
        for (let j = 1; j <= 10; j++) {

            //行に計算の結果を追加する
            line += i * j + ' ';
        }

        //行を表示する
        console.log(line);
    }
}

/**
 * 問題のステップ２の表示をする
 */
function stepTwo() {

    //1から10までループする
    for (let i = 1; i <= 10; i++) {
        //表示したい行を保持する
        let line = '';

        //1から10までループする
        for (let j = 1; j <= 10; j++) {

            //計算の結果保持する
            let result = i * j;

            //計算結果を文字列にして左にゼロを追加して見た目を整える
            result = result.toString().padStart(3, '0');

            //行に計算の結果を追加する
            line += result + ' ';
        }

        //行を表示する
        console.log(line);
    }
}


//ステップ1を計算して表示させる
stepOne();
/**
1 2 3 4 5 6 7 8 9 10 
2 4 6 8 10 12 14 16 18 20 
3 6 9 12 15 18 21 24 27 30 
4 8 12 16 20 24 28 32 36 40 
5 10 15 20 25 30 35 40 45 50 
6 12 18 24 30 36 42 48 54 60 
7 14 21 28 35 42 49 56 63 70 
8 16 24 32 40 48 56 64 72 80 
9 18 27 36 45 54 63 72 81 90 
10 20 30 40 50 60 70 80 90 100 
 */

console.log('==================================');

//ステップ2を計算して表示させる
stepTwo();
/**
001 002 003 004 005 006 007 008 009 010
002 004 006 008 010 012 014 016 018 020
003 006 009 012 015 018 021 024 027 030
004 008 012 016 020 024 028 032 036 040
005 010 015 020 025 030 035 040 045 050
006 012 018 024 030 036 042 048 054 060
007 014 021 028 035 042 049 056 063 070
008 016 024 032 040 048 056 064 072 080
009 018 027 036 045 054 063 072 081 090
010 020 030 040 050 060 070 080 090 100

 */
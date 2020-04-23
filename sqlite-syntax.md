# SQLite のSQLの書き方　作成中

+ [テーブルを作成する](#テーブルを作成する)
+ [テーブルを更新する](#テーブルを更新する)
    + [テーブル名の更新を行う場合](#テーブル名の更新を行う場合)
    + [テーブルのカラム名の更新を行う場合](#テーブルのカラム名の更新を行う場合)
    + [テーブルにカラムを追加する場合](#テーブルにカラムを追加する場合)
+ [テーブルを削除する](#テーブルを削除する)
+ [テーブルにデータを追加する](#テーブルにデータを追加する)
+ [テーブルのデータを更新する](#テーブルのデータを更新する)
+ [テーブルにデータを追加する](#テーブルにデータを追加する)
    + [基本な書き方](#基本な書き方)
    + [テーブルのカラムを省略した書き方](#テーブルのカラムを省略した書き方)
    + [一度複数のデータを入力する書き方](#一度複数のデータを入力する書き方)
+ [テーブルのデータを更新する](#テーブルのデータを更新する)
+ [テーブルのデータを削除する](#テーブルのデータを削除する)
+ [テーブルのデータを取得する](#テーブルのデータを取得する)

## テーブルを作成する

テーブルを作成する際のコマンドの構成は以下の通りです。

```sql
-- CREATE TABLE テーブル名( カラム名　カラムのデータタイプ, ...);

CREATE TABLE product (
    id INTEGER,
    name TEXT,
    price REAL
);
```

## テーブルを更新する

テーブルの更新は、更新したい内容によってコマンドに差があります。

### テーブル名の更新を行う場合

```sql
-- ALTER TABLE テーブル名 RENAME TO 新しいテーブル名

ALTER TABLE podruct RENAME TO product;
```

### テーブルのカラム名の更新を行う場合

```sql
-- ALTER TABLE テーブル名 RENAME COLUMN 変更したいカラム TO 新しいカラム名

ALTER TABLE product RENAME COLUMN name TO product_name;
```

### テーブルにカラムを追加する場合

```sql
-- ALTER TABLE テーブル名 ADD COLUMN カラム名　データタイプ, ...;

ALTER TABLE podruct ADD COLUMN brand TEXT;
```

## テーブルを削除する

テーブルを削除する際のコマンドは以下の通りです。

```sql
-- DROP TABLE テーブル名;
DROP TABLE product;
```

## テーブルにデータを追加する

データを入力する際のコマンドの書き方は何通りかあります。

### 基本な書き方
```sql
--INSERT INTO テーブル名(カラム名) VALUES (入力する値);
INSERT INTO product(id, name, price, amount) VALUES (
    1,
    "ジュース",
    120,
    50
);
```

### テーブルのカラムを省略した書き方
```sql 
--INSERT INTO テーブル名 VALUES (入力する値)
INSERT INTO product VALUES(
    1,
    "ジュース",
    120,
    50
);
```
### 一度複数のデータを入力する書き方

_カラム名は省略してもいい_
```sql
--INSERT INTO テーブル名(カラム名) VALUES (入力する値), (入力する値)・・・;
INSERT INTO product(id, name, price, amount) VALUES (
    1,
    "ジュース",
    120,
    50
), 
(
    2,
    "グミ",
    108,
    60
);
```

## テーブルのデータを更新する

テーブルのデータを更新する場合は以下のような書き方をする。\
_条件は任意でつけれます_

```sql
--UPDATE テーブル名 SET カラム名 = 値　[WHERE 条件]
--productテーブルのamountカラムの値をすべて50に設定
UPDATE product SET amount = 50;

--productテーブルのidカラムの値が２のものだけpriceを110に設定
UPDATE product SET price = 110 WHERE id = 2;
```

## テーブルのデータを削除する

テーブルのデータを削除する場合は以下のような書き方をする。\
_条件は任意でつけれます_

```sql
--DELETE FROM テーブル名　[WHERE 条件]
--productテーブルの中身をすべて消す
DELETE FROM product;

--productテーブルからidが１のモノだけを削除する
DELETE FROM product WHERE id = 1;
```

## テーブルのデータを取得する
テーブルからデータを取得する場合は以下のような書き方をする。\
_条件は任意でつけれます_\
_カラムの指定も変更が可能です_

```sql
--SELECT カラム名 FROM テーブル名 [WHERE 条件]
--productテーブルのすべてカラムのデータを取得する
SELECT * FROM product;

--productテーブルよりid、name、priceカラムのデータを取得します、ただしpriceが100以上のモノに限定しています。
SELECT id, name, price FROM product WHERE price > 100;
```


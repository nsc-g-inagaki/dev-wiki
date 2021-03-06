# SQLite のSQLの基本的なコマンドの書き方

+ [テーブルを作成する](#テーブルを作成する)
  + [主キーの設定](#主キーの設定)
  + [外部キーの設定](#外部キーの設定)
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
+ [便利な関数](#便利な関数)
  + [AVG 平均を出してくれる関数](#AVG-平均を出してくれる関数)
  + [COUNT 総数を教えてくれる関数](#COUNT-総数を教えてくれる関数)
  + [MAX 最大値を出してくれる関数](#MAX-最大値を出してくれる関数)
  + [MIN 最小値を出してくれる関数](#MIN-最小値を出してくれる関数)
  + [SUM 合計を出してくれる関数](#SUM-合計を出してくれる関数)

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

### 主キーの設定

主キーの設定のコマンドは以下2パターンです。

```sql
--カラム名　カラムのデータタイプ　PRIMARY KEY,
CREATE TABLE product(
    id INT PRIMARY KEY,
    name TEXT,
    price REAL
);

--PRIMARY KEY(カラム名)
CREATE TABLE product(
    id INTEGER NOT NULL,
    name TEXT,
    price REAL,
    PRIMARY KEY (id)
);

--複数のカラムで構成されている主キーの作成方法
CREATE TABLE product (
    id INTEGER NOT NULL,
    barcode INTEGER NOT NULL,
    name TEXT,
    price REAL,
    PRIMARY KEY (id, barcode)
);
```

### 外部キーの設定

外部キーの設定のコマンドは以下の通りです。

```sql
CREATE TABLE supplier(
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

--FOREIGN KEY(カラム名) REFERENCES 参照先テーブル名(参照先カラム名)
CREATE TABLE product(
    id INT PRIMARY KEY,
    name TEXT,
    price REAL,
    supplier_id INTEGER,
    FOREIGN KEY(supplier_id) REFERENCES supplier(id)
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

カラム名は省略してもいい

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

## 便利な関数

### AVG 平均を出してくれる関数

特定のカラムの平均値を出す関数

```sql
--SELECT COUNT(カラム名) FROM テーブル名
SELECT COUNT(price) FROM product;
```

### COUNT 総数を教えてくれる関数

特定のカラムの数、またはテーブルに入っているデータの総数を出す関数

```sql
--テーブルのデータを総数出す場合
--SELECT COUNT(*) FROM テーブル名
SELECT COUNT(*) FROM product;

--特定のカラムの数を数える場合
--SELECT COUNT(カラム名) FROM テーブル名
SELECT supplier_id, COUNT(id) FROM product GROUP BY supplier_id;
```

### MAX 最大値を出してくれる関数

特定のカラムで最も大きい値を探し出す関数

```sql
--SELECT MAX(カラム名) from テーブル名
SELECT MAX(price) FROM product;
```

### MIN 最小値を出してくれる関数

特定のカラムで最も小さい値を探し出す関数

```sql
--SELECT MIN(カラム名) FROM テーブル名
SELECT MIN(price) FROM product;
```

### SUM 合計を出してくれる関数

特定のカラムの値の合計を出す関数

```sql
--SELECT SUM(カラム名) FROM テーブル名
SELECT supplier_id, SUM(price) FROM product GROUP BY supplier_id;
```

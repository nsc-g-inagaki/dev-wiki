# Git　作成中

## インストールとGUI

**インストール**\
[https://git-scm.com](https://git-scm.com)

### GUI

**GitHub**\
[https://desktop.github.com](https://desktop.github.com)

**GitKraken**\
[https://www.gitkraken.com/git-client](https://www.gitkraken.com/git-client)

**SourceTree**\
[https://www.sourcetreeapp.com](https://www.sourcetreeapp.com)

## 初期設定

全ローカルリポジトリに共通のユーザー情報を設定する。

```bash
#履歴を確認するときに、変更者が識別可能な名前をせっていする。
git config --global user.name "[firstname lastname]"
```

```bash
#各履歴マーカーに関連付けられるメールアドレスを設定します。
git config --global user.email "[valid email]"
```

## リポジトリ設定

リポジトリの設定は、最初の一回だけで行います。

```bash
#すでに存在するディレクトリをGitのリポジトリとして使う
git init <directory path>
```

```bash
#指定したURLよりリポジトリを取得する
git clone [URL]
```

## ステージとスナップショット

Gitのスナップショットとステージングエリアの操作

```bash
#リポジトリの変更点を表示する
git status
```

```bash
#現時点のファイルをステージングする
git add [file]
```

```bash
#変更点を維持しながら、ステージングからファイルを外す。
git reset [file]
```

```bash
#差分を表示
git diff
```

```bash
#ステージングされていて、コミットされていない物の差分
git diff --staged
```

```bash
#コミットを実行（ステージングされているものを履歴として残す）
git commit -m "[dresciptive message]"
```

## ブランチとマージ

ブランチの操作コマンド

```bash
#ブランチのリストアップ　今使っているブランチに*がつきます。
git branch
```

```bash
#現コミットからブランチを作る
git branch [branch-name]
```

```bash
#指定したブランチへ変更し、内容をカレントディレクトリに反映します
git checkout [branch]
```

```bash
#指定したブランチの履歴を今使用しているブランチへ取り込みます。
git merge [branch]
```

# EC2にDockerとDocker Composeを追加する方法

EC2にDockerとDocker Composeのインストール方法をまとめました。

### 環境について
- t2.micro
- Linux Ubuntu 18.04.4 LTS

### 手順

1. EC2に接続する。\
    [接続方法はこちら](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/AccessingInstances.html)

2. アップデートを行う
    ```bash
        sudo apt-get update && sudo apt-get upgrade -y
    ```
3. Docker.com からDockerのインストールスクリプトをダウンロードする。
    ```bash
    curl -fsSL https://get.docker.com -o get-docker.sh
    ```
4. 先ほどダウンロードしたスクリプトを実行してDockerをインストールします
    ```bash
    sudo sh get-docker.sh
    ```
5. (任意)Dockerのコマンドは管理者権限がないと使えません。　毎回 sudo をつけなくてもEC2のユーザーで実行できるようにする。
    ```bash
    #  sudo usermod -aG docker ユーザー名
    sudo usermod -aG docker ubuntu
    ```

6. Docker Composeのダウンロードをする
    ```bash
    #ver. 1.25.5（2020/05/15時点で最新）
    sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    ```

7. docker-composeの権限を編集
    ```bash
    sudo chmod +x /usr/local/bin/docker-compose
    ```


最後に以下のコマンドでDocker, Docker Composeがインストールされていることが確認できます。
```bash
# Docker のバージョンを表示する
docker -v
# Docker Compose のバージョンを表示する
docker-compose -v
```



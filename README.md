# hosei-webservice

## 使い方
## ソフトウェアの説明
dockerを使ってmongoDBを起動する

```bash
$ docker run --rm --name=my-app-db -p 27017:27017 mongo
```

serverを起動する

```bash
$ npm install
$ node index.js
```

基本操作は授業でおこなったものと変わらない

入力をして送信ボタンを押す。その後サーバを更新をすることで画面に箇条書きで入力した単語が表示されるシステムである。

追加実装として、endと入力して送信ボタンを押すと/endのページに飛び、画面上にendと書かれた画像が表示する仕様にした。またこの段階で追加入力ができないようにしている。

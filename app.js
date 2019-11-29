// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));

const port = process.env.PORT || 3000;

// ルート(http://localhost:3000/)にアクセスしてきたときにログイン画面を返す
app.get('/login', (req, res) => {
  res.send('/login');



});

// ポート3000でサーバを立てる
app.listen(port);
console.log('listen on port' + port);

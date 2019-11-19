// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

// ルート(http://localhost:3000/)にアクセスしてきたときにログイン画面を返す
app.get('/', (req, res) => {
res.send('/api/v1/login')



});

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));

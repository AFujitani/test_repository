// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('training'));


const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/login', (req, res) => {
  console.log('login')
  res.sendFile(__dirname + '/login.html')
});

app.post('/login', (req, res) => {
  const id = req.body.user_id;
  const password = req.body.password;
  console.log(req.body);
  res.sendFile(__dirname + '/bbs.html')
});

// ポート3000でサーバを立てる
app.listen(port);
console.log('listen on port' + port);

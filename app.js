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

app.get('/login', (req,res) => {
  console.log('login')
  res.sendFile(__dirname + '/login.html')
});


app.post('/post', (req, res) => {
    console.log(req.body);
res.render('/login', {title:'', id: req,body,id});
    });


// ポート3000でサーバを立てる
app.listen(port);
console.log('listen on port' + port);

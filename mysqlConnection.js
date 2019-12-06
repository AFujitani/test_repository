//mysqlモジュールを呼び出す
const mysql = require('mysql');

//DBの定義
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '1111',
  port: 3000,
  database: 'trainingdb',
};

const connection = function handleDisconnect() {
  console.log('create mysql connection');
  connection = mysql.createConnection(dbConfig); //接続する準備

  //接続
  connection.connect(function(err) {
    if (err) {
      console.log('error when connecting to db;', err);
    }
  })
};

//error時の処理
connection.on('error', function(err) {
  console.log('db error', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    handleDisconnect();
  } else {
    throw err;
  }
});

module.exports = connection; //connectionを(他のファイルから)requireで呼び出せるようにする
}

handleDisconnect();

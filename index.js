const express = require('express');
const mysql = require('mysql');
const { check, validationResalut} = require('express-validator/check');
const router = express.Router();

const mysql_setting = {
  host:
  user: 'root',
  password: 'pass',
  database: 'mysql'
}

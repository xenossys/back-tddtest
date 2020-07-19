const Sequelize = require("sequelize");

//DB연동
const sequelize = new Sequelize({
  // sql lite 설정
  dialect: "sqlite",
  storage: "./db.sqlite", // db는 파일형태로 되어있음
  logging: false, // 기본 값은 console.log 와 바인딩 되어 있다.
});

const User = sequelize.define("User", {
  // id는 자동으로 생성해 줌.
  name: Sequelize.STRING, //varchar 255로 생성됨
});

module.exports = { Sequelize, sequelize, User };

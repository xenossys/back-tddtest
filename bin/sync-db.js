const models = require("../models");

// 해당 모듈을 호출할 때 return되는 값을 실행하도록. // 기본적으로 sync 는 promise를 리턴한다.
module.exports = () => {
  return models.sequelize.sync({ force: true }); // 기존에 db가 있는 경우 전부 날려버리고 다시 시작한다.
};

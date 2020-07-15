const utils = require("./index");
// const assert = require("assert");
const should = require("should"); // node 공식 문서에서 assert 를 test 목적으로 사용하지 말라고 함.

// 해당 코드를 node가 돌려줄 수 없기 때문에 mocha가 돌려줌.
describe("utils.js모듈은 capitalize() 함수는", () => {
  it("문자열의 첫번째 문자를 대문자로 변환한다.", () => {
    const result = utils.capitalize("hello");
    result.should.be.equal("Hello");
  });
});

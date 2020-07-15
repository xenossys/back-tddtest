const request = require("supertest");
const should = require("should");
const app = require("./app");

describe("GET /users는", () => {
  describe("성공시", () => {
    it("유저 객체를 담은 배열로 응답한다.", (done) => {
      //done 은 비동기 처리를 해주는 것.
      request(app)
        .get("/users")
        .end((err, res) => {
          res.body.should.be.instanceOf(Array);
          // console.log(res.body);
          done();
        });
    });

    it("최대 limit 갯수만큼 응답한다.", (done) => {
      request(app)
        .get("/users?limit=2")
        .end((err, res) => {
          res.body.should.have.lengthOf(2);
          // console.log(res.body);
          done();
        });
    });
  });

  describe("실패시", () => {
    it("limit이 숫자형이 아니면 400을 응답한다.", (done) => {
      request(app)
        .get("/users?limit=two")
        .expect(400)
        // .end((err, res) => {
        //   done();
        // });
        .end(done); // 위의 end와 동일
    });
  });
});

describe("GET /users/1 은", () => {
  describe("성공시", () => {
    it("id가 1인 유저 객체를 반환한다.", (done) => {
      request(app)
        .get("/users/1")
        .end((err, res) => {
          console.log(res.body);
          res.body.should.have.property("id", 1);
          done();
        });
    });
  });

  describe("실패시", () => {
    it("id가 숫자가 아닌 경우 400로 응답한다.", (done) => {
      request(app).get("/users/one").expect(400).end(done);
    });

    it("id가 유저를 찾을 수 없을 경우 404로 응답한다.", (done) => {
      request(app).get("/users/4").expect(404).end(done);
    });
  });
});

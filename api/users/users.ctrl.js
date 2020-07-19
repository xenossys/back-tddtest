var users = [
  {
    id: 1,
    name: "ali2e",
  },
  {
    id: 2,
    name: "al4ce",
  },
  {
    id: 3,
    name: "al6ce",
  },
];

const index = function (req, res, next) {
  // const limit = req.query.limit;
  req.query.limit = req.query.limit || 10;
  // console.log(req.body);
  const limit = parseInt(req.query.limit, 10);
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }
  res.json(users.slice(0, limit));
};

const show = function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).end();
  }
  const user = users.filter((user) => {
    return user.id === id;
  });

  if (user.length < 1) {
    res.status(404).end();
  } else {
    res.json(user[0]);
  }
};

module.exports = {
  index,
  show,
};

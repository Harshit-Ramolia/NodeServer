const db = require("../models");

exports.getAllUsers = (req, res) => {
  db.user
    .find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      console.log(error);
      res.send("Error");
    });
};

exports.postUser = (req, res) => {
  db.user
    .create(req.body)
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((error) => {
      console.log(error);
      res.send("Error");
    });
};

exports.getUserByID = (req, res) => {
  db.user
    .findById(req.params.userID)
    .then((userToSend) => {
      res.json(userToSend);
    })
    .catch((error) => {
      console.log(error);
      res.send("Error");
    });
};

exports.getUserByName = (req, res) => {
  db.user
    .findOne({ name: new RegExp("^" + req.params.name + "$", "i") })
    .then((userToSend) => {
      res.json(userToSend);
    })
    .catch((error) => {
      console.log(error);
      res.send("Error");
    });
};

exports.putUserByID = (req, res) => {
  db.user
    .findOneAndUpdate({ _id: req.params.userID }, req.body, {
      runValidators: true,
      new: true,
    })
    .then((userToUpdate) => {
      res.json(userToUpdate);
    })
    .catch((error) => {
      console.log(error);
      res.send("Error");
    });
};

exports.putUserByName = (req, res) => {
  db.user
    .findOneAndUpdate(
      { name: new RegExp("^" + req.params.name + "$", "i") },
      req.body,
      {
        runValidators: true,
        new: true,
      }
    )
    .then((userToUpdate) => {
      res.json(userToUpdate);
    })
    .catch((error) => {
      console.log(error);
      res.send("Error");
    });
};

exports.deleteUserByID = (req, res) => {
  db.user
    .deleteOne({ _id: req.params.userID })
    .then(() => {
      res.json({ delete: true });
    })
    .catch((error) => {
      console.log(error);
      res.send("Error");
    });
};

exports.deleteUserByName = (req, res) => {
  db.user
    .deleteOne({ name: new RegExp("^" + req.params.name + "$", "i") })
    .then(() => {
      res.json({ delete: true });
    })
    .catch((error) => {
      console.log(error);
      res.send("Error");
    });
};

module.exports = exports;

const express = require("express");
const router = express.Router();
const assignmentData = require("../models/assignmentModel");

router
  .get("/", (req, res) => {
    assignmentData
      .find()
      .then(assignment => {
        res.json(assignment);
      })
      .catch(error => {
        res.json(error);
      });
  })
  .post("/create", (req, res) => {
    const createdAssignment = new assignmentData({
      username: req.body.username,
      assignmentReport: req.body.assignmentReport,
      timeSubmited: req.body.timeSubmited
    });
    createdAssignment
      .save()
      .then(assignment => {
        res.json(assignment);
      })
      .catch(error => {
        res.json(error);
      });
  })
  .get("/:id", (req, res) => {
    assignmentData
      .findById(req.params.id)
      .then(assignment => {
        res.json(assignment);
      })
      .catch(error => {
        res.json(error);
      });
  })
  .delete("/:id", (req, res) => {
    assignmentData
      .findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("Student deleted");
      })
      .catch(error => {
        res.json(error);
      });
  })
  .post("/update/:id", (req, res) => {
    assignmentData
      .findById(req.params.id)
      .then(assignment => {
        assignment.username = req.body.username;
        assignment.assignmentReport = req.body.assignmentReport;
        assignment.timeSubmited = req.body.timeSubmited;

        assignment.save().then(() => {
          res.json("Exercise Updated");
        });
      })
      .catch(error => {
        res.json(error);
      });
  });

module.exports = router;

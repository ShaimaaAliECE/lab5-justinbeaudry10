const express = require("express");
let jobsList = require("./jobs.json");

const app = express();

// Get categories mentioned in all the jobs and how many times each category was mentioned
app.get("/jobCategories", (req, res) => {
  let categories = {};

  for (let j in jobsList) {
    for (let c of jobsList[j].categories) {
      if (!categories[c]) categories[c] = 1;
      else categories[c]++;
    }
  }

  res.json(categories);
});

// Get all the jobs with a given category (sent as parameter)
//app.get("/:category", (req, res) => {});

// Get all jobs in a given city (sent in the querystring)
// app.get("/cityJobs", (req, res) => {
//   res.json(jobsList);
// });

app.listen(2000);

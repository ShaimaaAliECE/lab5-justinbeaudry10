const express = require("express");
let jobsList = require("./jobs.json");

const app = express();

// Get categories mentioned in all the jobs and how many times each category was mentioned
app.get("/jobCategories", (req, res) => {
  // Creates empty object
  let categories = {};

  // For each job in the list
  for (let j in jobsList) {
    // For each category in a given job
    for (let c of jobsList[j].categories) {
      // If the categories object doesn't yet contain this category, initialize it with a value of 1
      if (!categories[c]) categories[c] = 1;
      // If the category already is in the object, add to its value
      else categories[c]++;
    }
  }

  // Convert to json object and send it in the response
  res.json(categories);
});

// Get all the jobs with a given category (sent as parameter)
app.get("/:category", (req, res) => {
  // Create an empty array to hold all the jobs with the given category
  let jobs = [];

  // For each job in the list
  for (let j in jobsList) {
    // If the job's category list includes the given category, push it to the array
    if (jobsList[j].categories.includes(req.params.category)) jobs.push(j);
  }

  // Sends a json object containing each job with the given category
  res.json({ jobs: jobs });
});

// Get all jobs in a given city (sent in the querystring)
// app.get("/cityJobs", (req, res) => {
//   res.json(jobsList);
// });

app.listen(2000);

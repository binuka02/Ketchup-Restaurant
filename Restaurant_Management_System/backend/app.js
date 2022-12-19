const express = require('express');

const app = express();

app.use("/homepage", (req, res, next) => {
  const homepages = [
    {
      id:"1",
      title:"First",
      content:"Coming from server 1"
    },
    {
      id:"2",
      title:"Second",
      content:"Coming from server 2"
    }
  ];
  res.status(200).json({
    message:'Homepage fetched successfully',
    homepages: homepages
  });

});

module.exports = app;

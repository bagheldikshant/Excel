const MongoClient = require("mongodb").MongoClient;
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

const filePath = path.join(__dirname, "data.csv");
const uri =
  "mongodb+srv://BaghelDikshant:Dikshant123@todolist.eovpnde.mongodb.net/?retryWrites=true&w=majority";

app.get("/data/:id", (req, res) => {
  MongoClient.connect(uri, function (err, client) {
    const dbName = "test";
    const db = client.db(dbName);
    const collection = db.collection("devices");
    const id = req.params.id.toString();
    collection.find(
      {
        "Korn Ferry Reference level": id,
      },
      function (err, doc) {
        console.log(doc);
      }
    );
  });
});

// Code for importing csv file in mongodb


// MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
//   if (err) {
//     console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
//   }
//   console.log("Connected...");
//   const collection = client.db("test").collection("devices");
//   fs.createReadStream(filePath)
//     .pipe(csv())
//     .on("data", function (data) {
//       collection.insert(data, function (err, res) {
//         console.log("Data inserted");
//       });
//       // console.log(data);
//     })
//     .on("end", function () {
//       console.log("Data import completed");
//     });
// });

app.listen(3000, () => {
  console.log("server started");
});

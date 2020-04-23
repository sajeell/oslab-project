const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");
const app = express();
const path = require("path");
const { fork } = require("child_process");
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(express.static("build"));
// API Endpoint
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.get("/date", (req, res) => {
    
  const childProcess = fork('./Date.js');
  childProcess.send({"number": parseInt(req.query.number)})
  childProcess.on("message", message => res.send(message))
} )




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

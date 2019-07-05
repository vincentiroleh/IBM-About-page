let express = require("express");
const app = express();

let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.send("Hey there!");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

require("cf-deployment-tracker-client").track();
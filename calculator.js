const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    var total = num1 + num2;
    res.send("The result is: " + (total));

}
)

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})
app.post("/bmicalculator", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    
    var result = Math.round(weight / (height * height));

    res.send("Your BMI is: " + (result));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

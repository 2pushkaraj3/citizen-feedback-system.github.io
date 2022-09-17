// Require the package
const QRCode = require("qrcode");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

// // Creating the data
// let data = {
//     website : "www.google.com",
// 	policeStationName :"GP_Sector_1"
// }

// // Converting the data into String format
// let stringdata = JSON.stringify(data)

// // Print the QR code to terminal
// QRCode.toString(stringdata,{type:'terminal'},
// 					function (err, QRcode) {

// 	if(err) return console.log("error occurred")

// 	// Printing the generated code
// 	console.log(QRcode)
// })

// // Converting the data into base64
// QRCode.toDataURL(stringdata, function (err, code) {
// 	if(err) return console.log("error occurred")

// 	// Printing the code
// 	console.log(code)
// })
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.addresPS;
  //res.write(query);
  
  const data = {
    website: "www.google.com",
    policeStationName: query,
  };

  const stringData = JSON.stringify(data);

  // Converting the string-data into code-image-data
  QRCode.toDataURL(stringData, function (err, code) {
    if (err)
	return console.log("error occurred");
    // Printing the code to terminal
    console.log(code);
	res.render("scan", {
		qr_code: code,
	  });
  });


  // Converting the string-data into QR-code in terminal
  QRCode.toString(stringData,{type:'terminal'}, function (err, code) {
    if (err)
	return console.log("error occurred");
    // Printing the code to terminal
    console.log(code);
  });


  // Converting the string-data into QR-code in terminal
  QRCode.toFile('./QRCode.jpeg',stringData, function (err, code) {
    if (err)
	return console.log("error occurred");
    // Printing the code to screen
    res.sendFile(__dirname +"/result.html");
  });

  
  


});

app.listen("3000", function (req, res) {
  console.log("Servr is running at port 3000");
});

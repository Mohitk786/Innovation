const express = require("express");
const app = express();
const cors = require('cors')

const contactUsRoute = require("./routes/Contact");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
	cors({
		 // Allow requests from your specific domain
  		res.header('Access-Control-Allow-Origin', "https://irshad-interiors-git-main-mohit-kumars-projects-31358724.vercel.app/");

  		// Specify allowed methods and headers
  		res.header('Access-Control-Allow-Methods', 'GET, POST');
  		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	})
)

app.use("", contactUsRoute);



app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})


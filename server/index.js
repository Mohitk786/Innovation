const express = require("express");
const app = express();
const cors = require('cors')

const contactUsRoute = require("./routes/Contact");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
	cors({
		origin:"https://irshad-interiors-git-main-mohit-kumars-projects-31358724.vercel.app/",
		credentials:true,
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


const mailSender = require("../utils/mailSender")


// contact us email template
contactUsEmail = (
    email,
    firstname,
    lastname,
    message,
    phoneNo,
    countrycode
  ) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Message From Irshad Interiors</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
         
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <div class="message">Irshad Interiors</div>
            <div class="body">
                <p>Dear Irshad,</p>
                <p>You have received a message from Irshad Interiors regarding potential collaboration.
                </p>
                <p>Here are the details provided by client:</p>
                <p>Name: ${firstname} ${lastname}</p>
                <p>Email: ${email}</p>
                <p>Phone Number: ${countrycode+" "+phoneNo}</p>
                <p>Message: ${message}</p>
                <p>Thank you</p>
            </div>
           
    </body>
    
    </html>`
  }

exports.contactUsController = async (req, res) => {

  const { email, firstname, lastname, message, phonenumber, countrycode } = req.body

  if(!email || !firstname || !lastname || !message || !phonenumber || !countrycode){
    return res.status(400).json({
      success: false,
      message: "Enter all details..",
    })
  }

  try {
    await mailSender(
      email,
      `Message from ${firstname +" "+lastname}`,
      contactUsEmail(email, firstname, lastname, message, phonenumber, countrycode)
    )
  
    return res.json({
      success: true,
      message: "Email send successfully",
    })

  } catch (error) {

    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}

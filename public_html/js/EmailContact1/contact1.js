const form = docment.getElementById("contact1");

const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();

    let mail = new FormData(form);

    SendMail(mail);
})

const sendMail = (mail) => {
    // Supply the base url with /send for the fetch(). 
    // For my example, the base url is where I deploy the app: 
    // nodemailer-vic-lo.herokuapp.com.

    fetch("https://nodemailer-whatever.herokuapp.com/send", {
      method: "post", 
      body: mail,
  
    }).then((response) => {
      return response.json();
    });
  };
  

//   Then run 
// $ npm init
// 
// install the following dependencies by running
// $ npm install express nodemailer dotenv multiparty
// 
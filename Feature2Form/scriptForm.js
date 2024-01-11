// get the form and its elements
const form = document.getElementById("skillRegistrationForm");
const firsName = document.getElementById("firsName");
const lasName = document.getElementById("lasName");
const phNum = document.getElementById("phNum");
const emailAdd = document.getElementById("emailAdd");
const button = document.getElementById("submit");
// add eventlistener and disable the refresh page default action for the submit button so we can replace it with some other destination.  fetch(event) is the function from Zapier to transport the data to their site to be emailed to my company email on my ISP's site.  "submit" is the input type to be processed.
form.addEventListener("submit", fetch(event) {
    event.preventDefault();
    const formData = new FormData(skillRegistrationForm);
});
// package the data sent through the form so it can be transported in the zap to zapier and thence to the company email:
// proprietary code from Zapier for the transfer of data using their webhook process:
fetch("https://hooks.zapier.com/hooks/etc/specificconnectiontomyzapieraccount", {
    method: "POST",
    body: formData
}).then(response => {}).catch;
//message for the user after they submit:
document.GetElementById(afterMessageToUser).innerText = "Thank you for registering for this skill, we are so appreciative of your help in our efforts to [several word succinct summary of organization mission].  We will reach out to you within three business days for a short intake process. After that, you will be able to register in this skill for events on the events page, and get out there working with the other volunteers and our staff! Don't forget to register for the other skills you'd like to do in your volunteering with us too!  Eyzeh Tzaddick!  איזה צדיק!!"
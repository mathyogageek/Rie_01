// Create an obhect representing the <form> Element

let ObjFormEmail=document.getElementById("formSendEmail");

//Define the code(Function/Method) that collects , processes, sends the message
function fnSendEmail(event){
    event.preventDefault(); //Stops the refresh
    console.log("Gathering data...");
    //Read the values of the <inputs> from the <form>
    let ObjName = document.getElementById("formName").value;
    let ObjEmail = document.getElementById("formEmail").value;
    let ObjMessage = document.getElementById("formMsg").value;
    //Check what was typed
    console.log(ObjName, ObjEmail, ObjMessage);

    //Combine the 3 pieces of data into one sentence
    let msgFeedback ="Thank you  "  + ObjName + " (at " + ObjEmail  + " ) Your message has been received: " + ObjMessage;

    // popup to confirm with the user
    window.alert(msgFeedback);
} //Define what it means to send an email
//Detect when the <form aka ObjFormEmial is submitted
ObjFormEmail.addEventListener("submit", function(event){
    fnSendEmail(event);


});

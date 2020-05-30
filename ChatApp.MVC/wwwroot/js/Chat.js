"use strict";


const connection = new signalR.HubConnectionBuilder().withUrl("/Chathub").build();

document.getElementById("sendButton").disabled = true;

connection.on("Broadcast", function (message , user) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedmessage = user + " Says : " + msg;
    var li = document.createElement("li");
    li.textContent = encodedmessage;
    document.getElementById("messagesList").appendChild(li);
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) { return console.error(err.toString()) });

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("SentToAll", message, user).catch(function (err) { return console.error(err.toString()) });
});
 

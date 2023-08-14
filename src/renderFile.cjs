const { ipcRenderer: ipc } = require('electron');


function sendForm(event) {
  event.preventDefault(); // stop the form from submitting
  let firstname = document.getElementById("selectbox").value;
  ipc.send("form-submission", firstname);
}

let headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = "#4AB069";

let footerContainer = document.getElementById("footer-container");
footerContainer.style.backgroundColor = "#123533";

let sectionEmergency = document.querySelectorAll('section.emergency-tasks');
sectionEmergency[0].style.margin = "0";
sectionEmergency[0].style.padding = "0";

let sectionNoEmergency = document.querySelectorAll('section.no-emergency-tasks');
sectionNoEmergency[0].style.margin = "0";
sectionNoEmergency[0].style.padding = "0";


let emergencyTasks = document.querySelectorAll(".emergency-tasks div");
for (let index = 0; index < emergencyTasks.length; index += 1) {
  emergencyTasks[index].className = "emergency-tasks";
  emergencyTasks[index].style.backgroundColor = "#F29F85";
}

let emergencyH3 = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyH3.length; index += 1) {
  emergencyH3[index].className = "emergency-tasks";
  emergencyH3[index].style.backgroundColor = "#A50BF3";
  emergencyH3[index].style.maxHeight = "15%";
  emergencyH3[index].style.maxWidth = "90%";
}

let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks div");
for (let index = 0; index < noEmergencyTasks.length; index += 1) {
  noEmergencyTasks[index].className = "no-emergency-tasks";
  noEmergencyTasks[index].style.backgroundColor = "#F9DB5E";
}

let noEmergencyH3 = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noEmergencyH3.length; index += 1) {
  noEmergencyH3[index].className = "no-emergency-tasks";
  noEmergencyH3[index].style.backgroundColor = "#232525";
  noEmergencyH3[index].style.maxHeight = "15%";
  noEmergencyH3[index].style.maxWidth = "90%";
}
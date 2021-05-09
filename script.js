// Everything is set to 0 so it can change based on user input
let area = 0
let length = 0
let width = 0

// This makes the button react once it is clicked
document.getElementById('button').addEventListener('click', math)

// These are the commands to calculate the area and it will send an alert as well as change the 'Answer' text to the calculated answer that popped up in the alert
function math () {
  length = document.getElementById('input').value
  width = length
  area = length * width
  document.getElementById('answer').innerHTML = (area)
  alert(area)
}

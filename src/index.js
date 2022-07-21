document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const toDoButton = document.getElementById('toDoButton');
const newTask = document.getElementById('new-task-description');
const ul = document.getElementById('tasks');
const resetList = document.getElementById('resetList');
const select = document.getElementById('priority');
const list = document.getElementById('list');
//creating yellow Ul
let yellowUl = document.createElement('ul');
yellowUl.setAttribute('id', 'yellowUl');

//creating green Ul
let greenUl = document.createElement('ul');
greenUl.setAttribute('id', 'greenUl');

list.appendChild(yellowUl);
list.appendChild(greenUl);






//Create New Task Button
toDoButton.addEventListener('click', function(event) {
  //Prevent Page from refreshing when you click the button
  event.preventDefault();
  if (newTask.value !== '') {
    //Create X button
    const xButton = document.createElement('button');
    xButton.innerText = 'X';
    //creating LI element
    let li = document.createElement('li');
    //inserts priority color
    if(select.value === 'High') {
      li.style.backgroundColor = 'red'
    } else if(select.value === 'Medium') {
      li.style.backgroundColor = 'yellow'
    } else {
      li.style.backgroundColor = 'green'
    };
    //putting input value into li element
    li.innerText = newTask.value;
    //making x button remove child node of ul 
    xButton.addEventListener('click', function(){
      ul.removeChild(li);
    });
    // appending xbutton to li element
    li.append(xButton);
    // appending li element to ul element
    if (select.value === 'High') {
      ul.append(li);
    } else if(select.value === 'Medium') {
      yellowUl.append(li)
    } else if(select.value === 'Low') {
      greenUl.append(li)
    }
    //everytime button is clicking making the input empty
    newTask.value = '';
    
  }
})

//reseting the whole list
resetList.addEventListener('click', function(event) {
  event.preventDefault();
  ul.innerHTML = ''
  newTask.value = '';
})




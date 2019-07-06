var enterButton = document.getElementById('enter');
var input = document.getElementById('userInput') ;
var ul = document.querySelector('ul');
var listItem = document.getElementsByTagName('li');

function inputLength(){
  return input.value.length;
}

function liLength() {
  return listItem.length;
}

function createListElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function itemDone() {
    li.classList.toggle('done');
  }
    // change color of item
       li.addEventListener("click",itemDone);


       var button2 = document.createElement('button');
       button2.appendChild(document.createTextNode("X"));
       li.appendChild(button2);
       button2.addEventListener("click", deleteItem);

       function deleteItem() {
               li.classList.add('delete');
     }

}

function addItemAfterClick() {
  if (inputLength() > 0) {
     createListElement();
   }
}

function addItemAfterEnter() {
  if (inputLength() > 0 && event.which ===13) {
     createListElement();
   }
}

enterButton.addEventListener("click",addItemAfterClick);

input.addEventListener("keypress",addItemAfterEnter);

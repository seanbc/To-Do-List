var enterButton = document.getElementById('enter');
var input = document.getElementById('userInput') ;
var ul = document.querySelector('ul');
var listItem = document.getElementsByTagName('li');
var holder = [];



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

      // function arrayRemove() {
      //
      //   for( var i = 0; i < holder.length; i++){
      //      if ( arr[i] === deleteValue) {
      //        arr.splice(i, 1);
      //        i--;
      //      }
      //   }
      // }

       function deleteItem() {
          li.classList.add('delete');

     }

}



function checkRepition(){
var newInput = input.value;
    if (holder.indexOf(newInput) > -1) {
      alert("You added that one already!");
    } else {
    holder.push(input.value);
    createListElement();
    }
  }


function addItemAfterClick() {
  if (inputLength() > 0) {
     checkRepition();
   }
}

function addItemAfterEnter() {
  if (inputLength() > 0 && event.which ===13) {
    checkRepition();
   }
}

enterButton.addEventListener("click",addItemAfterClick);

input.addEventListener("keypress",addItemAfterEnter);

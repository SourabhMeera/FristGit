/*var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
headerTitle.textContent = 'TRY';
header.style.borderBottom = 'solid 3px #000';

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main');
header.style = 'color:green';

var items = document.getElementsByClassName('list-group-item');
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';

for(var i = 0; i < items.length; i++)
{
    items[i].style.fontWeight = 'bold';
    items[i].style.color = 'red';

}



var li = document.getElementsByTagName('li');
li[2].textContent = 'Exhausted';
li[2].style.fontWeight = 'bold';
li[2].style.backgroundColor = 'green';

for(var i = 0; i < li.length; i++)
{
    li[i].style.fontWeight = 'bold';
    li[i].style.color = 'yellow';

}
li[4].style.color = 'green';*/
/*var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input')
input.value = 'Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style = "display: none";*/

/*var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Bored';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'red';


var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i < odd.length; i++)
{
    odd[i].style.background = 'green';
}*/

/*var itemList = document.querySelector('#items');
//parent element 
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//firstchild &firstchildelement
console.log(itemList.firstChild);
itemList.firstChild.textContent = 'Hey';
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1'

//lastchild &lastchildelement
console.log(itemList.lastChild);
itemList.lastChild.textContent = 'How';
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'R U';

//nextsibling & nextsiblingelement
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

//previoussibling & prevsiblingelement
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createelement,setattribute,createtextnode,appendchlid
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';

newDiv.setAttribute('title', 'Hello Div');
var newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);*/


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItemi = document.getElementById('itemi').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItemi));


  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var itemi = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || itemi.toLowerCase().indexOf(text) != -1  ){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}






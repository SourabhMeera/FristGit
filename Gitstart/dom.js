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

var itemList = document.querySelector('#items');
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
container.insertBefore(newDiv,h1);






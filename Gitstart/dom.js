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

var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Bored';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'red';


var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i < odd.length; i++)
{
    odd[i].style.background = 'green';
}


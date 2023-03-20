/*var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
headerTitle.textContent = 'TRY';
header.style.borderBottom = 'solid 3px #000';

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main');
header.style = 'color:green';*/

var items = document.getElementsByClassName('list-group-item');
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';

for(var i = 0; i < items.length; i++)
{
    items[i].style.fontWeight = 'bold';
    items[i].style.color = 'red';

}
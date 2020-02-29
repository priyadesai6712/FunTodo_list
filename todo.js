
var form=document.getElementById("items");
var items=document.getElementById("list");


form.addEventListener("submit",additem);
items.addEventListener("click",removeItem);

function additem(e)
{
e.preventDefault();

var newlist=document.getElementById("init").value;
console.log(newlist);

var li=document.createElement("li");
li.className="link";

li.appendChild(document.createTextNode(newlist));
console.log(li);
var dbtn=document.createElement("button");
dbtn.className = "btn";
dbtn.appendChild(document.createTextNode("X"));
li.appendChild(dbtn);
items.appendChild(li);
form.reset();
}

function removeItem(e) {
if (e.target.classList.contains("btn")) {
if (confirm("Are You Sure?")) {
var li = e.target.parentElement;
items.removeChild(li);
}
}
}
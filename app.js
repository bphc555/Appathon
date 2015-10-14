window.addEventListener("load", function() {
  console.log("Hello World!");
});

function myFunction()
{
  var elem = document.getElementById("demo");
  elem.onmouseover="this.style.color=green";
  elem.onmouseout ="this.style.color=red";
}

function showAlert()
{
  alert("Hey There!!")
}

function changeColor()
{ //var c2;
  var c1 = document.getElementById("demo").style.color;
  console.log(document.getElementById("demo").style.color);
  if(c1.match("red"))
   { c1 = "green";}
  if(c1.match("green"))
  { c1 = "red";}
  var c2 = "green";
  document.getElementById("demo").style.color = c2;
}
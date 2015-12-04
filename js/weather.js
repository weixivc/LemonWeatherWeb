function loadXMLDoc() {
  xmlhttp = new XMLHttpRequest();
  xmlhttp.addEventListener("load",myFunction,null);
  var city = document.getElementById("city").value;
  var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&mode=xml&appid=e4a2d6a1cb0532068e03a6dbcae1d005"
  xmlhttp.open("GET", weatherURL, true);
  xmlhttp.send();
}

function myFunction() {
    var xmlDoc = xmlhttp.responseXML.getElementsByTagName("current");
    var city = xmlDoc[0].getElementsByTagName("city")[0].getAttribute("name");
    var temp = xmlDoc[0].getElementsByTagName("temperature")[0].getAttribute("value");
    var con = xmlDoc[0].getElementsByTagName("weather")[0].getAttribute("value");
    var newHTML = city+": "+temp+", "+con;
    document.getElementById("details").innerHTML= newHTML;

}


function clearInfo() {
    document.getElementById("city").value="";
    document.getElementById("details").innerHTML="Weather Detail";
}
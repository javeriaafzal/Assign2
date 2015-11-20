function loadWeather() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("weatherp").innerHTML = xhttp.responseText;
      var json=JSON.parse(xhttp.responseText);
    
      document.getElementById("weatherp").innerHTML = json.main.temp+"°C";
	  document.getElementById("wdisplay").innerHTML = "Current City: " + json.name;
	  document.getElementById("wdisplay1").innerHTML = "Current Temperature: " + json.main.temp+"°C";
	  document.getElementById("wdisplay2").innerHTML = "Minimum Temperature: " + json.main.temp_min+"°C";
	  document.getElementById("wdisplay3").innerHTML = "Maximum Temperature: " + json.main.temp_max+"°C";
	  
	  document.getElementById("wdisplay5").innerHTML = "Humidity: " + json.main.temp_max+" units";
		
    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Islamabad&units=metric&appid=2de143494c0b295cca9337e1e96b00e0", true);
  xhttp.send();
}
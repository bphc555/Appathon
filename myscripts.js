
//var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
//var network = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
//screen.mozLockorientation("portrait");
/*$(document).ready(
  function()
  {
    document.getElementById('dynamicdata').innerHTML = "The battery level is at: " + net.bandwidth + "%";
  }
);*/

/*$(document).ready(
  function()

  {
    if(level<95%){
    	$(this).getBatteryStatus();
    }
  }
);*/


function getData()
{ //document.getElementById("dynamicdata").innerHTML = "The battery is at: " + battery.level*100 + "%";
 document.getElementById("dynamicdata").innerHTML = "The current bandwidth is: " + network.bandwidth + "MbPs";
}

function setURL(url)
{ 
	document.getElementById('iframe').src = url;
    //<a href="#pageone" data-rel="close" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-a ui-icon-delete ui-btn-icon-left">Close panel</a>

}

function goBack() {
    //document.getElementById('iframe').src = url;
    //iframe.contentWindow.history.go(-1);
    document.getElementById('iframe').history.back();
}

function share()
	{
    var share = document.querySelector("#share");
    if (share) {
        share.onclick = function () {
            new MozActivity({
                name: "share",
                data: {
                    //type: "url", // Possibly text/html in future versions,
                    number: 1,
                    url: "http://robertnyman.com"
                }
            });
        };
    }
}

var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
var level = battery.level*100 ;
var levelstring = level + "%";

function getBatteryStatus()
{ 
	//document.getElementById("battery").innerHTML = "The battery is at: " + battery.level*100 + "%";
	 if ("Notification" in window) {
                // Firefox OS 1.1 and higher
                if (Notification.permission !== "denied") {
                    Notification.requestPermission(function (permission) {
                        if(!("permission" in Notification)) {
                            Notification.permission = permission;
                        }
                    });
                }

                if (Notification.permission === "granted") {
                    new Notification("Battery Status", {
                        body : level
                    });
                }
            }
            else {
                // Firefox OS 1.0
                var notify = navigator.mozNotification.createNotification(
                    "Battery Status",
                    level
                );
                notify.show();
            }
        
    

 //document.getElementById("dynamicdata").innerHTML = "The current bandwidth is: " + network.bandwidth + "MbPs";
}

function setHome()
{ 
	//console.log("HEre");
	//burl = purl;
	//purl = url;
    document.getElementById('iframe').src = '#page2';
    //<a href="#pageone" data-rel="close" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-a ui-icon-delete ui-btn-icon-left">Close panel</a>

}


function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}


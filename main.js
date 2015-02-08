function getCoords(){
    //работает только с веб-сервера и не работает локально
    //console.log("in geolocation");
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            document.getElementById("display").value="c-ed:"+latitude+","+longitude;
        });

    } else {
        return null;
    }
}

function getLocation() {
    console.log("in getLocation");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log("true");
    } else {
        console.log ( "Geolocation is not supported by this browser.") ;
    }
}

function showPosition(position) {
    console.log("in showPosition");
    console.log ("Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude);
}

var main=function(){
     //console.log("x="+c[0]+",y="+c[1]);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function() {
        if (this.readyState != 4) return; // Not there yet
        if (this.status != 200) {
            // Handle request failure here...
            return;
        }
        // Request successful, read the response
        console.log(this.status);
        console.log(this.statusText);
        this.jsondata=eval("("+this.responseText+")");
        console.log("ip:="+this.jsondata.origin);
        // ... and use it as needed by your app.
    }
    req="http://httpbin.org/ip";
    xhr.open("GET", req, true);
    xhr.send();

}


main();
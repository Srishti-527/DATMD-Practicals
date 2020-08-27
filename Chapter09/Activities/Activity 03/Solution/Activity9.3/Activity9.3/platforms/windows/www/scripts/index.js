// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        var options = { enableHighAccuracy: true };
        navigator.geolocation.watchPosition(onSuccess, onError, options);

        //watchID.movementThreshold = 10;
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

function onSuccess(pass) {

    document.getElementById("latitude").innerHTML = pass.coords.latitude;
    document.getElementById("longitude").innerHTML = pass.coords.longitude;
    document.getElementById("accuracy").innerHTML = pass.coords.accuracy;
    document.getElementById("status").innerHTML = "Location is available.";
    
}
function onError(e) {
    
    switch(e.code)
    {
        case error.PERMISSION_DENIED:
            document.getElementById(status).innerHTML="Access to your location is turned off. Change your settings to turn it back on.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById(status).innerHTML = "Data from location services is currently unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById(status).innerHTML = "Location could not be determined within a specified timeout period.";
            break;
        default:
            break;
    }
}
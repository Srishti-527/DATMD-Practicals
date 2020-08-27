// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        navigator.compass.watchHeading(onSuccess, onError);
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
    var heading = pass.magneticHeading;
    var needleImg = document.getElementById("needles");
    needleImg.style.transform = "rotate(" + heading + "deg)";

    if (heading > 337.5 || heading <= 22.5) {
        document.getElementById("txtCompassHeading").innerHTML = "N";
    }
    else if (heading > 22.5 && heading <= 67.5) {
        document.getElementById("txtCompassHeading").innerHTML = "NE";
    }
    else if (heading > 67.6 && heading <= 112.5) {
        document.getElementById("txtCompassHeading").innerHTML = "E";
    }
    else if (heading > 112.6 && heading <= 157.5) {
        document.getElementById("txtCompassHeading").innerHTML = "SE";
    }
    else if (heading > 157.6 && heading <= 202.5) {
        document.getElementById("txtCompassHeading").innerHTML = "S";
    }
    else if (heading > 202.6 && heading <= 247.5) {
        document.getElementById("txtCompassHeading").innerHTML = "SW";
    }
    else if (heading > 247.6 && heading <= 292.5) {
        document.getElementById("txtCompassHeading").innerHTML = "W";
    }
    else if (heading > 292.6 && heading <= 337.5) {
        document.getElementById("txtCompassHeading").innerHTML = "NW";
    }

}
function onError() {
    alert("No direction found");
}

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
        document.addEventListener('resume', onResume.bind(this), false);
        var option = { frequency: 2000 };
       // navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        
        navigator.accelerometer.watchAcceleration(onSuccess, onError, option);
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

function onSuccess(var1)
{
    document.getElementById("div1").innerHTML = var1.x;

    document.getElementById("div2").innerHTML = var1.y;

    document.getElementById("div3").innerHTML = var1.z;
}
function onError()
{

}
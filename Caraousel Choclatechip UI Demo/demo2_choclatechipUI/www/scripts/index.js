// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";
    if ($.isWin) {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-win-3.9.2.css');
    } else if ($.isAndroid) {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-android-3.9.2.css');
    } else if ($.isiOS) {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-ios-3.9.2.css');
    } else {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-win-3.9.2.css');
    }
    var CarouselData = [
        "<h2>Panel 1</h2><img src='images/cake1.jpg'>",
        "<h2>Panel 2</h2><img src='images/cake2.png'>",
        "<h2>Panel 3</h2><img src='images/cake3.jpg'>",
        "<h2>Panel 4</h2><img src='images/cake4.jpg'>",
        "<h2>Panel 5</h2><img src='images/drink1.jpg'>",
        "<h2>Panel 6</h2><img src='images/drink2.jpg'>"
    ];

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };
    $(function () {
        $.UISetupCarousel({
            target: '#carousel',
            panels: CarouselData,
            loop: true,
            pagination: true
        });
    });

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();
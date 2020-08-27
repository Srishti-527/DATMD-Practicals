// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    var startLoc = null;

    if ($.isWin) {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-win-3.8.5.css');
    } else if ($.isAndroid) {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-android-3.8.5.css');
    } else if ($.isiOS) {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-ios-3.8.5.css');
    } else {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-android-3.8.5.css');
        //document.getElementById('themeStylesheet').setAttribute('href', './css/chui-win-3.8.5.css');
    }
   
    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        // $.UITabbar(tabbarOP);



        $('#home').on('swipeleft', function () {
            alert('hello1');
            $.UIGoToArticle('#fav');
        });
        $('#fav').on('swipeleft', function () {
            $.UIGoToArticle('#log');
        });
        $('#log').on('swipeleft', function () {
            $.UIGoBackToArticle('#home');
        });

        $('#home').on('swiperight', function () {
            $.UIGoToArticle('#log');
        });
        $('#fav').on('swiperight', function () {
            $.UIGoBackToArticle('#home');
        });
        $('#log').on('swiperight', function () {
            $.UIGoBackToArticle('#fav');
            
        });


        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    

    $("body").on($.eventStart, function (e) {
        $(".msg").text("Swipe left/right to navigate among pages");
        //if (e.originalEvent.touches.length == 1) { // one finger touch 
        //    // Remember start location. 
        //    var touch = e.originalEvent.touches[0];
        //    startLoc = { x: touch.pageX, y: touch.pageY };

        //}

        //startLoc = 1;

        $(this).on($.eventMove, function (e) {
            //if (startLoc) {
            //    var touch = e.originalEvent.touches[0];
            //    // Check if the horizontal movement is bigger than the vertical movement. 
            //    if (Math.abs(startLoc.x - touch.pageX) >
            //    Math.abs(startLoc.y - touch.pageY)) {
                // Prevent default, like scrolling. 
                $(".msg").text("Prevent");

                    e.preventDefault();
             //   }
             //   startLoc = null;
            //}
        });

        $(this).on($.eventEnd, function (e) {
            $(".msg").text("");

        });

        $(this).on($.eventCancel, function () {

            $(".msg").text("");

        });
    });



    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

})();


// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    //var startLoc = null;

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
         $('#Beach1').on('swipeleft', function (e) {
              $.UIGoToArticle('#nature1');
        });
        $('#nature1').on('swipeleft', function () {
            
            $.UIGoToArticle('#sky1');
        });
        $('#sky1').on('swipeleft', function () {
            
            $.UIGoBackToArticle('#Beach1');
        });

        $('#Beach1').on('swiperight', function () {
            
            $.UIGoToArticle('#sky1');
        });
        $('#nature1').on('swiperight', function () {
            
            $.UIGoBackToArticle('#Beach1');
        });
        $('#sky1').on('swiperight', function () {
            
            $.UIGoBackToArticle('#nature1');
            
        });
         $("body").on($.eventStart, function (e) {
        $(".msg").text("Swipe left/right to navigate among pages");
       
        $(this).on($.eventMove, function (e) {
             e.preventDefault();
           
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


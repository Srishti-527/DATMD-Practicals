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
        
        var data = [
       { FoodChain: "Dominos", FoodItem: "Pizza"},
       { FoodChain: "Pizza Hut", FoodItem: "Pizza" },
       { FoodChain: "Mc Donald's", FoodItem: "Burger" },
       { FoodChain: "Applebee's", FoodItem: "Salads" },
       { FoodChain: "Auntie Anne's", FoodItem: "Pretzels" },
       { FoodChain: "Bob Evans Restaurants", FoodItem: "Baked goods" },
       { FoodChain: "California Pizza Kitchen", FoodItem: "Pizza" },
      ];
        $('#btn1').on('tap', function () {
            
            var Temp = '<li>[[= data.FoodChain ]]<h2> [[= data.FoodItem]]</h2></li>';
            var myTmp = $.template(Temp);
            data.forEach(function (items) {
                $('#uolist').append(myTmp(items));
            })
            $(this).attr('disabled', true);

        });

       
        

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();
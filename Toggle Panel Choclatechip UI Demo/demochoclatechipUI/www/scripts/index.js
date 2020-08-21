// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
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
    var data = [
        {
            "name": "Computers",
            "description": "This is computers tab."
        },
        {
            "name": "Laptops",
            "description": "This is laptops tab."
        },
        {
            "name": "Mobiles",
            "description": "This is mobiles tab."
        }
    ];
   
    var getSelectedItem = function (event) {
        var selectedItem = $(event.target).index();
        renderItemSelection(selectedItem);
    };

    //defines the options for creating the segmented control
    var segmentOptions = {
        id: 'segmentItems',
        labels: ['Computers', 'Laptops', 'Mobiles']
    };
    // create the segmented control   
    var mySegmentedCtrl = $.UICreateSegmented(segmentOptions);

    // Appends the segment items to the segmentedPanel div 
    $('#segPanel').append(mySegmentedCtrl);

    function renderItemSelection(index) {
        $('#contentDiv h3').text(data[index].description)
    };
    $('#segmentItems').UISegmented({
        selected: 0,      	    // specifies the selected tab
        callback: getSelectedItem // specifies the callback
    });


    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    function onDeviceReady() {
        renderItemSelection(0);
       
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
      

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };
    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();
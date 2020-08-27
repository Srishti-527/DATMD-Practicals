// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";
    var taskInputModel = function () {
        var description = '';

        $.subscribe('desc-input-value', function (event, data) {
            description = data;
        });
        this.get = function () {
            return description;
        }
        this.set = function (data) {
            description = data;
            $.publish('desc-input-value', data);
            $.publish('desc-stored-value', data);
        }
    };
    var event = new taskInputModel();
    var events = [];

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        document.getElementById('addBtn').addEventListener('click', onAdd.bind(this), false);
        document.getElementById('saveBtn').addEventListener('click', onSave.bind(this), false);
        document.getElementById('main').addEventListener('')
        showEventList();

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
    function onAdd() {
        $.UIGoToArticle("#addTask");
    };

    $("#txtTaskDesc").on('input', function (e) {
        $.publish('desc-input-value', $(this).val());
    });

    var updateStoredDesc = $.subscribe('desc-stored-value', function (event, data) {
        $('#txtTaskDesc').val(data);
    });
   
    function onSave() {
        var t = { description: event.get() }
        events.push(t);
        event.set("");
        showEventList();
        $.UIGoBackToArticle("#main");
    };
    function showEventList() {
        if (events.length == 0) {
            document.getElementById("headerMain").innerText = "No events.";
        }
        else {
             $("#eventList").empty();
           
            document.getElementById("headerMain").innerText = "Events List";

            var Temp = '<li>[[= data.description ]]</li>';
            var myTmp = $.template(Temp);
            events.forEach(function (item) {
                $("#eventList").append(myTmp(item));
                
            });
        }
    }

})();

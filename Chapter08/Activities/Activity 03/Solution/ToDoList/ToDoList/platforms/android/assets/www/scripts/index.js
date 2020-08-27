// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

//--localtion for local storage
//C:\Users\jyoti.mittal\AppData\Local\Google\Chrome\User Data\Default\Local Storage\leveldb
//--or can check in browser : Fn+F12--application->local storage


(function () {
    "use strict";
    var taskInputModel = function (){
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
    var task = new taskInputModel();
    var tasks = [];
    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    
    if ($.isWin) {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-win-3.8.5.min.css');
        $('#mainNav').append('<div class="segmented horizontal align-flush"><button id="addBtn">Add Task</button></div>');
        $('#addTaskNav').append('<div class="segmented horizontal align-flush"><button id="saveBtn">Save Task</button></div>');
    } else {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-android-3.8.5.min.css');
        $('#mainNav').append('<button id="addBtn">Add Task</button>');
        $('#addTaskNav').append('<button id="saveBtn">Save Task</button>');

    }


    function onDeviceReady() {

        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);

        if (localStorage.toDoList) {

            tasks = JSON.parse(localStorage.toDoList);
        }
        showTaskList();
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    $('#addBtn').on('singletap', function () {
        $.UIGoToArticle("#addTask");
    });

    $("#txtTaskDesc").on('input', function (e) {
        $.publish('desc-input-value', $(this).val());
    });

    var updateStoredDesc = $.subscribe('desc-stored-value', function (event, data) {
        $('#txtTaskDesc').val (data);
    });


    $.UIBindData();

    $('#saveBtn').on('singletap', function(){
        var t = { description: task.get() }
        tasks.push(t);
        localStorage.toDoList = JSON.stringify(tasks);
        task.set("");
        showTaskList();
        $.UIGoBackToArticle("#main");
    });

    function showTaskList(){
        if (tasks.length == 0) {
            $("#taskList").empty();
            document.getElementById("headerMain").innerText = "No tasks exist.";
        }
        else {
            $("#taskList").empty();
            document.getElementById("headerMain").innerText = "My Tasks";

             var Temp = '<li>[[= data.description ]]</li>';
             var myTmp = $.template(Temp);
            tasks.forEach(function (item) {
                $("#taskList").append(myTmp(item));
       
            });

           
        }

    };

} )();
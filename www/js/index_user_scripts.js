/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {


     /* button  #btn1 */


        /* button  #btn1 */


        /* button  #btn1 */
    $(document).on("click", "#btn1", function(evt)
    {
        /* your code goes here */
        document.getElementById("rdbInput1").checked = true;
        document.getElementById("cb1").checked = true;
        alert('11');
    });

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

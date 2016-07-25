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
     var numClick=0;
    $(document).on("click", "#btn1", function(evt)
    {
        /* your code goes here */
        numClick = numClick+1;
        if(numClick==1){
            document.getElementById("btnChecked1").style.background='#FFFFFF';
        }
        if(numClick==2){
            document.getElementById("btnChecked2").style.background='#FFFFFF';
        }
        if(numClick==3){
            document.getElementById("btnChecked3").style.background='#FFFFFF';
        }
        if(numClick==4){
            document.getElementById("btnChecked4").style.background='#FFFFFF';
        }
    });

        /* button  #btn2 */
    $(document).on("click", "#btn2", function(evt)
    {
        /* your code goes here */
    });

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

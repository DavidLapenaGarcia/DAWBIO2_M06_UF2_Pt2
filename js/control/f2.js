/*
@name= (document).ready()
@author= David Lapena Garcia
@version= 1.0
@description = Starts the app. First, shows the correct frame and hides the others
Then, makes the logo dance.
@date = 18-12-2018
@params= none
@return = none
*/

$(document).ready(function (event){
  // DUBTE: com fer hide() mitjançant window.frames y un .each() o for(){}; ?
  $("#charged").hide();
  $("#toCharge").show();

  $('#chargeData').click(function(event){
        event.preventDefault(); 
        var one = $("#one").val();
        var two = $("#two").val();
        var tree = $("#tree").val();
        var colo = window.frames[0].$("#content1").html(one);
        var colo = window.frames[1].$("#content1").html(two);
        var colo = window.frames[2].$("#content1").html(tree);
        seeCharge(); 
  });
});

function seeCharge(){
    $("#charged").show();
    $("#toCharge").hide();
}
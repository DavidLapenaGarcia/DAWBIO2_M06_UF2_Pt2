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
  //logoCrazy();
  $('#action').click(function(event){
        event.preventDefault(); 
        var colo = window.parent.frames[0].$("#color").val();
        var position = window.parent.frames[1].$("#position").val(); 
        changeColor(position, colo); 
  })
});

function changeColor(positio, colo){
  colo = getColor(colo);
  switch(positio){
    case "r":
      window.parent.$("#frame1").css("background-color",colo);
    break;

    case "c":
      window.parent.$("#frame2").css("background-color",colo);
    break;

    case"l":
      window.parent.$("#frame3").css("background-color",colo);
    break;

    default:
      alert("default");

  }
};

function getColor(colo){
  switch(colo){
    case "red":
      colo = "red"; 
    break;

    case "blue":
      colo = "blue";
    break;

    case"yellow":
      colo = "yellow";
    break;

    default:
      colo = "#d5dbdb";
  }
  return colo;
}
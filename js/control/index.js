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
  ShowFormType();
  //logoCrazy();
  $(".exercices").click(function(event){
      event.preventDefault(); 
      selected = $(this).val();
      GoToSelectedFunction(selected);
  })
});

function GoToSelectedFunction(selected){
  switch(selected) {
    case "f0":
      ShowFormType();
      break;
    case "f1":
      hideAll();
      $("#f1").show();
      break;
    case "f2":
      hideAll();
      $("#f2").show();
      break;
    case "f3":
      hideAll();
      $("#f3").show();
      break;
    case "f4":
      hideAll();
      $("#f4").show();
      break;
    case "f5":
      hideAll();
      $("#f5").show();
      break;
    default:
      alert("This button are making problems: "+selected);
  }
};

function hideAll(){
  // DUBTE: com fer hide() mitjançant window.frames y un .each() o for(){}; ?
  $("#mainExercice").hide()
  $("#ProductFrame").hide();
  $("#TypeFrame").hide();
  $("#f1").hide();
  $("#f2").hide();
  $("#f3").hide();
  $("#f4").hide();
  $("#f5").hide();
}
/*
@name= ShowFormType
@author= David Lapena Garcia
@version= 1.0
@description = Hides the Product-frame and shows the Type-frame
@date = 16-12-2018
@params= none
@return = none
*/
function ShowFormType(){
  hideAll();
  $("#mainExercice").show()
  $("#TypeFrame").show();
};
/*
@name= logoCrazy
@author = David Lapena Garcia
@version = 1.0
@description = Makes the logo dance.
@date = 18-12-2018
@params= none
@return = none
*/
function logoCrazy(){
    $("#Logo").animate({height: '100%', opacity: '0.4'}, "slow");
    $("#Logo").animate({width: '100%', opacity: '0.8'}, "slow");
    $("#Logo").animate({height: '300px', opacity: '0.4'}, "slow");
    $("#Logo").animate({width: '300px', opacity: '1'}, "slow");
};


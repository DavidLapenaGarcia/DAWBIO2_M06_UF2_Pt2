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
$(document).ready(function (){
  ShowFormType();
  //logoCrazy();
});

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
  $("#ProductFrame").hide();
  $("#TypeFrame").show();
  //$("#ProductFrame").show();
  //$("#TypeFrame").hide();
};
/*
@name= logoCrazy
@author= David Lapena Garcia
@version= 1.0
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


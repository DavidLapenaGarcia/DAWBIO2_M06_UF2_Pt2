/*
@name= (document).ready()
@author= David Lapena Garcia
@version= 1.0
@description = Starts the popup charging the needed data.
@date = 18-12-2018
@params= none
@return = none
*/
$(document).ready(function (){
	loadFromOpener();
});

/*
@name= loadFromOpener
@author= David Lapena Garcia
@version= 1.0
@description = Charge the needed data from the opener windows.
@date = 18-12-2018
@params= none
@return = none
*/
function loadFromOpener(){
	console.log(window.opener);
	var crhomosomeNum = window.opener.$("#crhNumber").text();
	var dnaSentence = window.opener.$("#Dna").val();
	$("#crhNumber").html(crhomosomeNum);
	$("#Dna").html(dnaSentence);
};

/*
@name= closePopupRegistration
@author= David Lapena Garcia
@version= 1.0
@description= Close the popup
@date = 11-11-2018
@params= none
@return = none
*/
function closePopupRegistration(){
  window.close("./pop-Up/popUpWindows.html", "_blank","width=800px", "height=800px");
}



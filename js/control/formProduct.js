/*
Main JQ Control for formProductFrame.html page.
*/

/*
@name        = $(document).ready()
@author      = David Lapena Garcia
@version     = 1.0
@description = Makes changes at the time of loading the page.
				If register button is clicked, cancels the default event's values on form.
				Next, gets all the inputs fields and call to make an Product's array with that values.
				If the values are correct, call to confirm register. If not, displais an error message.

				If the cancel button is cliked, it call to return to the TypeFrame.
@date        = 18-12-2018
@params      = none
@return      = none
*/
$( document ).ready(function(event) {
    $("#register").click(function(event){
        event.preventDefault(); //witchout it Product table disapears.
		var names = $(".names").map(function() {
                    return $(this).val();
                }).get();
		var codes = $(".codes").map(function() {
						return $(this).val();
					}).get();
		var testeds = $(".testeds").map(function() {
						return $(this).is(':checked');
					}).get();
		var type = $("#type").html();

		var products = productsArray(type, names, codes, testeds);
		if(products[0]){
			$("#messageToUser").html("");
			confirmRegister();
		}else{
			$("#messageToUser").html(products[1]);
		}
    });

	$("#toTypeFrame").click(function(){
        toTypeFrame();
    });
});

/*
@name        = confirmRegister
@author      = David Lapena Garcia
@version     = 1.0
@description = This function ask to confirms the registration by the user.
@date        = 18-12-2018
@params      = none
@return      = none
*/
function confirmRegister() {
	if (confirm("Confirm registration?") == true) {
		window.open("./../../pop-Up/popIntroduceProducts.html", "_blank","width=1300px", "height=500px");        
		return true;
	} else {
		alert("Registry Cancelled ");
		return false;
	}
};

/*
@name        = mayus
@author      = David Lapena Garcia
@version     = 1.0
@description = Transforms all the given values to upper case at when user writes.
@date        = 18-12-2018
@params      = e string
@return      = none
*/
function mayus(e) {
    e.value = e.value.toUpperCase();
};

/*
@name        = toTypeFrame
@author      = David Lapena Garcia
@version     = 1.0
@description = Hide the frame[1] and shows the frame[0] in the parent window.
@date        = 18-12-2018
@params      = none
@return      = none
*/
function toTypeFrame(){
	cleanProductsFrame();
	window.parent.$("#ProductFrame").hide();
	window.parent.$("#TypeFrame").show();
};
/*
@name        = cleanProductsFrame
@author      = David Lapena Garcia
@version     = 1.0
@description = This function resets the modified page content.
@date        = 18-12-2018
@params      = none
@return      = none
*/
function cleanProductsFrame(){
	$("#type").val("");
	$("#productsTable").html("");
};

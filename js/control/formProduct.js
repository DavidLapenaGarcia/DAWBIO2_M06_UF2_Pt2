/*
Main JQ Control for formProductFrame.html page.
*/

/*
@name        = $(document).ready()
@author      = David Lapena Garcia
@version     = 1.0
@description = Makes changes at the time of loading the frame[1].
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
@params      = dna
@return      = null if correct. String wicth the error if not.
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
@description = Transforms all the given values to upper case at the moment when user writes.
@date        = 18-12-2018
@params      = e string
@return      = none
*/
function mayus(e) {
    e.value = e.value.toUpperCase();
};

/*
@name        = FormToChromosomeFrame
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
@name        = toChromosome
@author      = David Lapena Garcia
@version     = 1.0
@description = This function resets the modified page content  and call a function to return to the frame[0]
@date        = 18-12-2018
@params      = none
@return      = none
*/
function cleanProductsFrame(){
	$("#type").val("");
	$("#productsTable").html("");
};

/*
Main JQ Control for formProductFrame.html page.
*/
var Dna       = new Type(1,"DNA");
var Proteine  = new Type(2,"PROTEINE");
var TYPE_LIST = [Dna, Proteine];
var PRODUCTS_LIST = [];

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

		var messageToUser = $("#messageToUser");

		var names = $("#productsTable .names").map(function() {
   						return $(this).val();
					}).get();
		var codes = $("#productsTable .codes").map(function() {
   						return $(this).val();
					}).get();
		var testeds = $("#productsTable .testeds").map(function() {
   						return $(this).is(':checked');
					}).get();
		var type = getTypeByName( $("#type").html() );
		
		
		if(type!=null){
			var validatedNames = validateNames(names);
			var validatedCodes = validateCodes(type.name, codes);
			var validatedTesteds = validateTesteds(testeds);

			if(names.lenght == codes.lenght && codes.lenght == testeds.lenght){
				if(validatedNames==null && validatedCodes==null && validatedTesteds==null){
					let date = currentDate();
					var products = getProductsArray(type, names, codes, testeds, date);
					register(products);
				}else{
					if(validatedNames!=null){
						messageToUser.html("ERROR: "+validatedNames);
					}else if(validatedCode!=null){
						messageToUser.html("ERROR: "+validatedCode);
					}else{
						messageToUser.html("ERROR: "+validatedTesteds);
					}
				}
			}else{
				messageToUser.html("Error: Diferent inputs amount.");
			}	
		}else{
			messageToUser.html("Error: Sorry, there is a problem witch the selected type before");
		}
		
    });

	$("#toTypeFrame").click(function(){
        toTypeFrame();
    })
});
/*
@name        = getTypeByName
@author      = David Lapena Garcia
@version     = 1.0
@description = Search in TYPE_LIST the Type object by name.
@date   = 18-12-2018
@params = none
@return = Type object if success, null in case of error.
*/ 
function getTypeByName(name){
	var userType = null;
	$.each(TYPE_LIST, function(index, type){
		if(name == type.name){
			userType = type;
		}
	});
	return userType;
};

/*
@name        = getProductsArray
@author      = David Lapena Garcia
@version     = 1.0
@description = 
@date   = 18-12-2018
@params = none
@return = Product[] if success, null in case of error.
*/ 
function getProductsArray(type, names, codes, testeds, date){
	var products = [];
	for( var i = 0; i < names.length ;i++){
		var product = new Product(i ,type ,names[i] ,codes[i], testeds[i], date);
		products[i] = product;
	}
	return products;
};

/*
@name        = register
@author      = David Lapena Garcia
@version     = 1.0
@description = First, check if the data given by the user is correct.
If is correct, call to confirm the registraion.
If it is not, notifies the user.
@date   = 18-12-2018
@params = none
@return = none
*/ 
function register(products){
  if(validateDna(dna) === null){
  	$("#messageToUser").html(dna+" is correct");
  	confirmRegister();
  }else{
	$("#messageToUser").html("This DNA code is no valid: [ "+dna+"]");
  	$("#messageError").html("ERROR: "+validateDna(dna));
  }
};
/*
@name= currentDate
@author= David Lapena Garcia
@version= 1.0
@description= This functions get the current date and convert it to a written date.
@date = 11-11-2018
@params= none
@return =  String date
*/
function currentDate(){
  var months = ["January", 		"February", 	"March", 	"April", 
  				"May", 			"June", 		"July", 	"August",
				"September", 	"October", 		"November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var today = new Date();
  var date = 	days[today.getDay()] + ", " + 
  				today.getDate() + " of " + 
				months[today.getMonth()] + ' ' +
				today.getFullYear();
  return date;
}
/*
@name        = validateNames
@author      = David Lapena Garcia
@version     = 1.0
@description = This function validates a correct names array.
Validates a not numeric data, an string data, not empty data, a length enough data.
@date   = 18-12-2018
@params = dna
@return = null if correct. String wicth the error if not.
*/
function validateNames(names){
	var result    = null;
	$.each(names, function(index, name){
		let validatedName = validateName(name);
		if(validatedName != null){
			return validatedName;
		}
	});
	return result;
};
/*
@name        = validateName
@author      = David Lapena Garcia
@version     = 1.0
@description = This function validates a correct name sentence for a Product.
Validates a not numeric data, an string data, not empty data, a length enough data.
@date   = 18-12-2018
@params = dna
@return = null if correct. String wicth the error if not.
*/
function validateName(name){
	var result    = null;
	if($.isNumeric(name)){
		result = "The sentence can not be numeric";
	}else if(typeof name != 'string'){
		result = "The sentence must be alphabetical";
	}else if(name.lenght <= 0 || name === ""){
		result = "The sentence must be longer";
	}else{
		result = null;
	}
	return result;
};

/*
@name        = validateCodes
@author      = David Lapena Garcia
@version     = 1.0
@description = This function validates a correct codes array.
Validates a not numeric data, an string data, not empty data, a length enough data.
@date   = 18-12-2018
@params = Type, codes
@return = null if correct. String wicth the error if not.
*/
function validateCodes(typeName, codes){
	var result	= null;
	if(typeName == TYPE_LIST[0].name){
		$.each(codes, function(index, code){
			let validatedCode = validateDna(code);
			if(validatedCode != null){
				return validatedCode;
			}
		});
	}else if (typeName == TYPE_LIST[1].name){
		$.each(codes, function(index, name){
			let validatedCode = validateProteine(code);
			if(validatedName != null){
				return validatedCode;
			}
		});
	}
	return result;
};

/*
@name        = validateDna
@author      = David Lapena Garcia
@version     = 1.0
@description = This function validates a correct dna sentence.
Validates a not numeric data, an string data, not empty data, a length enough data, and a correct DNA parameter.
@date   = 18-12-2018
@params = dna
@return = null if correct. String wicth the error if not.
*/
function validateDna(dna){
	//dna = dna.toUpperCase();  // why today this breaks? 
	var result    = null;
	var adnRegExp = new RegExp("[^ACGT]","i");
	if($.isNumeric(dna)){
		result = "The sentence can not be numeric";
	}else if(typeof dna != 'string'){
		result = "The sentence must be alphabetical";
	}else if(dna.lenght <= 0 || dna === ""){
		result = "The sentence must be longer";
	}else if(dna.match(adnRegExp)){
		result = "The sentence must be a valid dna sentence [A-C-T-G]";
	}else{
		result = null;
	}
	return result;
};
/*
@name        = validateProteine
@author      = David Lapena Garcia
@version     = 1.0
@description = This function validates a correct proteine sentence.
Validates a not numeric data, an string data, not empty data, a length enough data, and a correct proteine parameter.
@date   = 18-12-2018
@params = dna
@return = null if correct. String wicth the error if not.
*/
function validateProteine(proteine){
	//proteine = proteine.toUpperCase();  // why today this breaks? 
	var result    = null;
	var proteinRegExp = new RegExp("[^FLSYCWPHQRIMTNKVADEG]","i");
	if($.isNumeric(proteine)){
		result = "The sentence can not be numeric";
	}else if(typeof proteine != 'string'){
		result = "The sentence must be alphabetical";
	}else if(proteine.lenght <= 0 || proteine === ""){
		result = "The sentence must be longer";
	}else if(proteine.match(proteinRegExp)){
		result = "The sentence must be a valid PROTEINE sentence [F-L-S-Y-C-W-P-H-Q-R-I-M-T-N-K-V-A-D-E-G]";
	}else{
		result = null;
	}
	return result;
};

/*
@name        = validateTests
@author      = David Lapena Garcia
@version     = 1.0
@description = This function validates a correct test array.
@date   = 18-12-2018
@params = test[]
@return = null if correct. String wicth the error if not.
*/
function validateTesteds(testeds){
	var result    = null;
	$.each(testeds, function(index, test){
		let validatedTest = validateTest(test);
		if(validatedTest != null){
			return validatedTest;
		}
	});
	return result;
};
/*
@name        = validateTest
@author      = David Lapena Garcia
@version     = 1.0
@description = This function validates a correct content for a Test.
Validates if test is TRUE or FALSE
@date   = 18-12-2018
@params = test
@return = null if correct. String wicth the error if not.
*/
function validateTest(test){
	var result    = null;
	if(test == true || test == false){
		result="Not a valid tested option."
	}
	return result;
};

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
	if( validateDna( $("#Dna").val().toUpperCase()==null)){
		if (confirm("Confirm registration?") == true) {
	        window.open("./../pop-Up/popUpWindows.html", "_blank","width=1300px", "height=500px");        
	        return true;
	    } else {
	        alert("Registry Cancelled ");
	        return false;
	    }
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

/*
this array simulates a type database
*/
var Dna       = new Type(1,"DNA");
var Proteine  = new Type(2,"PROTEINE");
var TYPE_LIST = [Dna, Proteine];


/*
@name        = productsArray()
@author      = David Lapena Garcia
@version     = 1.0
@description = Get the products in a table and push it into array.
It will validate all the inputs fields and a valid type.
It will return an array:
    array[0] : Boolen. True if success, false if not.
    array[1] : Products[] if success, string with the error if not.

@date        = 20-12-2018
@params      = 	String type	: 	Product type's name.
				names[]		: 	Product´s name.
				codes[]		:	Product´s code.
				testeds[]	:	Product´s test.

@return      =  array[0] : True/false
                array[1] : products[] / string
*/
function  productsArray(type, names, codes, testeds){
    var result = [false, null];

    var type = getTypeByName(type );
    
    if(type!=null){
        var validatedNames = validateNames(names);
        var validatedCodes = validateCodes(type.name, codes);
        var validatedTesteds = validateTesteds(testeds);
	 
        if(names.lenght == codes.lenght && codes.lenght == testeds.lenght){
			if(validatedNames != null){
				result[1] = "ERROR: " + validatedNames;

			}else if(validatedCodes != null){
				result[1] = "ERROR: " + validatedCodes;

			}else if(validatedTesteds != null){
				result[1] = "ERROR: " + validatedTesteds;

			}else{
				result[0] = true;
				result[1] = getProductsArray(type, names, codes, testeds, currentDate());
			}
        }else{
            result[1] = "Error: Diferent inputs amount.";
        }	
    }else{
        result[1]= "Error: Sorry, there is a problem witch the selected type before";
    }
    return result;
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
		var nameError = validateName(name);
		if(nameError != null){
			result =  nameError;
			return false;
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
	var result    = "";
	if($.isNumeric(name)){
		result = "The NAME sentence can not be numeric";
	}else if(typeof name != 'string'){
		result = "The NAME sentence must be alphabetical";
	}else if(name.lenght <= 0 || name === ""){
		result = "The NAME sentence must be longer";
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
			let codeError = validateDna(code);
			if(codeError != null){
				result =  codeError;
				return false;
			}
		});
	}else if (typeName == TYPE_LIST[1].name){
		$.each(codes, function(index, code){
			let codeError = validateProteine(code);
			if(codeError != null){
				result =  codeError;
				return false;
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
	dna = dna.toUpperCase();  
	var result    = null;
	var adnRegExp = new RegExp("[^ACGT]","i");
	if($.isNumeric(dna)){
		result = "The DNA sentence can not be numeric";
	}else if(typeof dna != 'string'){
		result = "The DNA sentence must be alphabetical";
	}else if(dna.lenght <= 0 || dna === ""){
		result = "The DNA sentence must be longer";
	}else if(dna.match(adnRegExp)){
		result = "The DNA sentence must be a valid dna sentence [A-C-T-G]";
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
	proteine = proteine.toUpperCase(); 
	var result    = null;
	var proteinRegExp = new RegExp("[^FLSYCWPHQRIMTNKVADEG]","i");
	if($.isNumeric(proteine)){
		result = "The PROTEINE sentence can not be numeric";
	}else if(typeof proteine != 'string'){
		result = "The PROTEINE sentence must be alphabetical";
	}else if(proteine.lenght <= 0 || proteine === ""){
		result = "The PROTEINE sentence must be longer";
	}else if(proteine.match(proteinRegExp)){
		result = "The PROTEINE sentence must be a valid PROTEINE sentence [F-L-S-Y-C-W-P-H-Q-R-I-M-T-N-K-V-A-D-E-G]";
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
		let testError = validateTest(test);
		if(testError != null){
			result =  testError;
			return false;
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
	if(typeof test !== "boolean"){
		result="Not a valid test option."
	}
	return result;
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

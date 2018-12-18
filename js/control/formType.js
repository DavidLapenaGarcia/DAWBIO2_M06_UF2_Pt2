/*
Main JQ Control for formTypeFrame.html page.
*/

var Dna       = new Type(1,"DNA");
var Proteine  = new Type(2,"PROTEINE");
var TYPE_LIST = [Dna, Proteine];

var PRODUCT_ROW = "<tr>"+
					"<td><input class='form-control names' type='text'></td>"+
					"<td><input class='form-control codes' type='text'></td>"+
					"<td><input class='form-control testeds' type='checkbox'></td>"+
				"</tr>";

/*
@name        = ().ready( )
@author      = David Lapena Garcia
@version     = 1.0
@description = 
@date        = 18-12-2018
@params      = none
@return      = none
*/
$(document).ready(function (){
	$("#introduce").click(function(event){
		
		event.preventDefault();

		var quantity = $("#quantity").val()

		var validateQuantit = validateQuantity(quantity);
		var validateTypeId  = validateType( $("#type").val() );

		if(validateTypeId==null){
			var userType = getTypeById($("#type").val());
			if(validateQuantit == null){
				updateFormProduct(userType, quantity); //send type, make table
				toFormProduct();
			}else{
				$("#messageToUser").html("This quantity is not valid.");
				$("#messageError").html("ERROR: " + validateQuantit);
			}
		}else{
			$("#messageToUser").html("This type is not valid.");
			$("#messageError").html("ERROR: " + validateTypeId);
		}
		
	});
});

/*
@name        = updateFormProduct
@author      = David Lapena Garcia
@version     = 1.0
@description = 
@date        = 18-12-2018
@params      = none
@return      = none
*/
function updateFormProduct(type, quantity){
	window.parent.frames[1].$("#type").html( type.name );
	var rows = doProductsTableRows(quantity);
	window.parent.frames[1].$("#productsTable").html(rows);

};

/*
@name        = doProductsTableRows
@author      = David Lapena Garcia
@version     = 1.0
@description = 
@date        = 18-12-2018
@params      = none
@return      = none
*/
function doProductsTableRows(quantity){
	var rows = "";
  	for(var i=0; i < quantity; i++){
		rows = rows + PRODUCT_ROW;
	}
	return rows;
};

/*
@name        = toFormProduct
@author      = David Lapena Garcia
@version     = 1.0
@description = Hides the actual frame and shows the Product frame.
@date        = 18-12-2018
@params      = none
@return      = none
*/
function toFormProduct(){
  window.parent.$("#TypeFrame").hide();
  window.parent.$("#ProductFrame").show();
};

/*
@name        = getTypeById
@author      = David Lapena Garcia
@version     = 1.0
@description = 
@date        = 18-12-2018
@params      = none
@return      = none
*/
function getTypeById(id){
	userType = null;
	$.each(TYPE_LIST, function(index, type){
		if(id == type.id){
			userType = type;
		}
	});
	return userType;
};

/*
@name        = validateType
@author      = David Lapena Garcia
@version     = 1.0
@description = 
@date        = 18-12-2018
@params      = none
@return      = none
*/
function validateType(id){
	flag = "";
	if(! $.isNumeric(id)){
		flag = "This ID is not numeric";
	}else if(id == "" || id < 1){
		flag = "This ID is not longer enought";
	}else{
		flag = "This ID does not exist in our Data Base";
		for(var i = 0; i < TYPE_LIST.length; i++){
			if(id == TYPE_LIST[i].id){
				flag = null;
			}
		}
	}
	return flag;
};

/*
@name        = validateQuantity
@author      = David Lapena Garcia
@version     = 1.0
@description = 
@date        = 18-12-2018
@params      = none
@return      = none
*/
function validateQuantity(quantity){
	flag = "";
	if(! $.isNumeric(quantity) ){
		flag = "This quantity of products is not numeric";
	}else if(quantity == "" || quantity < 1){
		flag = "This quantity of products is not longer enought";
	}else{
		flag = null;
	}
	return flag;
};
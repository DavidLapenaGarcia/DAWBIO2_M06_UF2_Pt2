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
	loadFromOpener( $(this) );

	$("#closePopUp").click(function(){
        closePopup();
    });
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
function loadFromOpener( popup ){
	console.log(window.opener);

	var names = window.opener.$(".names").map(function() {
				return $(this).val();
			}).get();
	var codes = window.opener.$(".codes").map(function() {
					return $(this).val();
				}).get();
	var testeds = window.opener.$(".testeds").map(function() {
					return $(this).is(':checked');
				}).get();
	var type = window.opener.$("#type").text();

	var products = productsArray(type, names, codes, testeds);
	console.log(products);

	if(products[0]){
			$("date").html(currentDate());
			$("type").html("type");
			$("#productsTable").html( doHtmlIntroduceTable(products[1]) );
		}else{
			$("#messageToUser").html(products[1]);
	}
};

function doHtmlIntroduceTable(products){
	tableContent = "";
	$.each(products, function(index, product){
		tableContent += '<tr>'+
							'<td>'+	product.name + '</td>'+
							'<td>'+	product.code + '</td>'+
							'<td>'+	product.tested + '</td>'+
						'</tr>';
	});
	return tableContent;
};
/*
@name= closePopup
@author= David Lapena Garcia
@version= 1.0
@description= Close the popup
@date = 11-11-2018
@params= none
@return = none
*/
function closePopup(){
  window.close("./../../pop-Up/popIntroduceProducts.html", "_blank","width=800px", "height=800px");
};
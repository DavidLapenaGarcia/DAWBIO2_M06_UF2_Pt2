/*
@name= (document).ready()
@author= David Lapena Garcia
@version= 1.0
@description = Starts the popup charging the needed data.
				If closee
@date = 18-12-2018
@params= none
@return = none
*/
$(document).ready(function (){
	loadFromOpener( $(this) );

	$("#closePopUp").click(function(){
        closePopup();
    });
	$("#print").click(function(){
        window.print();
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
	

	if(products[0]){
			$("#date").html( currentDate() );
			$("#type").html(type);
			$("#productsTable").html( doHtmlIntroduceTable(products[1]) );
			$("#totalProducts").html( products[1].length );
		}else{
			$("#messageToUser").html(products[1]);
	}
};

/*
@name= doHtmlIntroduceTable
@author= David Lapena Garcia
@version= 1.0
@description = Get an product array and do as many rows as array length, and  in each row the information of each product.
@date = 18-12-2018
@params= Product products[] :Product's array
@return = String tableContent : html string with evry needed table's row.
*/
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
@date = 18-12-2018
@params= none
@return = none
*/
function closePopup(){
  window.close("./../../pop-Up/popIntroduceProducts.html", "_blank","width=800px", "height=800px");
};
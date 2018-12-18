/*
@name= Vacio
@author= Pablo Cubiles Cid
@version= 1.0
@description= Function that validate that contains a value
@date = 8-11-2018
@params= num
@return = boolean
*/
function Vacio(num){
  if(num==''){//If you do not enter anything
    document.getElementById("pResult").innerHTML = "NO HAS INTRODUCIDO NADA, INTRODUCE UN NUMERO !!!";
    return false;
  }
  return true;
}

/*
@name= NoNumero
@author= Pablo Cubiles Cid
@version= 1.0
@description= Function that validate that the value is a number
@date = 8-11-2018
@params= num
@return = boolean
*/
function NoNumero(num){
  if(isNaN(num)){//If it is not a number
    console.log("The data introduce is not a number");
    document.getElementById("pResult").innerHTML = "INTRODUCE UN NUMERO !!!";
    return false;
  }
  return true;
}

/*
@name= ValidateNumberProducts
@author= Pablo Cubiles Cid
@version= 1.0
@description= Function that validates for the conditions of Number Products if it returns false informs what the error is
@date = 8-11-2018
@params= num
@return = boolean
*/
function ValidateNumberProducts(num){
  if (NoNumero(num) && Vacio(num)){//If NoNumero returns true
    if (num<1) {//If it is less than 1
      document.getElementById("pResult").innerHTML = "INTRODUCE UN NUMERO MAYOR A 0 !!!";
      return false;
    }
    return true;
  }
}

/*
@name= ImprimeTipoProducto
@author= Pablo Cubiles Cid
@version= 1.0
@description= function that prints the type of product selected and the number of products to be entered
@date = 11-11-2018
@params= none
@return = none
*/
function ImprimeTipoProducto(){
  var parent = window.parent.document;
  var product = document.getElementById("Product").value;
  var num = document.getElementById("idNumProducts").value;
  var table = "<div style='width:95%; height:2px; background-color:white; margin-left:20px; margin-top:3px;'></div><div style='margin-left:25px;margin-top:5px;'><table><tr><td style='width:230px;'><input type='text' class='class_name' placeholder='Input product name'></td><td style='width:230px;'><input type='text' class='class_code' placeholder='Input code'></td><td style='width:30px;'><input id='check' class='class_check' type='checkbox' ></td></tr></table></div><br>";
  
  if (product == "dna") {
    parent.getElementById("productType").innerHTML = "Enter products for category DNA code";
  }
  else{
    parent.getElementById("productType").innerHTML = "Enter products for category Protein code";
  }
  for(var i=0; i<num; i++) {
    parent.getElementById("numberProducts").innerHTML += table;
  }

}

/*
@name= goBioTable
@author= Pablo Cubiles Cid
@version= 1.0
@description= function that hides the iframe and shows the biotable
@date = 11-11-2018
@params= none
@return = none
*/
function goBioTable(){
  var num = document.getElementById("idNumProducts").value;
  if(ValidateNumberProducts(num)){//If ValidateNumberProducts is true
    ImprimeTipoProducto();
    var parent = window.parent.document;
    parent.getElementById("BioTable").style.display = "block";
    parent.getElementById("iframe").style.display = "none";
    document.getElementById("pResult").innerHTML = "";
  }
}

/*
@name= goBioTable
@author= Pablo Cubiles Cid
@version= 1.0
@description= function that hides the biotable and shows the iframe
@date = 11-11-2018
@params= none
@return = none
*/
function Back(){
  var parent = window.parent.document;
  parent.getElementById("iframe").style.display = "block";
  parent.getElementById("BioTable").style.display = "none";
}

/*
@name= window.onload
@author= Pablo Cubiles Cid
@version= 1.0
@description= Function that when you start the page shows the iframe
@date = 11-11-2018
@params= none
@return = none
*/

window.onload = function(){
  goBack();
}
/*
@name= goBack
@author= Pablo Cubiles Cid
@version= 1.0
@description= Function that only shows the main menu
@date = 11-11-2018
@params= none
@return = none
*/
function goBack(){
  document.getElementById("BioTable").style.display= "none";
  document.getElementById("iframe").style.display= "block";
  document.getElementById("numberProducts").innerHTML = "";
  window.frames[0].document.getElementById("idNumProducts").value = "";
}

function loadData(){

  var product = window.opener.frames[0].document.getElementById("Product").value;

  if (TypeSequence(product)==0) {
    document.getElementById("productType").innerHTML += "DNA code";
  }
  else {
    document.getElementById("productType").innerHTML += "Protein code";
  }

  var pop= window.opener.document;
  var array_name = pop.getElementsByClassName("class_name");
  var array_code = pop.getElementsByClassName("class_code");
  var array_checked = pop.getElementsByClassName("class_check");
  var num = array_name.length;
  var returner = "";

  currentDate();
  for (var i=0; i<array_name.length;i++){
    if (array_checked[i].checked == true) {
        is_checked = "YES";
    } else {
        is_checked = "NO";
    }

    returner += "<div style='width:100%; height:2px; background-color:white; margin-top:3px;'></div><div style='margin-top:5px;'><table style='width:100%'><tr><td style='width:30%;'><h4>"+array_name[i].value+
    "</h4></td><td style='width:60%;'><h4>"+array_code[i].value+
    "</h4></td><td style='width:10%;'><h4>"+is_checked+
    "</h4></td></tr></table></div><br>";
  }
  document.getElementById("numProducts").innerHTML += num;
  document.getElementById("tableresult").innerHTML += returner;
}

/*
@name= currentDate
@author= Pablo Cubiles Cid
@version= 1.0
@description= function that prints today's date
@date = 11-11-2018
@params= none
@return = none
*/

function currentDate(){
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var today = new Date();
  var date = days[today.getDay()] + ", " + today.getDate() + " of " + months[today.getMonth()] + ' ' + today.getFullYear();

  document.getElementById("date").innerHTML += date;
}

/*
@name= TypeSequence
@author= Pablo Cubiles Cid
@version= 1.0
@description= function that says if the option chosen is DNA or protein
@date = 11-11-2018
@params= product
@return = 0 or 1
*/

function TypeSequence(product) {
  if (product == "dna") {
    return 0;
  }
  else{
    return 1;
  }
}

/*
@name= validateCode
@author= Pablo Cubiles Cid
@version= 1.0
@description= function that validates if the code entered is correct
@date = 11-11-2018
@params= none
@return = none
*/

function validateCode(){
  var product = window.frames[0].document.getElementById("Product").value;
  var code = document.getElementsByClassName("class_code");
  var adn = new RegExp("[^ACGT]","i");
  var protein = new RegExp("[^FLSYCWPHQRIMTNKVADEG]","i");

  var arrResult = new Array();

  if (TypeSequence(product)==0) {
    for (var i = 0; i < code.length; i++) {
      if(code[i].value==''){//If you do not enter anything
        arrResult.push(1);
      }
      else {
        if (adn.test(code[i].value)) {
          arrResult.push(1);
        }
        else {
          arrResult.push(0);
        }
      }
    }
  }
  else {
    for (var i = 0; i < code.length; i++) {
      if(code[i].value==''){//If you do not enter anything
        arrResult.push(1);
      }
      else {
        if (protein.test(code[i].value)) {
          arrResult.push(1);
        }
        else {
          arrResult.push(0);
        }
      }
    }
  }
  return arrResult;
}


/*
@name= validateName
@author= Pablo Cubiles Cid
@version= 1.0
@description= function that validates that the name entered is not empty and fulfills the possibilities of a name
@date = 11-11-2018
@params= none
@return = none
*/

function validateName(){
  var array_name = document.getElementsByClassName("class_name");
  var regex = new RegExp("[^A-Z0-9 ]","i");
  var arrResult = new Array();

  for (var i = 0; i < array_name.length; i++) {
    if(array_name[i].value==''){//If you do not enter anything
      arrResult.push(1);
    }
    else {
      if (regex.test(array_name[i].value)) {
        arrResult.push(1);
      }
      else {
          arrResult.push(0);
      }
    }
  }
  return arrResult;
}

/*
@name= popup
@author= Pablo Cubiles Cid
@version= 1.0
@description= function that asks if you want to enter the information introduced, if it opens the popup
@date = 11-11-2018
@params= none
@return = none
*/

function popup (){
  var name = validateName();
  var code = validateCode();

  if (name.includes(1)){
    document.getElementById("pResult").innerHTML = "Incorrect input name: Introduce a name";
  }
  else if (code.includes(1)) {
    document.getElementById("pResult").innerHTML = "Incorrect input code: Introduce a correct code";
  }
  else{
    var decision = confirm("Do you really want to introduce these properties?");
    if (decision){
      window.open("./pop-Up/popUpWindows.html", "_blank","width=800px", "height=800px");
    }
  }
}

/*
@name= Back
@author= Pablo Cubiles Cid
@version= 1.0
@description= Function that close the PopUp
@date = 11-11-2018
@params= none
@return = none
*/
function Back(){
  window.close("./pop-Up/popUpWindows.html", "_blank","width=800px", "height=800px");
}

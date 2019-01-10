/*
@name= (document).ready()
@author= David Lapena Garcia
@version= 1.0
@description = Starts the app. First, shows the correct frame and hides the others
Then, makes the logo dance.
@date = 18-12-2018
@params= none
@return = none
*/
$(document).ready(function (event){
  //logoCrazy();
  $('#go').click(function(event){
      
        event.preventDefault(); 
        var num1 = parseInt(    window.frames[0].$("#num1").val()   );
        var num2 = parseInt(    window.frames[0].$("#num2").val()    );
        var operation = window.frames[1].$("#operation").val(); 
        var result= doOperation(operation, num1, num2); alert(result);
        window.frames[2].$("#result").html(result);
  })
});

function doOperation(operation, num1, num2){
    var result = 0;
    switch(operation){
        case "sum":
        return num1 + num2;
        break;

        case "rest":
        return num1 - num2;
        break;

        case"plus":khg
        return num1*num2;
        break;

        case"div":
        return  num1/num2;
        break;

        default:
            alert("default");

        return result;
    }
};


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
  $('#open').click(function(event){
      
        event.preventDefault(); 
        var x = $("#x").val();
        var y = $("#y").val();

        var heigth =$("#heigth").val();
        var width =$("#weigth").val(); 

        var body= "width="+width+",height="+heigth;
        alert(heigth); 
        
        var windo = window.open("./../../pop-Up/f4Pop.html", "_blank", body); 
        windo.screenX = x;
        windo.screenY = y;
        windo.width(width);
        //IDONT KNOW DO THIS SHITTT
  })
});
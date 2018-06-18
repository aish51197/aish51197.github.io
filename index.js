function myFunction(){
    
var x = $("#myCard").clone();
var userPicture = prompt("Enter the URL of user picture");
    var mainPicture = prompt("Enter the URL of main picture");
    var caption = prompt("enter the caption of picture");
   

$("#mainImg").attr("src",mainPicture)
    $("#caption").text(caption);
    $("#thumbnail").css('background-image','url('+userPicture+')');
$("#mainContainer").append(x);

};

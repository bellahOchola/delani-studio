$(".appear").click (function(){
    $(".para").toggle();
});

$(document).ready(function(){
    $("#image1").mouseover(function(){
    $(".text1").show();
    
    }).mouseout(function(){
        $(".text1").hide();
    });
});
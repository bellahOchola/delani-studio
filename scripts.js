$(".appear").click (function(){
    $(".para").toggle();
});

$(".dev").click (function(){
    $(".eng").toggle();
});

$(".mng").click (function(){
    $(".iter").toggle();
});

$(document).ready(function(){
    $("#image1").mouseover(function(){
    $(".text1").show();
    
    }).mouseout(function(){
        $(".text1").hide();
    });
});
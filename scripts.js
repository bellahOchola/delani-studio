$(".main").click (function(){
    $(".appear").toggle();
    $(".para").toggle();
});

$(".tog").click (function(){
    $(".dev").toggle();
    $(".eng").toggle();
});

$(".rec").click (function(){
    $(".mng").toggle();
    $(".iter").toggle();
});

$(document).ready(function(){
    $("#image1").mouseover(function(){
    $(".text1").show();
    
    }).mouseout(function(){
        $(".text1").hide();
    });
});

$(document).ready(function(){
    $("#image2").mouseover(function(){
    $(".text2").show();
    
    }).mouseout(function(){
        $(".text2").hide();
    });
});

$(document).ready(function(){
    $("#image3").mouseover(function(){
    $(".text3").show();
    
    }).mouseout(function(){
        $(".text3").hide();
    });
});

$(document).ready(function(){
    $("#image3").mouseover(function(){
    $(".text3").show();
    
    }).mouseout(function(){
        $(".text3").hide();
    });
});

$(document).ready(function(){
    $("#image4").mouseover(function(){
    $(".text4").show();
    
    }).mouseout(function(){
        $(".text4").hide();
    });
});

$(document).ready(function(){
    $("#image5").mouseover(function(){
    $(".text5").show();
    
    }).mouseout(function(){
        $(".text5").hide();
    });
});

$(document).ready(function(){
    $("#image6").mouseover(function(){
    $(".text6").show();
    
    }).mouseout(function(){
        $(".text6").hide();
    });
});

$(document).ready(function(){
    $("#image7").mouseover(function(){
    $(".text7").show();
    
    }).mouseout(function(){
        $(".text7").hide();
    });
});

$(document).ready(function(){
    $("#image8").mouseover(function(){
    $(".text8").show();
    
    }).mouseout(function(){
        $(".text8").hide();
    });
});

$(document).ready(function(){
    $("form#mc-embedded-subscribe-form").submit(function(event){
      // event.preventDefault();
      var name = $("input#mce-FNAME").val();
      var email = $("input#mce-EMAIL").val();
      var message = $("input#mce-MMERGE2").val();
      if ($("input#mce-FNAME").val() && $("input#mce-EMAIL").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });

$(document).ready(function(){

    // CHECK BOX
    $("span.ch_ty1").click(function(){
        var checkBox = $(this).parent().find("input");
        //alert(checkBox.attr("checked"));
        checkBox.trigger("click");
    });
    
    $("input.ch_ty1").change(function(){
        var cover = $(this).parent().find("span");
        if(this.checked){
            cover.addClass("on");
        }else{
            cover.removeClass("on");
        }
    });

    $("span.ch_ty2").click(function(){
        var checkBox = $(this).parent().find("input");
        checkBox.trigger("click");
    });
    
    $("input.ch_ty2").change(function(){
        var cover = $(this).parent().find("span");
        if(this.checked){
            cover.addClass("on");
        }else{
            cover.removeClass("on");
        }
    });

    $("span.ch_ty3").click(function(){
        var checkBox = $(this).parent().find("input");
        checkBox.trigger("click");
    });
    
    $("input.ch_ty3").change(function(){
        var cover = $(this).parent().find("span");
        if(this.checked){
            cover.addClass("on");
        }else{
            cover.removeClass("on");
        }
    });
    
    
    // RADIO
    $("span.img_rad").click(function(){
        var radioButton = $(this).parent().find("input");
        radioButton.trigger("click");
    });
    
    $("input.radio_ty1").change(function(){
        var target = $(this).parent().find("span");
        $(this).parents("dd:first").find("span").removeClass("on");
        $(this).parent().parent().find("span").removeClass("on");
        if(this.checked){
            target.addClass("on");
        }else{
            target.removeClass("on");
        }
    });

});


function popOpen(layerName){
    document.getElementById(layerName).style.display = 'block';
    return false;
}
function popClose(layerName){
    document.getElementById(layerName).style.display = 'none';
    return false;
}
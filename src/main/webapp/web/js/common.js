
$(document).ready(function(){

	$(".box-familySite a").click(function(){
		if(!$(this).data("click")){
			$(".list-family").css("display", "block");
			$(this).data("click", true);
		}else{
			$(".list-family").css("display", "none");
			$(this).data("click", false);
		}
	});

	$("#btnGlobalLang").click(function(){
		$(this).addClass("on");
		$("#btnGlobalNetwork").removeClass("on");
	});
	$("#btnGlobalNetwork").click(function(){
		$(this).addClass("on");
		$("#btnGlobalLang").removeClass("on");
	});
	
	$(document).mouseup(function (e){
		var container1 = $("#btnGlobalLang");
		var container2 = $("#btnGlobalNetwork");
		if( container1.has(e.target).length === 0)
			container1.removeClass("on");
		if( container2.has(e.target).length === 0)
			container2.removeClass("on");
	});


	/* faq 
	//Add Inactive Class To All Accordion Headers
	$(".faq_list li a").toggleClass("off");
	
	//Set The Accordion Content Width
	//var contentwidth = $('.faq_list li a').width();
	//$('.faq_list li p.cont').css({'width' : contentwidth });
	
	//Open The First Accordion Section When Page Loads
	$(".faq_list li a").first().toggleClass("on").toggleClass("off");
	$(".faq_list li p.cont").first().slideDown().toggleClass("open-content");
	
	// The Accordion Effect
	$(".faq_list li a").click(function () {
		if($(this).is(".off")) {
			$(".faq_list li a.on").toggleClass("on").toggleClass("off").next().slideToggle("fast").toggleClass("open-content");
			$(this).toggleClass("on").toggleClass("off");
			$(this).next().slideToggle().toggleClass("open-content");
		}
		
		else {
			$(this).toggleClass("on").toggleClass("off");
			$(this).next().slideToggle().toggleClass("open-content");
		}
	}); */
	$(".faq_list li a").first().addClass("on");
	$(".faq_list li p.cont").first().slideDown();
	$('.faq_list li a.qu').click(function(){
		if($(this).is(".on")) {
			//$(".faq_list li a.qu").removeClass("on");
			//$(".faq_list li p.cont").slideDown("fast");
			$(this).addClass("on");
			$(this).parent().find("p.cont").slideDown("fast");
		}
		else {
		$(".faq_list li a.qu").removeClass("on");
		$(".faq_list li p.cont").slideUp("fast");
		$(this).addClass("on");
		$(this).parent().find("p.cont").slideDown("fast");
		}
	});


	$('.tab_join01 li a.tb_01').click(function(){
		$(".tab_join01 li a").removeClass("on");
		$(this).addClass("on");
		$(".join_cont01.type01").css("display", "block");
		$(".join_cont01.type02").css("display", "none");
		$(".join_cont01.type03").css("display", "none");
		$(".join_cont01.type04").css("display", "none");
	});
	$('.tab_join01 li a.tb_02').click(function(){
		$(".tab_join01 li a").removeClass("on");
		$(this).addClass("on");
		$(".join_cont01.type01").css("display", "none");
		$(".join_cont01.type02").css("display", "block");
		$(".join_cont01.type03").css("display", "none");
		$(".join_cont01.type04").css("display", "none");
	});
	$('.tab_join01 li a.tb_03').click(function(){
		$(".tab_join01 li a").removeClass("on");
		$(this).addClass("on");
		$(".join_cont01.type01").css("display", "none");
		$(".join_cont01.type02").css("display", "none");
		$(".join_cont01.type03").css("display", "block");
		$(".join_cont01.type04").css("display", "none");
	});
	$('.tab_join01 li a.tb_04').click(function(){
		$(".tab_join01 li a").removeClass("on");
		$(this).addClass("on");
		$(".join_cont01.type01").css("display", "none");
		$(".join_cont01.type02").css("display", "none");
		$(".join_cont01.type03").css("display", "none");
		$(".join_cont01.type04").css("display", "block");
	});

	
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
	//
	var todayValue = new Date();
	
	if($("#"+layerName).find("#chk_"+layerName).is(":checked")){
		todayValue.setDate(todayValue.getDate() + 1);
		var cName	= $("#"+layerName).find("#seqNo_"+layerName).val();
		var cValue	= $("#"+layerName).find("#chk_"+layerName).is(":checked"); 
		setCookie(cName, cValue, todayValue, "", "", "");
	}
	return false;
}
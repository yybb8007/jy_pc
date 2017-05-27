$(document).ready(function() {
	$("#zhuce-main .main-shezhi li").eq(0).css({
				"border-bottom":"2px solid #e6393d",
				"color": "#e6393d"
			}).find("i").css("background","#E6393D")
	$("#zhuce-main .main-shezhi li").each(function(){
		$(this).click(function(){
			$(this).css({
				"border-bottom":"2px solid #e6393d",
				"color": "#e6393d"
			}).find("i").css("background","#E6393D")
			$(this).siblings().css({
				"border-bottom":"2px solid transparent",
				"color": ""
			}).find("i").css("background","#ccc")
			var idx = $(this).index();
			$("#zhuce-main .li-article").eq(idx).show().siblings(".li-article").hide()
		})
	})
})
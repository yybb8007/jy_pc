
$(document).ready(function() {
	//	最顶部的鼠标滑过事件
	$("#home-top .right .rightLi").hover(function(m,n){
		$(this).find("p").css("color","blue");
		$(this).find(".secleck").css("display","block")
		$(this).find(".down-icon").removeClass("down-icon").addClass("up-icon")
	},function(){
		$(this).find("p").css("color","").css('text-decoration','none')
		$(this).find(".secleck").css("display","none")
		$(this).find(".up-icon").removeClass("up-icon").addClass("down-icon")
		
	});
	//	===================头部输入框的点击事件
	$("#home-header input").focus(function(){
		$(this).siblings(".xiala").show().find("li").each(function(){
			$(this).hover(function(){
				$(this).css({"background":"#95c357","color":"#fff"})
			},function(){
				$(this).css({"background":"#fff","color":"#000"})
			})
			$(this).click(function(){
				var text = ($(this).text());
				$("#home-header input").val(text)
				setTimeout(function(){
					$(".xiala").hide();
				},100)
			})
		});
	}).focusout(function(){
		setTimeout(function(){
			console.log(0)
			$(".xiala").hide();
		},200)
		
	})
})
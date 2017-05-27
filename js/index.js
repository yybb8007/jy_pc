$(document).ready(function() {
	$("#home-header").load("./html/header.html")
	$("#home-footer").load("./html/footer.html")
	   setInterval(GetRTime,1000);
	   homeAside()

//===========================侧栏的左边距离
	function homeAside(){
//		鼠标滑过的时候
//		$('#home-aside ul li').hover(function(){
//			$(this).find('a').addClass('asideStyle')
//		},function(){
//			$(this).find('a').removeClass('asideStyle')
//		})
		var bodyWidth = document.body.clientWidth,
			left = (bodyWidth -1200)/2-70;
			left = left + 'px';
			$("#home-aside").css("left",left)
		$(window).resize(function() {
			var bodyWidth = document.body.clientWidth,
			left = (bodyWidth -1200)/2-70;
			if(left >= 0){
				left = left + 'px';
				$("#home-aside").css("left",left)
			}
		});

		$(window).scroll(function(){
			var top = ($(document).scrollTop());
			if(top > 840){
				$("#home-aside").show()
			}else if(top <= 600){
				$("#home-aside").hide()
			}
			var lh = $(".main-floor").length;
			for(var i=0; i<lh; i++){
				floorTop = $(".main-floor").eq(i).offset().top;
				floorHeight = $(".main-floor")[i].clientHeight;
//				console.log(floorHeight)
////				console.log(floorTop)
				if(top >= (floorTop-150) && top <= (floorTop+floorHeight)){
					var idx = i;
					$('#home-aside ul li').eq(idx+1).find('a').addClass('asideStyle').parent("li").siblings().find('a').removeClass("asideStyle")
				}
			}
		})
	};


	   	function GetRTime(){
	       var EndTime= new Date('2017/06/1 10:00:00'); //截止时间 前端路上 http://www.51xuediannao.com/qd63/
	       var NowTime = new Date();
	       var t =EndTime.getTime() - NowTime.getTime();
	       /*var d=Math.floor(t/1000/60/60/24);
	       t-=d*(1000*60*60*24);
	       var h=Math.floor(t/1000/60/60);
	       t-=h*60*60*1000;
	       var m=Math.floor(t/1000/60);
	       t-=m*60*1000;
	       var s=Math.floor(t/1000);*/

	       var d=Math.floor(t/1000/60/60/24);
	       var h=Math.floor(t/1000/60/60%24);
	       var m=Math.floor(t/1000/60%60);
	       var s=Math.floor(t/1000%60);
		   if(h < 10){ h = ('0'+h) };
		   if(m < 10){ m = ('0'+m) };
		   if(s < 10){ s = ('0'+s) };
		   $('#home-main .mainOne .one .moddle .hour').html(h)
		   $('#home-main .mainOne .one .moddle .minute').html(m)
		   $('#home-main .mainOne .one .moddle .second').html(s)
//	       document.getElementById("t_d").innerHTML = d + "天";
//	       document.getElementById("t_h").innerHTML = h + "时";
//	       document.getElementById("t_m").innerHTML = m + "分";
//	       document.getElementById("t_s").innerHTML = s + "秒";
	   }


//	==========================导航条的设置
	$("#home-nav li").hover(function(m,n){
		$(this).css("background","#5e8f1a").siblings().css("background","#95c357")
	},function(){
		$(this).css("background","#95c357")
		$("#home-nav li").eq(0).css("background","#5e8f1a")

	})
//	==========================轮播图的设置
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 3000,//可选选项，自动滑动
		loop : true,//环路
		prevButton:'.swiper-button-prev',//左右按钮
		nextButton:'.swiper-button-next',
		pagination : '.swiper-pagination',//分页器
		autoplayDisableOnInteraction : false,//点击后继续播放
	})
	$('.swiper-container').mouseenter(function(){
		mySwiper.stopAutoplay()
	}).mouseleave(function(){
		mySwiper.startAutoplay()
	})
	console.log($)

});
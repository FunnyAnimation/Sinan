window.onload = function() {
	var rings = document.querySelectorAll('.ring');
	var bagua = document.getElementById('bagua');
	// 总角度
	var overallAngle = 360;
	for (var i = 0; i < rings.length; i++) {
		var ringContent = rings[i].querySelectorAll('.ceshi');
		var str = '';
		var size = rings[i].style.width;
		for (var index = 0; index < ringContent.length; index++) {
			var averagedeg = overallAngle / ringContent.length;
			var deg = averagedeg * index;
			// 删除文本
			ringContent[index].style.transform = 'rotate(' + deg + 'deg)';
			ringContent[index].style.transformOrigin= 'calc('+size+'/ 2)' +' '+ 'calc('+size+'/ 2)'
			str += "<p style='transform: rotate(" + deg + "deg);" + 'transform-origin:'+ size +'px' + size+ 'px;' + "'></p>";
		}
		if(rings[i].querySelector('.eightGua_border')){
			rings[i].querySelector('.eightGua_border').innerHTML = str;
		}
	}
	var eightGua = document.getElementById('eightGua');
	var style_add_dizhi = document.getElementsByClassName('style_add_dizhi')[0]
	// transformShow滚动开关
	var transformShow = true;
	// 时间
	if (transformShow) {
		var sDeg = 0;
		// sencond360秒针圈数
		var sencond360 = 0
		var mounth360 = 0
		var oldsencond = 0
		var oldmounth = 0
		function cur() {
			var now = new Date();
			var h = now.getHours(); //时
			var m = now.getMinutes(); //分
			var sencond = now.getSeconds(); //秒
			let mounth = now.getMonth() //月
			if(sencond == 0 && oldsencond != sencond){
				sencond360 = sencond360 + 1 
			}
			if(mounth == 0 && oldmounth != mounth){
				mounth360 = mounth360 + 1 
			}
			bagua.style.transform = 'translate(-50%,-50%) rotate(' + (sencond360*360 + (sencond-1)*6) + 'deg)';
			eightGua.style.transform = 'translate(-50%,-50%) rotate(' + -(sDeg++) * 10 + 'deg)';
			style_add_dizhi.style.transform = 'translate(-50%,-50%) rotate(' + (mounth360*360 + (mounth)*30 + 45) + 'deg)';
			// mounth360*360 + (mounth)*30

			oldsencond = sencond
			oldmounth = mounth
		}
		cur();
		setInterval(cur, 1000);
	}
	// 时间
}


  
  
  


function css (obj,attr) {
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
function fade(obj,target){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
          var alpha=0;
          var cur=css(obj,'opacity')*100;
          alpha=(target-cur)/8;
          alpha=alpha>0?Math.ceil(alpha):Math.floor(alpha);
          cur+=alpha;
          obj.style.opacity=cur/100;
          obl.style.filter='alpha(opacity='+cur+')';
          if(cur==target){
          	clearInterval(obj.timer);
          	obj.timer=null;
          }
	}
		,30)
}
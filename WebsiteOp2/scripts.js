function initialize(){
	var position = 0;
	resizeScroller();
	runScroll(position);
	window.onresize = function(){resizeScroller();};
	setInterval(function(){runScroll(position); position++;}, 5000);
}

function runScroll(position){
	var scroller = document.getElementById("scroller1");

	for(var i = 1; i < scroller.childNodes.length; i += 2)
	{
		scroller.childNodes[i].className = "a" + (((position + ((i+1)/2))%5)+1);
	}
}

function resizeScroller(){
	var topElement = document.getElementById("top");
	var scroller = document.getElementById("scroller1");
	
	scroller.style.top = topElement.clientY + "px";
	scroller.style.left = topElement.clientX + "px";
	scroller.style.width = topElement.clientWidth + "px";
	scroller.style.height = scroller.childNodes[1].offsetHeight + "px";
	//scroller.style.clip = "rect(" + 0 + "px, " + topElement.clientWidth + "px, " + topElement.clientHeight + "px, " + 0 + "px)";
	scroller.style.position = "relative"; 
}

function serviceScroll(location){
	var parent = document.getElementById("servicesScrollContainer");
	var child = parent.childNodes[location];
	var speed = 30;
	var currentState = 0;
	var maxCalls = 100;
	var accel = 1;
	var parScrlTp = parent.scrollTop;
	var scrlInt = setInterval(function(){if((currentState)/maxCalls > 1){currentState = maxCalls;} if(currentState >= maxCalls){clearInterval(scrlInt);} parent.scrollTop = lerp(parScrlTp, (child.offsetTop - parent.offsetTop), (currentState/maxCalls)); currentState += accel; accel++;}, speed);
	//parent.scrollTop = child.offsetTop - parent.offsetTop;
}

function lerp(v0, v1, t)
{
	return ((1-t)*v0 + t*v1);
}
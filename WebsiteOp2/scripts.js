function serviceScroll(location, parentId){
	var parent = document.getElementById(parentId);
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
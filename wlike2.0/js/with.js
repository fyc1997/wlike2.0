// JavaScript Document
APdiv=new Array("set","letter");
RightBlock=[{"icon":"my_club","part":"right_part_club"},{"icon":"my_friend","part":"right_part_friend"}]
/*RightPart=new Array("right_part_club","right_part_friend");
RightIcon=new Array("my_club","my_friend");*/
function top_head(){
	var headW=$("#headNname").outerWidth(true),
	midW=$("#top_mid").outerWidth(true);
	var cha=headW/midW;
	$("#headNname").css("left",(1-cha)*98/2+"%");
}
function gainHeight(){
	cHeight=$(document).height();
	topHeight=$("#side_top").outerHeight();
	nowHeight=cHeight-topHeight;
	$("#navi").css("height",nowHeight+"px");
	$("#set").css("height",nowHeight+"px");
	$("#letter").css("height",nowHeight+"px");
	$("#main_pillar").css("height",nowHeight+"px");
}
function openNavi(flag){
	if(flag==1){
		$("#naviClose").fadeOut(100);
		$("#naviShow").fadeIn(300);
		$("#navi").slideDown(600);
	}
	else if(flag==0){
		$("#naviClose").fadeIn(500);
		$("#naviShow").fadeOut(500);
		$("#navi").slideUp(600);
	}
}
function openNaviInfo(id,id1,id2){
	if($("#"+id).css("display")=="none"){
		$("#"+id).css("display","block");
		$("#"+id1).css("display","none");
		$("#"+id2).css("display","block");
	}
	else if($("#"+id).css("display")=="block"){
		$("#"+id).css("display","none");
		$("#"+id2).css("display","none");
		$("#"+id1).css("display","block");		
	}
}
function naviIconChange(ev){
	if(ev.id=="navi_index"){
		ev.childNodes[1].src="images/indexBlue.png";
	}
	else if(ev.id=="navi_special"){
		ev.childNodes[1].src="images/specialBlue.png";
	}
	else if(ev.id=="navi_hot"){
		ev.childNodes[1].src="images/hotBlue.png";
	}
	else if(ev.id=="navi_info"){
		ev.childNodes[1].src="images/meBlue.png";
	}
	else if(ev.id=="navi_club"){
		ev.childNodes[1].src="images/hobbyBlue.png";
	}
	else if(ev.id=="navi_friend"){
		ev.childNodes[1].src="images/friendBlue.png";
	}
	else if(ev.className=="select_num1"){
		ev.childNodes[0].src="images/pointBlue.png";
	}
	else if(ev.className=="select_num2"){
		ev.childNodes[0].src="images/contentBlue.png";
	}
	else if(ev.className=="select_num3"){
		ev.childNodes[0].src="images/repostBlue.png";
	}
	else if(ev.className=="select_num4"){
		ev.childNodes[0].src="images/keepBlue.png";
	}
}
function naviIcon(ev){
	if(ev.id=="navi_index"){
		ev.childNodes[1].src="images/index.png";
	}
	else if(ev.id=="navi_special"){
		ev.childNodes[1].src="images/special.png";
	}
	else if(ev.id=="navi_hot"){
		ev.childNodes[1].src="images/hot.png";
	}
	else if(ev.id=="navi_info"){
		ev.childNodes[1].src="images/me.png";
	}
	else if(ev.id=="navi_club"){
		ev.childNodes[1].src="images/hobby.png";
	}
	else if(ev.id=="navi_friend"){
		ev.childNodes[1].src="images/friend.png";
	}
	else if(ev.className=="select_num1"){
		ev.childNodes[0].src="images/point.png";
	}
	else if(ev.className=="select_num2"){
		ev.childNodes[0].src="images/content.png";
	}
	else if(ev.className=="select_num3"){
		ev.childNodes[0].src="images/repost.png";
	}
	else if(ev.className=="select_num4"){
		ev.childNodes[0].src="images/keep.png";
	}
}
function iconChangeBlue(id,id1){
	if(id=="changeIcon"){
		$("#"+id).attr("src","images/changeBlue.png");
	}		
	else if(id=="friend_chat"){
		$(".friend_chat"+id1).css("display","none");
		$(".friend_chat_char"+id1).css("display","block");
	}
}
function iconChange(id,id1){
	if(id=="changeIcon"){
		$("#"+id).attr("src","images/change.png");
	}
	else if(id=="friend_chat"){	
		$(".friend_chat_char"+id1).css("display","none");
		$(".friend_chat"+id1).css("display","block");
	}
}
function openSelect(id1,id2,id11,id12,id21,id22){
	if($("#"+id1).css("display")=="none" && $("#"+id2).css("display")=="block"){
		$("#"+id21).css("display","none");
		$("#"+id22).css("display","block");
	}
	else if($("#"+id1).css("display")=="block" && $("#"+id2).css("display")=="none"){
		$("#"+id11).css("display","none");
		$("#"+id12).css("display","block");
	}
}
function closeSelect(id1,id2,id11,id12,id21,id22){
	if($("#"+id1).css("display")=="none" && $("#"+id2).css("display")=="block"){
		$("#"+id22).css("display","none");
		$("#"+id21).css("display","block");
	}
	else if($("#"+id1).css("display")=="block" && $("#"+id2).css("display")=="none"){
		$("#"+id12).css("display","none");
		$("#"+id11).css("display","block");
	}
}
function openRightIcon(icon,part,label){
	/*var count=0;
	if($("#"+id2).css("display")=="none"){
		for (var i=0;i<RightPart.length;i++){
			if($("#"+RightPart[i]).css("display")=="block"){
				$("#"+RightPart[i]).css("display","none");
				$("#"+RightIcon[i]).css("display","block");
				$("#main_mid").css("margin","0px auto");
				$("#main_mid").css("margin-top",$("#side_top").outerHeight()+"px");
				fits_main_pillar();
			}
			if(id2==RightPart[i]){
				count++;
			}
		}
		$("#"+id1).css("display","none");
		$("#"+id2).css("display","block");
		if(count==1){
			$("#main_mid").css("margin-right","400px");
			fits_main_pillar();
		}
	}*/
	if (label=="open"){
		$("#main_mid").css("transform","translateX(-100px)");
		for (var i in RightBlock){
			if ($("#"+RightBlock[i].part).css("display")=="block"){
				$("#"+RightBlock[i].part).hide(400);//遍历将打开的part关闭
				$("#"+RightBlock[i].icon).css("display","block");//遍历将关闭的icon打开
				break;
			}
		}
	}else if(label=="close"){
		$("#main_mid").css("transform","translateX(0px)");
	}
	$("#"+icon).css("display","none");
	$("#"+part).show(300);
}
function openSetOrLetter(id){
	if($("#"+id).css("display")=="none"){
		for (var i=0;i<APdiv.length;i++){
			if($("#"+APdiv[i]).css("display")=="block"){
				$("#"+APdiv[i]).css("display","none");
			}
		}
		$("#"+id).fadeIn(500);
	}
	else if($("#"+id).css("display")=="block"){
		$("#"+id).fadeOut(500);
	}
}
/*function fits_main_pillar(){
	var left=$("#main_mid").offset().left;
	$("#main_pillar").css("left",(left+205.5)+"px")
}*/
function beTop(){
	scrollTo(0,0);
}
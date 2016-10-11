function mainHeight(){
	var thankYouHeight = document.getElementById('main').clientHeight
	var margin = (window.innerHeight-(150+thankYouHeight))/2;
	if (margin < 0) {margin = '%'};
	document.getElementById('main').setAttribute("style","margin-top:"+ margin +"px;margin-bottom:"+ margin +"px");
}

function login(){
  var forum = document.getElementsByClassName("forum");
  var forumName = document.getElementById("first name").value +" "+  document.getElementById("middle name").value +" "+  document.getElementById("last name").value;
  var forumDOB = document.getElementById("DOB").value;
  var forumEmail = document.getElementById("email address").value;
  
  document.getElementById('main').removeAttribute('class');
  var thankYou='<center><h1 style="font-size:36px">THANK YOU</h1><h2>For subscrbing</h2></center><a onClick="showDetail();" style="float: right;cursor: pointer;text-decoration: underline;margin-right: 40px;">To check Detail</a><article id="detail" style="margin-left: 40px;"></article>';
  document.getElementById('main').innerHTML=thankYou;
  var thankYouHeight = document.getElementById('main').clientHeight;
  mainHeight();
  
  detail='<p>Name:'+forumName+'</p><p>Date Of Birth:'+forumDOB+'</p><p>Email address:'+forumEmail+'</p>';
  
  window.onresize = function(){mainHeight()};
}

function showDetail(){
  document.getElementById('detail').innerHTML = detail; 
  mainHeight();
}


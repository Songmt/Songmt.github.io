let myImage=document.querySelector('img');
let myButton=document.querySelector('#btn1');
let myHeading=document.querySelector('h1');
myImage.onclick=function(){
	let mySrc=myImage.getAttribute('src');
	if(mySrc==='images/2020041019021430937.png'){
		myImage.setAttribute('src','images/火狐截图_2019-12-08T12-25-50.116Z.png');
	}else{
		myImage.setAttribute('src','images/2020041019021430937.png');
	}
}
function setUserName(){
	let myName=prompt('请输入你的名字');
	if(!myName||myName===null){
		setUserName();
	}else{
	localStorage.setItem('name',myName);
	myHeading.textContent='Mozilla so cool!,'+myName;
	}	
}
if(!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName=localStorage.getItem('name');
	myHeading.textContent='Mozilla so cool !,'+storedName;
}
myButton.onclick=function(){
	setUserName();
}
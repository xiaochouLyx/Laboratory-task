//事件委托
// document.addEventListener("click",function(event){
//     var target=event.target;
//     if (target.nodeName=="LI") {
//     	var he = target.parentNode.parentNode.childNodes;
//       	for (var i=0; i<he.length; i++){
//         	he[i].className="text1";
//       	}
//       target.parentNode.className="text";
//     }
//   });

//DOM
 // var shunxu=document.getElementsByTagName("li");
 //  // console.log(shunxu);
 //  for(var i=0;i<shunxu.length;i++) {
 //  //console.log(shunxu[i]);
 //  shunxu[i].onclick=function() {
 //    for(var j=0;j<shunxu.length;j++) {
 //      // shunxu[j].style="border-bottom: 0px";
 //      shunxu[j].className="text1";
 //      }
 //      this.className="text";
 //    }
 //  }

  
//想传参但没有成功
 	/*function bottom(di) {
      di.style.borderBottom="5px soild white"; 
    }*/


//笨方法
    // function bottom1() {
    //   var di=document.getElementById("one");
    //   var other1=document.getElementById("three");
    //   var other2=document.getElementById("two");
    //   di.style="border-bottom:5px solid white";
    //   other1.style="border-bottom:0px";
    //   other2.style="border-bottom:0px";
    // }
    // function bottom2() {
    //   var di=document.getElementById("two");
    //   var other1=document.getElementById("three");
    //   var other2=document.getElementById("one");
    //   di.style="border-bottom:5px solid white";
    //   other1.style="border-bottom:0px";
    //   other2.style="border-bottom:0px";
    // }
    // function bottom3() {
    //   var di=document.getElementById("three");
    //   var other1=document.getElementById("two");
    //   var other2=document.getElementById("one");
    //    di.style="border-bottom:5px solid white";
    //    other1.style="border-bottom:0px";
    //    other2.style="border-bottom:0px";
    //}

//白色底部边框区域的变化
var smalldaohang = document.getElementById("smalldaohang");
var content = document.getElementById("content");
var smalldaohangChild = smalldaohang.children;
var contentChild = content.children;
var a = daohang.offsetHeight;
var d = content.offsetTop - a;
window.onscroll = function() {
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	for(var i=0;i<smalldaohangChild.length;i++) {
		if(scrollTop - d >=contentChild[i].offsetTop){
			for(var j=0;j<smalldaohangChild.length;j++) {
				smalldaohangChild[j].className="cur";
			}
			smalldaohangChild[i].className="one";
		}
	}
	//蓝色横条的变化
	var height2 = 1129;
	var blue = document.getElementById("blue");
	blue.style.width = parseFloat(scrollTop / height2) * 1519.2 +"px"; 
}

//submit提交
 function sub() {
 	var a = document.getElementById("print1");
 	var b = document.getElementById("print2");
 	var kuang1 = a.value;
 	var kuang2 = b.value;
 	var email = "mailto:leiyx2000@outlook.com?subject="+kuang1+"&cc=leiyx2000@outlook.com&body="+kuang2;
 	if(kuang1 == "" && kuang2 == "") {
 		alert("You must complete both subject and content");
 	}
 	else if (kuang1!=""&&kuang2!="") {
 		var r=confirm("This will use you local client");
 		if (r==true) {
 		window.location.href = email;
 	}
 	}
}


//文本框内容  emmm,用的事件委托，还需多加练习叭
/*document.addEventListener("keydown",function(event){
	var target=event.target;
	var father = document.getElementById("left");
	var a = target.className;
	if (a == "shuru1") {
		var b = document.createElement('span');
		b.className = "subj";
		b.value = "Subject";
		father.appendChild(b);
	}
	else if (a == "shuru2") {
		var c=document.createElement('span');
		c.className= "cont";
		c.value = "Content";
		father.appendChild(c);
	}
	else {
		return false;
	}
})*/


//文本框事件
document.onkeydown = function(event){
	var kcode = event.keyCode;
	if( kcode!= 8) {
		var target=event.target;
		var test = document.getElementsByTagName("p");
		var father = document.getElementById("left");
		if (target.className == "shuru1") {
			if(test.length == 0){
				var b = document.createElement('p');
				b.className = "subj";
				b.innerHTML= "Subject";
				father.appendChild(b);
			}
		}

		/*var a=document.getElementsByTagName("p");
		console.log(a);
		var d = document.getElementById("print1").innerHTML;
		if(d=="") {
				a.innerHTML="";
			}*/
		if (target.className == "shuru2") {
			var test1 = document.getElementsByTagName("small");
			if(test1.length == 0){
				var c=document.createElement('small');
			 	c.className= "cont";
			 	c.id = "cont";
			 	c.innerHTML = "Content";
			 	father.appendChild(c);
			}
			/*var e = document.getElementById("print2").innerHTML;
			if(e=="") {
				test1.innerHTML="";
			}*/
		}
	}
}

document.onkeyup =function(event){
		var target=event.target;
		var test = document.getElementById("left").childNodes;
		var d = document.getElementById("print1").value;
		var d1 = document.getElementById("print2").value;
		var father = document.getElementById("left");
		if (target.className == "shuru1") {
			if(d.length==0) {
				for(var i=0;i<test.length;i++) {
					if(test[i].className == "subj") {
						test[i].remove();
					}
				}
			}
		}
		if (target.className == "shuru2") {
			if(d1.length==0) {
				for(var i=0;i<test.length;i++) {
					if(test[i].className == "cont") {
						/*console.log(test[i].innerHTML);
						test[i].innerHTML =="";*/
						test[i].remove();
					}
				}
			}
		}
	}

/*	if(this.className==shuru1){

	}
	var b = document.createElement('div');
	b.className = "subj";
	b.innerHTML= "Subject";
	console.log(b);
	father.appendChild(b);
	// var h=b.value;
	// console.log(h);
	var d = document.getElementById("print1").value;
	if(d=="") {
		b.innerHTML="";
		return;
	}
}
function two() {
	var c=document.createElement('div');
	c.className= "cont";
	c.innerHTML = "Content";
	father.appendChild(c);
	var e = document.getElementById("print2").innerHTML;
	if(e=="") {
		c.innerHTML="";
		return;
	}
}*/


//实现字体逐个打印的效果
/*function zhubu(){
 var index=0;
 var a=document.getElementById("show");
 a.style = "display:inline-block;text-decoration:underline;";
 var str = document.getElementById("zhubu").innerHTML;
 var c = document.getElementById("show");
 function type() {
 	if (index-1 == str.length) {
 		return false;
 	}
 	c.innerHTML = str.substring(0,index++);
 }
 setInterval(type, 150);
}

function xiaochu() {
	var a = document.getElementById("show");
	a.style = "display:none";
}*/
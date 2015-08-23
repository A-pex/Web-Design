			function detectMobile() { 
 				if( navigator.userAgent.match(/Android/i)
 					|| navigator.userAgent.match(/webOS/i)
					|| navigator.userAgent.match(/iPhone/i)
 					|| navigator.userAgent.match(/iPad/i)
 					|| navigator.userAgent.match(/iPod/i)
 					|| navigator.userAgent.match(/BlackBerry/i)
 					|| navigator.userAgent.match(/Windows Phone/i)
 				){
 					convertMobile();
  				}
 				else {
    				changeStyle("default.css");
  				}
			}
			function convertMobile() {
				changeStyle("mobile.css");
				changeImage("bgimg", "Photos/mobileBg.png");
				document.getElementById("menu").innerHTML = '<ul><li id = "logoContainer"><img id = "logoImage" src ="Photos/apexLogo.fw.png" width = 40px > </li></ul>';
			}
			function changeImage(id, img) {
				document.getElementById(id).setAttribute("src", img);
			}
			function changeStyle(sheet) {
				document.getElementById("pageStyle").setAttribute("href", sheet);
			}
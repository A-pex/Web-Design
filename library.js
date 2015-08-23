			/* this function detects if a user is viewing 
			the website from one of the mobiles listed below, 
			if so, it runs another function to make the site
			 more mobile friendly. */
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
			/* This function converts the site to a 
			more mobile friendly layout by changing 
			the stylesheet, which changes things 
			such as text size to make it easier 
			to read on a small screen. It also 
			changes the background image and 
			removes menu items that are unneeded
			on the mobile site */
			function convertMobile() {
				changeStyle("mobile.css");
				changeImage("bgimg", "Photos/mobileBg.png");
				document.getElementById("menu").innerHTML = '<ul><li id = "logoContainer"><img id = "logoImage" src ="Photos/apexLogo.fw.png" width = 40px > </li></ul>';
			}
			/* this function can be used to change
			any image on the site to another image
			assuming that the image has an ID. */
			function changeImage(id, img) {
				document.getElementById(id).setAttribute("src", img);
			}
			/* this function can be used to change the page's stylesheet */
			function changeStyle(sheet) {
				document.getElementById("pageStyle").setAttribute("href", sheet);
			}
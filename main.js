
	
		var i = 0;
		var images = [];
		var time = 4000;
		images[0]="images/ipad.png";
		images[1]="images/ipad2.png";
		images[2]="images/ipad3.png";
		function changeImg(){
			document.slide.src = images[i];
			if(i<images.length -1){
				i++;
			}else{
				i = 0;
			}
			setTimeout("changeImg()",time);
		}
		window.onload=changeImg;
	
	// <img src="images/ipad.png" name="slide" width="400" height="200" alt="">

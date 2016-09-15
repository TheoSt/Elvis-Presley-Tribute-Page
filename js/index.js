//for the slideshow
$(document).ready(function() {
	var slideIndex=1;
	//take all the images of "slides" class
	var image_array = $(".slides");
	//to show only the first image and "hide" the others
	showImg(slideIndex);
  
	//click listeners for the buttons
	//if we press next slideIndex+1
	//if we press previous slideIndex-1
	$("#next-btn").click(function() {
		showImg(slideIndex+=1);
	});
	$("#previous-btn").click(function() {
		showImg(slideIndex-=1);
	});
  
	//this function does the change of the picture
	function showImg(n) {
		var i;
    
		//if n is greater than the number of pictures
		//it means that we are in the last picture
		//so we go to the first
		if(n > image_array.length) { slideIndex = 1; }
		//if n is less than 1 it means that we are in
		//the first picture and clicked previous
		//so we go the last picture
		if(n<1) { slideIndex = image_array.length; }
  
		//for every element of x array
		//change the css display to none
		//(it hides every picture)
		$.each(image_array,function(i,val) {
		$(val).css("display","none");     
		});
    
		//then take the first picture
		//change the css display to block 
		//and now it shows only the first picture
    
		$(image_array[slideIndex-1]).css("display","block").fadeIn("slow");
	}
});
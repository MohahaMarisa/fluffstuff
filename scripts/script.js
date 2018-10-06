$(document).ready(function() {
	// var reds = document.querySelectorAll(".red-circle");
	var reds = document.getElementsByClassName('red-circle');
	var greys = document.getElementsByClassName('grey-circle');
	var yellows = document.getElementsByClassName('yellow-circle');
	var navys = document.getElementsByClassName('navy-circle');
	for(var i=0; i<reds.length; i++){		
		reds[i].addEventListener("mouseover", function(){
			var whichImg = "1";
			var that = $(this).parents('.product-category').children('.product').children('.three-quarter');
			changeImg(that, whichImg);
		});
		greys[i].addEventListener("mouseover", function(){
			var whichImg = "2";
			var that = $(this).parents('.product-category').children('.product').children('.three-quarter');
			changeImg(that, whichImg);
		});
		yellows[i].addEventListener("mouseover", function(){
			var whichImg = "3";
			var that = $(this).parents('.product-category').children('.product').children('.three-quarter');
			changeImg(that, whichImg);
		});
		navys[i].addEventListener("mouseover", function(){
			var whichImg = "4";
			var that = $(this).parents('.product-category').children('.product').children('.three-quarter');
			changeImg(that, whichImg);
		});
	}
	function changeImg(that, which){
		var newImg = that.parents('.product-category').children('.product').children('.three-quarter').attr('src');
		
		newImg = newImg.slice(0,newImg.length-5) + which + newImg.slice(newImg.length-4);
		var whichProduct = that.attr('src',newImg);
	}


	//make sure the lightboxes popup for their corresponding product!
	document.getElementById('dot').addEventListener("click", function(){
		document.getElementById('dot-popup').style.visibility = "visible";
		document.getElementById('shadowBG').style.visibility = "visible";	
	});
	document.getElementById('bed').addEventListener("click", function(){
		document.getElementById('bed-popup').style.visibility = "visible";
		document.getElementById('shadowBG').style.visibility = "visible";	
	});
		document.getElementById('floor').addEventListener("click", function(){
		document.getElementById('floor-popup').style.visibility = "visible";
		document.getElementById('shadowBG').style.visibility = "visible";	
	});
			document.getElementById('couch').addEventListener("click", function(){
		document.getElementById('couch-popup').style.visibility = "visible";
		document.getElementById('shadowBG').style.visibility = "visible";	
	});

	var x = document.getElementsByClassName('x');
	var lightboxes = document.getElementsByClassName('lightbox');
	for (var i =0; i<x.length; i++){
		x[i].addEventListener("click", function(){
			document.getElementById('shadowBG').style.visibility = "hidden";
			var lightboxes = document.getElementsByClassName('lightbox');
			for(var j = 0; j < lightboxes.length; j++){
				lightboxes[j].style.visibility = "hidden";
			}
		});
	}

	 

});

// jQuery(window).load(function() {	
// 	/*---------------------------------------------- 
// 				   	L I G H T C A S E
// 	------------------------------------------------*/
// 	if(jQuery().lightcase) { 
// 		jQuery('a[data-rel^=lightcase]').lightcase({ 
// 			showSequenceInfo: false, 
// 			swipe: true, 
// 			showCaption:false,
// 			video: {
// 				width : 780,
// 				height : 420
// 				}
// 		});
// 	}
// });	
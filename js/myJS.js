function formatSlideImages(){
	var offsets = new Array();
	var slideTops = new Array();

	var image = document.querySelectorAll(".slide-image");
	var descContainer = document.querySelectorAll(".slide-desc-inner-container");
	var desc = document.querySelectorAll(".slide-desc");
	var imageContainer = document.querySelectorAll(".slide-image-container");
	for (var i=0; i<image.length; i++){
		//Height Section
		var height = image[i].height;
		descContainer[i].style.height = height + "px";
		imageContainer[i].style.height = height + "px";
		var offset = height - desc[i].offsetHeight - desc[i].offsetTop - 45;
		offsets[i] = offset;
		//Placement Section
		slideTop = height - 45;
		descContainer[i].style.top = slideTop + "px";
		slideTops[i] = slideTop;
		//Width Section
		var width = image[i].width;
		descContainer[i].style.width = width + "px";
		imageContainer[i].style.width = width + "px";
	}
	//Handle the Hover Mechanics
    $("div.slide-image-container").each(function(index) {
    $(this).hover(function() {
   		$(this.lastElementChild).css("top",offsets[index] + "px")
   	},function(){
   		$(this.lastElementChild).css("top",slideTops[index] + "px")   		
    });
	});

}

function paddingToCenterDiv(innerDivHeight, outerDivHeight){
	padding = outerDivHeight - innerDivHeight;
	padding = padding / 2;
	return padding;
}